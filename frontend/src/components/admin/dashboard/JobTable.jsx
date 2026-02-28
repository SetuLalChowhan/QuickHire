import React from "react";
import { Briefcase, Building2, MapPin, Trash2 } from "lucide-react";

const JobTable = ({ jobs, isDeleting, handleDelete }) => {
  return (
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
            {jobs?.length === 0 && (
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
  );
};

export default JobTable;
