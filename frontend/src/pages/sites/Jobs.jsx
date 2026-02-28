import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useClient from "@/hooks/useClient";
import JobsHeader from "@/components/sites/jobs/list/JobsHeader";
import JobsSidebar from "@/components/sites/jobs/list/JobsSidebar";
import JobsResults from "@/components/sites/jobs/list/JobsResults";

const Jobs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const location = searchParams.get("location") || "";
  const category = searchParams.get("category") || "";
  const page = parseInt(searchParams.get("page")) || 1;

  const [searchInput, setSearchInput] = useState(search);
  const [locationInput, setLocationInput] = useState(location);
  const [categoryInput, setCategoryInput] = useState(category);

  const { data: jobResponse, isLoading } = useClient({
    queryKey: ["jobs", search, location, category, page],
    url: "/jobs",
    params: {
      search,
      location,
      category,
      page,
      limit: 9,
    },
  });

  const jobs = jobResponse?.data || [];
  const totalPages = jobResponse?.totalPages || 1;

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    const newParams = new URLSearchParams(searchParams);
    if (searchInput) newParams.set("search", searchInput);
    else newParams.delete("search");
    if (locationInput) newParams.set("location", locationInput);
    else newParams.delete("location");
    if (categoryInput) newParams.set("category", categoryInput);
    else newParams.delete("category");
    newParams.set("page", "1");
    setSearchParams(newParams);
  };

  const handlePageChange = (newPage) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", newPage.toString());
    setSearchParams(newParams);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearFilters = () => {
    setSearchInput("");
    setLocationInput("");
    setCategoryInput("");
    setSearchParams({ page: "1" });
  };

  return (
    <main className="min-h-screen font-epilogue pb-20 pt-[80px]">
      <JobsHeader
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        locationInput={locationInput}
        setLocationInput={setLocationInput}
        handleSearch={handleSearch}
      />

      <div className="section-padding-x max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          <JobsSidebar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            locationInput={locationInput}
            setLocationInput={setLocationInput}
            categoryInput={categoryInput}
            setCategoryInput={setCategoryInput}
            handleSearch={handleSearch}
            clearFilters={clearFilters}
          />

          <JobsResults
            isLoading={isLoading}
            jobResponse={jobResponse}
            jobs={jobs}
            totalPages={totalPages}
            page={page}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </main>
  );
};

export default Jobs;
