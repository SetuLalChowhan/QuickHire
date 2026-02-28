import React from "react";

const JobDetailSkeleton = () => {
  return (
    <main className="min-h-screen font-epilogue pb-24 pt-[100px] animate-pulse">
      <div className="section-padding-x max-w-[1240px] mx-auto">
        {/* Back Button Skeleton */}
        <div className="h-6 w-32 bg-gray-200 rounded mb-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Header Skeleton */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 border-b border-gray-100 pb-12">
              <div className="w-20 h-20 bg-gray-200 rounded-xl shrink-0"></div>
              <div className="flex-1 space-y-4">
                <div className="h-10 bg-gray-200 rounded w-3/4"></div>
                <div className="flex gap-6">
                  <div className="h-5 bg-gray-100 rounded w-24"></div>
                  <div className="h-5 bg-gray-100 rounded w-24"></div>
                  <div className="h-5 bg-gray-100 rounded w-24"></div>
                </div>
              </div>
            </div>

            {/* Content Skeleton */}
            <div className="space-y-6">
              <div className="h-8 bg-gray-200 rounded w-40"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-100 rounded w-full"></div>
                <div className="h-4 bg-gray-100 rounded w-full"></div>
                <div className="h-4 bg-gray-100 rounded w-5/6"></div>
              </div>
            </div>
          </div>

          {/* Form Skeleton */}
          <div className="lg:col-span-1">
            <div className="bg-white p-10 border border-gray-100 rounded-xl shadow-sm space-y-8">
              <div className="h-8 bg-gray-200 rounded w-1/2"></div>
              <div className="space-y-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-4 bg-gray-100 rounded w-24"></div>
                    <div className="h-12 bg-gray-100 rounded w-full"></div>
                  </div>
                ))}
                <div className="h-14 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default JobDetailSkeleton;
