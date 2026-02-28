import React from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SkeletonLoader from "@/components/sites/jobs/SkeletonLoader";
import JobCard from "@/components/sites/jobs/JobCard";

const JobsResults = ({
  isLoading,
  jobResponse,
  jobs,
  totalPages,
  page,
  handlePageChange,
}) => {
  return (
    <div className="flex-1">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 pb-4 border-b border-[#D6DDEB] gap-4">
        <div>
          <h2 className="text-[28px] font-bold text-[#25324B]">
            {isLoading
              ? "Finding Jobs..."
              : `${jobResponse?.totalJobs || 0} Jobs Available`}
          </h2>
          {!isLoading && (
            <p className="text-[#7C8493] text-[15px] mt-1">
              Showing results matching your preferences
            </p>
          )}
        </div>
      </div>

      {isLoading ? (
        <SkeletonLoader count={6} />
      ) : jobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      ) : (
        <div className="bg-white py-24 px-8 border border-[#D6DDEB] text-center rounded-lg">
          <div className="w-24 h-24 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <X size={48} />
          </div>
          <h3 className="text-[#25324B] text-[24px] font-bold mb-4">
            No jobs found!
          </h3>
          <p className="text-[#515B6F] max-w-[400px] mx-auto text-[18px]">
            We couldn't find any jobs matching your search criteria. Try
            adjusting your filters or search keywords.
          </p>
        </div>
      )}

      {/* Pagination */}
      {!isLoading && totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-16 font-epilogue">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="p-4 border border-[#D6DDEB] rounded hover:border-Primary hover:text-Primary disabled:opacity-30 transition-all bg-white"
          >
            <ChevronLeft size={20} />
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`w-12 h-12 flex items-center justify-center border font-bold text-[16px] transition-all rounded ${
                page === i + 1
                  ? "bg-Primary text-white border-Primary shadow-lg shadow-Primary/20"
                  : "bg-white text-[#515B6F] border-[#D6DDEB] hover:border-Primary hover:text-Primary"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
            className="p-4 border border-[#D6DDEB] rounded hover:border-Primary hover:text-Primary disabled:opacity-30 transition-all bg-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default JobsResults;
