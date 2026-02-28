import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import useClient from "@/hooks/useClient";
import useMutationClient from "@/hooks/useMutationClient";
import StatsCard from "./dashboard/StatsCard";
import JobTable from "./dashboard/JobTable";
import AddJobModal from "./dashboard/AddJobModal";
import DashboardSkeleton from "./dashboard/DashboardSkeleton";

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

  // Fetch Stats
  const { data: statsData, refetch: refetchStats } = useClient({
    queryKey: ["dashboardStats"],
    url: "/jobs/stats",
    isPrivate: true,
  });

  const dashboardStats = statsData?.data || {
    totalJobs: 0,
    totalApplications: 0,
  };

  // Create Job Mutation
  const { mutate: createJob, isPending: isCreating } = useMutationClient({
    url: "/jobs",
    method: "post",
    isPrivate: true,
    invalidateKeys: ["jobs", "dashboardStats"],
    successMessage: "Job created successfully!",
    onSuccess: () => {
      setShowAddJob(false);
      reset();
    },
  });

  // Delete Job Mutation
  const { mutate: deleteJob, isPending: isDeleting } = useMutationClient({
    url: "/jobs",
    method: "delete",
    isPrivate: true,
    invalidateKeys: ["jobs", "dashboardStats"],
    successMessage: "Job deleted successfully!",
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

  if (isLoading) return <DashboardSkeleton />;

  const stats = [
    {
      label: "Total Jobs",
      value: dashboardStats.totalJobs || 0,
      color: "text-Primary bg-Primary/10",
    },
    {
      label: "Applications",
      value: dashboardStats.totalApplications || 0,
      color: "text-[#56CDAD] bg-[#56CDAD]/10",
    },
  ];

  return (
    <div className="flex flex-col gap-8 p-6 lg:p-10 font-epilogue">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#25324B]">Overview</h1>
          <p className="text-[#7C8493] mt-2">
            Manage your job listings and track performance
          </p>
        </div>
        <button
          onClick={() => setShowAddJob(true)}
          className="bg-Primary text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-[#3b36c4] shadow-lg shadow-[#4640de]/20 transition-all text-sm md:text-base"
        >
          <Plus size={20} /> Add New Job
        </button>
      </div>

      <div className="grid  md:grid-cols-2 gap-8">
        {stats.map((stat, i) => (
          <StatsCard key={i} {...stat} />
        ))}
      </div>

      <JobTable
        jobs={jobs}
        isDeleting={isDeleting}
        handleDelete={handleDelete}
      />

      <AddJobModal
        showAddJob={showAddJob}
        setShowAddJob={setShowAddJob}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onJobSubmit={onJobSubmit}
        isCreating={isCreating}
        reset={reset}
      />
    </div>
  );
};

export default Dashboard;
