import React, { useState } from "react";
import Logo from "@/assets/images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useDispatch } from "react-redux";
import { setToken } from "@/redux/slices/authSlice";
import useMutationClient from "@/hooks/useMutationClient";
import CommonLoader from "@/components/common/CommonLoader";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate, isPending } = useMutationClient({
    url: "/auth/login",
    method: "post",
    successMessage: "Welcome Back!",
    onSuccess: (res) => {
      const data = res?.data || res;
      if (data.success) {
        dispatch(setToken({ token: data.token, user: data.user }));
        navigate("/dashboard");
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ data: formData });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex items-center justify-center p-4">
      <div className="w-full max-w-[480px] bg-white rounded-xl shadow-sm border border-[#D6DDEB] p-8 lg:p-12">
        <div className="flex flex-col items-center gap-8 mb-10">
          <Link to="/">
            <img src={Logo} alt="QuickHire" className="h-10 object-contain" />
          </Link>
          <div className="text-center">
            <h1 className="font-clash-display text-[32px] font-semibold text-[#25324B]">
              Welcome Back
            </h1>
            <p className="text-[#7C8493] font-epilogue mt-2">
              Admin login to manage QuickHire listings
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-epilogue font-semibold text-[#515B6F]">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="px-4 py-3 border border-[#D6DDEB] rounded-lg outline-none focus:border-Primary transition-all font-epilogue"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              disabled={isPending}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-epilogue font-semibold text-[#515B6F]">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full px-4 py-3 border border-[#D6DDEB] rounded-lg outline-none focus:border-Primary transition-all font-epilogue"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
                disabled={isPending}
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7C8493]"
                disabled={isPending}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="bg-Primary text-white h-[40px] rounded-lg font-bold font-epilogue hover:bg-[#3b36c4] shadow-lg shadow-[#4640de]/20 transition-all mt-2 disabled:opacity-70 flex items-center justify-center min-h-[56px]"
            disabled={isPending}
          >
            {isPending ? <CommonLoader /> : "Login"}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-[#D6DDEB] pt-8">
          <p className="text-[#7C8493] font-epilogue">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-Primary font-bold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
