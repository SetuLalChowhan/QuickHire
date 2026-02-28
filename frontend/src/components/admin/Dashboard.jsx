import React, { useState } from "react";
import { Plus, Trash2, MapPin, Building2, Briefcase, X } from "lucide-react";
import { useForm } from "react-hook-form";
import useClient from "@/hooks/useClient";
import useMutationClient from "@/hooks/useMutationClient";
import CommonLoader from "@/components/common/CommonLoader";

const Dashboard = () => {
  const [showAddJob, setShowAddJob] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Fetch Jobs
  const {
    data: jobResponse,
    isLoading,
    refetch,
  } = useClient({
    queryKey: ["jobs"],
    url: "/jobs",
    isPrivate: false,
  });

  const jobs = jobResponse?.data || [];

  // Create Job Mutation
  const { mutate: createJob, isPending: isCreating } = useMutationClient({
    url: "/jobs",
    method: "post",
    isPrivate: true,
    successMessage: "Job created successfully!",
    onSuccess: () => {
      setShowAddJob(false);
      reset();
      refetch();
    },
  });

  // Delete Job Mutation
  const { mutate: deleteJob, isPending: isDeleting } = useMutationClient({
    url: "/jobs", // Base URL will be overridden in dynamic call
    method: "delete",
    isPrivate: true,
    successMessage: "Job deleted successfully!",
    onSuccess: () => refetch(),
  });

  const onJobSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("company", data.company);
    formData.append("location", data.location);
    formData.append("category", data.category);
    formData.append("description", data.description);
    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    createJob({ data: formData });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      deleteJob({ url: `/jobs/${id}` });
    }
  };

  if (isLoading) return <CommonLoader />;

  return (
    <div className="flex flex-col gap-8 p-6 lg:p-10 font-epilogue">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#25324B]">Job Management</h1>
          <p className="text-[#7C8493] mt-2">
            Create and manage your job listings
          </p>
        </div>
        <button
          onClick={() => setShowAddJob(true)}
          className="bg-Primary text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-[#3b36c4] shadow-lg shadow-[#4640de]/20 transition-all text-sm md:text-base"
        >
          <Plus size={20} /> Add New Job
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-base">
        {[
          {
            label: "Total Jobs",
            value: jobResponse?.totalJobs || 0,
            color: "text-Primary bg-Primary/10",
          },
          {
            label: "Applications",
            value: "24",
            color: "text-[#56CDAD] bg-[#56CDAD]/10",
          },
          {
            label: "Active Users",
            value: "152",
            color: "text-[#FFB836] bg-[#FFB836]/10",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="p-8 bg-white rounded-xl border border-[#D6DDEB] shadow-sm"
          >
            <h3 className="text-[#7C8493] font-semibold text-lg">
              {stat.label}
            </h3>
            <p
              className={`text-4xl font-bold mt-4 ${stat.color.split(" ")[0]}`}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Job List Table */}
      <div className="bg-white rounded-xl border border-[#D6DDEB] shadow-sm overflow-hidden text-sm md:text-base">
        <div className="p-6 border-b border-[#D6DDEB]">
          <h2 className="text-xl font-bold text-[#25324B]">
            Recent Job Postings
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#F8F9FB] border-b border-[#D6DDEB]">
                <th className="px-6 py-4 font-bold text-[#515B6F]">Job Role</th>
                <th className="px-6 py-4 font-bold text-[#515B6F]">Company</th>
                <th className="px-6 py-4 font-bold text-[#515B6F]">Location</th>
                <th className="px-6 py-4 font-bold text-[#515B6F]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs?.map((job) => (
                <tr
                  key={job._id}
                  className="border-b border-[#D6DDEB] hover:bg-[#F8F9FB] transition-all"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-Primary/5 text-Primary rounded flex items-center justify-center overflow-hidden">
                        {job.image ? (
                          <img
                            src={`${import.meta.env.VITE_IMG_URL}${job.image}`}
                            alt={job.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Briefcase size={20} />
                        )}
                      </div>
                      <span className="font-bold text-[#25324B]">
                        {job.title}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-[#515B6F]">
                      <Building2 size={18} className="opacity-60" />
                      {job.company}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-[#515B6F]">
                      <MapPin size={18} className="opacity-60" />
                      {job.location}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(job._id)}
                      disabled={isDeleting}
                      className="p-2 text-[#FF6550] hover:bg-[#FF6550]/10 rounded transition-all disabled:opacity-50"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
              {jobs.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-10 text-center text-[#7C8493]"
                  >
                    No jobs found. Post a new job to get started!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Job Modal */}
      {showAddJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-[100] font-epilogue overflow-y-auto">
          <div className="bg-white w-full max-w-[700px] rounded-xl shadow-2xl p-8 relative my-8 animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setShowAddJob(false)}
              className="absolute top-6 right-6 text-[#7C8493] hover:text-[#25324B]"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold text-[#25324B] mb-2 leading-tight">
              Create New Job listing
            </h2>
            <p className="text-[#7C8493] mb-8">
              Fill in the details below to post a new job opportunity.
            </p>

            <form
              onSubmit={handleSubmit(onJobSubmit)}
              className="flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-[#515B6F]">
                    Job Title *
                  </label>
                  <input
                    {...register("title", {
                      required: "Job title is required",
                    })}
                    type="text"
                    placeholder="e.g. Full Stack Developer"
                    className={`p-3 border rounded outline-none focus:border-Primary transition-all ${errors.title ? "border-red-500" : "border-[#D6DDEB]"}`}
                  />
                  {errors.title && (
                    <span className="text-red-500 text-xs">
                      {errors.title.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-[#515B6F]">
                    Company *
                  </label>
                  <input
                    {...register("company", {
                      required: "Company name is required",
                    })}
                    type="text"
                    placeholder="e.g. Google"
                    className={`p-3 border rounded outline-none focus:border-Primary transition-all ${errors.company ? "border-red-500" : "border-[#D6DDEB]"}`}
                  />
                  {errors.company && (
                    <span className="text-red-500 text-xs">
                      {errors.company.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-[#515B6F]">
                    Location *
                  </label>
                  <input
                    {...register("location", {
                      required: "Location is required",
                    })}
                    type="text"
                    placeholder="e.g. Remote / Sydney, Australia"
                    className={`p-3 border rounded outline-none focus:border-Primary transition-all ${errors.location ? "border-red-500" : "border-[#D6DDEB]"}`}
                  />
                  {errors.location && (
                    <span className="text-red-500 text-xs">
                      {errors.location.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-[#515B6F]">
                    Category *
                  </label>
                  <input
                    {...register("category", {
                      required: "Category is required",
                    })}
                    type="text"
                    placeholder="e.g. Engineering"
                    className={`p-3 border rounded outline-none focus:border-Primary transition-all ${errors.category ? "border-red-500" : "border-[#D6DDEB]"}`}
                  />
                  {errors.category && (
                    <span className="text-red-500 text-xs">
                      {errors.category.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[#515B6F]">
                  Company Image
                </label>
                <input
                  {...register("image")}
                  type="file"
                  accept="image/*"
                  className="p-3 border border-[#D6DDEB] rounded outline-none focus:border-Primary file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-Primary/10 file:text-Primary hover:file:bg-Primary/20"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[#515B6F]">
                  Job Description *
                </label>
                <textarea
                  {...register("description", {
                    required: "Description is required",
                  })}
                  rows="4"
                  placeholder="Tell us about the role..."
                  className={`p-3 border rounded outline-none focus:border-Primary transition-all ${errors.description ? "border-red-500" : "border-[#D6DDEB]"}`}
                ></textarea>
                {errors.description && (
                  <span className="text-red-500 text-xs">
                    {errors.description.message}
                  </span>
                )}
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddJob(false);
                    reset();
                  }}
                  disabled={isCreating}
                  className="px-6 py-3 border border-[#D6DDEB] rounded-lg font-bold text-[#515B6F] hover:bg-[#F8F9FB] transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isCreating}
                  className="px-8 py-3 bg-Primary text-white rounded-lg font-bold shadow-lg shadow-[#4640de]/20 hover:bg-[#3b36c4] transition-all min-w-[140px] flex items-center justify-center"
                >
                  {isCreating ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    "Post Job"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
