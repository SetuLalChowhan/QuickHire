import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import useClient from "@/hooks/useClient";
import useMutationClient from "@/hooks/useMutationClient";
import { ChevronLeft } from "lucide-react";
import JobDetailHeader from "@/components/sites/jobs/detail/JobDetailHeader";
import JobDetailContent from "@/components/sites/jobs/detail/JobDetailContent";
import JobApplyForm from "@/components/sites/jobs/detail/JobApplyForm";
import JobDetailSkeleton from "@/components/sites/jobs/detail/JobDetailSkeleton";

const JobDetail = () => {
  const { id } = useParams();
  const [isApplied, setIsApplied] = useState(false);

  const { data: jobResponse, isLoading } = useClient({
    queryKey: ["jobDetail", id],
    url: `/jobs/${id}`,
  });

  const { mutate: applyJob, isPending: isApplying } = useMutationClient({
    url: "/applications",
    method: "post",
    successMessage: "Application submitted successfully!",
    onSuccess: () => {
      setIsApplied(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  });

  const job = jobResponse?.data;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      jobId: id,
      name: formData.get("name"),
      email: formData.get("email"),
      resumeLink: formData.get("resumeLink"),
      coverNote: formData.get("coverNote"),
    };
    applyJob({ data });
  };

  if (isLoading) return <JobDetailSkeleton />;

  if (!job)
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-[32px] font-bold text-[#25324B]">
            Job not found!
          </h1>
          <Link
            to="/jobs"
            className="text-Primary font-bold hover:underline mt-4 inline-block"
          >
            Back to listings
          </Link>
        </div>
      </div>
    );

  return (
    <main className="min-h-screen font-epilogue pb-24 pt-[100px]">
      <div className="section-padding-x max-w-[1240px] mx-auto">
        <Link
          to="/jobs"
          className="flex items-center gap-2 text-[#515B6F] font-bold hover:text-Primary transition-all mb-10 group w-fit"
        >
          <ChevronLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to all jobs
        </Link>

        <div className="grid grid-cols-1  gap-12">
          <div className="lg:col-span-2 space-y-12">
            <JobDetailHeader job={job} />
            <JobDetailContent job={job} />
          </div>

          <JobApplyForm
            isApplied={isApplied}
            isApplying={isApplying}
            job={job}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </main>
  );
};

export default JobDetail;
