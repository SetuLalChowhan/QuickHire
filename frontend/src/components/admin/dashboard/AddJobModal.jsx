import React from "react";
import { X } from "lucide-react";

const AddJobModal = ({
  showAddJob,
  setShowAddJob,
  register,
  handleSubmit,
  errors,
  onJobSubmit,
  isCreating,
  reset,
}) => {
  if (!showAddJob) return null;

  return (
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
                {...register("title", { required: "Job title is required" })}
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
              <label className="font-semibold text-[#515B6F]">Company *</label>
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
              <label className="font-semibold text-[#515B6F]">Location *</label>
              <input
                {...register("location", { required: "Location is required" })}
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
              <label className="font-semibold text-[#515B6F]">Category *</label>
              <input
                {...register("category", { required: "Category is required" })}
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
            <label className="font-semibold text-[#515B6F]">Image</label>
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
  );
};

export default AddJobModal;
