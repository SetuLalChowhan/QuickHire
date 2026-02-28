import React from "react";

const DashboardSkeleton = () => {
  return (
    <div className="flex flex-col gap-8 p-6 lg:p-10 font-epilogue animate-pulse">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between">
        <div className="space-y-3">
          <div className="h-10 bg-gray-200 rounded w-48"></div>
          <div className="h-4 bg-gray-100 rounded w-72"></div>
        </div>
        <div className="h-12 bg-gray-200 rounded-lg w-40"></div>
      </div>

      {/* Stats Cards Skeleton */}
      <div className="grid md:grid-cols-2 gap-8">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-4"
          >
            <div className="h-4 bg-gray-100 rounded w-24"></div>
            <div className="h-10 bg-gray-200 rounded w-16"></div>
          </div>
        ))}
      </div>

      {/* Table Skeleton */}
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
          <div className="h-6 bg-gray-200 rounded w-32"></div>
          <div className="h-8 bg-gray-100 rounded w-24"></div>
        </div>
        <div className="p-6 space-y-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex items-center gap-6 pb-6 border-b border-gray-50 last:border-0 last:pb-0"
            >
              <div className="w-12 h-12 bg-gray-200 rounded-lg shrink-0"></div>
              <div className="flex-1 space-y-3">
                <div className="h-5 bg-gray-200 rounded w-1/3"></div>
                <div className="h-4 bg-gray-100 rounded w-1/4"></div>
              </div>
              <div className="h-8 bg-gray-100 rounded w-20"></div>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-gray-100 rounded"></div>
                <div className="w-8 h-8 bg-gray-100 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;
