import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "./useAxiosPublic";
import useAxiosSecure from "./useAxiosSecure";
import { toast } from "react-toastify";

const useMutationClient = ({
  url,
  method = "post",
  isPrivate = false,
  invalidateKeys = [],
  successMessage = "Success",
  redirectTo,
  onSuccess: externalOnSuccess,
  onError: externalOnError,
}) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const client = isPrivate ? useAxiosSecure() : useAxiosPublic();

  return useMutation({
    mutationFn: async ({ data, config, url: dynamicUrl } = {}) => {
      const finalUrl = dynamicUrl || url;
      if (method === "delete") return await client.delete(finalUrl, config);
      return await client[method](finalUrl, data, config);
    },

    onSuccess: (res) => {
      const data = res?.data || res;
      toast.success(data?.message || successMessage);

      // ♻️ Invalidate related queries
      invalidateKeys.forEach((key) => {
        const queryKey = Array.isArray(key) ? key : [key];
        queryClient.invalidateQueries({ queryKey });
      });

      if (externalOnSuccess) externalOnSuccess(res);
      if (redirectTo) navigate(redirectTo);
    },

    onError: (error) => {
      const msg =
        error?.response?.data?.message ||
        error.message ||
        "Something went wrong";
      toast.error(msg);
      if (externalOnError) externalOnError(error);
    },
  });
};

export default useMutationClient;
