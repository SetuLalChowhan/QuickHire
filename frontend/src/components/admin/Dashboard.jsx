import React, { useState } from "react";
import { Plus, Trash2, MapPin, Building2, Briefcase } from "lucide-react";

const Dashboard = () => {
  const [showAddJob, setShowAddJob] = useState(false);
  const [dummyJobs, setDummyJobs] = useState([
    {
      id: 1,
      title: "Social Media Assistant",
      company: "Nomad",
      location: "Paris, France",
      category: "Marketing",
    },
    {
      id: 2,
      title: "Brand Designer",
      company: "Dropbox",
      location: "San Fransisco, USA",
      category: "Design",
    },
    {
      id: 3,
      title: "Interactive Developer",
      company: "Terraform",
      location: "Hamburg, Germany",
      category: "Engineering",
    },
  ]);

  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    location: "",
    category: "",
    description: "",
  });

  const handleAddJob = (e) => {
    e.preventDefault();
    const job = { ...newJob, id: Date.now() };
    setDummyJobs([job, ...dummyJobs]);
    setShowAddJob(false);
    setNewJob({
      title: "",
      company: "",
      location: "",
      category: "",
      description: "",
    });
  };

  const handleDelete = (id) => {
    setDummyJobs(dummyJobs.filter((job) => job.id !== id));
  };

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
          className="bg-Primary text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-[#3b36c4] shadow-lg shadow-[#4640de]/20 transition-all"
        >
          <Plus size={20} /> Add New Job
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            label: "Total Jobs",
            value: dummyJobs.length,
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
      <div className="bg-white rounded-xl border border-[#D6DDEB] shadow-sm overflow-hidden">
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
              {dummyJobs.map((job) => (
                <tr
                  key={job.id}
                  className="border-b border-[#D6DDEB] hover:bg-[#F8F9FB] transition-all"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-Primary/5 text-Primary rounded">
                        <Briefcase size={20} />
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
                      onClick={() => handleDelete(job.id)}
                      className="p-2 text-[#FF6550] hover:bg-[#FF6550]/10 rounded transition-all"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Job Modal - Simplified */}
      {showAddJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-[100]">
          <div className="bg-white w-full max-w-[600px] rounded-xl shadow-2xl p-8 animate-in fade-in zoom-in duration-300">
            <h2 className="text-2xl font-bold text-[#25324B] mb-6">
              Create New Job listing
            </h2>
            <form onSubmit={handleAddJob} className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-[#515B6F]">
                    Job Title
                  </label>
                  <input
                    type="text"
                    required
                    className="p-3 border border-[#D6DDEB] rounded outline-none focus:border-Primary"
                    value={newJob.title}
                    onChange={(e) =>
                      setNewJob({ ...newJob, title: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-[#515B6F]">
                    Company
                  </label>
                  <input
                    type="text"
                    required
                    className="p-3 border border-[#D6DDEB] rounded outline-none focus:border-Primary"
                    value={newJob.company}
                    onChange={(e) =>
                      setNewJob({ ...newJob, company: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-[#515B6F]">
                    Location
                  </label>
                  <input
                    type="text"
                    required
                    className="p-3 border border-[#D6DDEB] rounded outline-none focus:border-Primary"
                    value={newJob.location}
                    onChange={(e) =>
                      setNewJob({ ...newJob, location: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-[#515B6F]">
                    Category
                  </label>
                  <select
                    className="p-3 border border-[#D6DDEB] rounded outline-none focus:border-Primary"
                    value={newJob.category}
                    onChange={(e) =>
                      setNewJob({ ...newJob, category: e.target.value })
                    }
                  >
                    <option value="">Select Category</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Design">Design</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Sales">Sales</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[#515B6F]">
                  Job Description
                </label>
                <textarea
                  required
                  rows="4"
                  className="p-3 border border-[#D6DDEB] rounded outline-none focus:border-Primary"
                  value={newJob.description}
                  onChange={(e) =>
                    setNewJob({ ...newJob, description: e.target.value })
                  }
                ></textarea>
              </div>
              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setShowAddJob(false)}
                  className="px-6 py-3 border border-[#D6DDEB] rounded-lg font-bold text-[#515B6F]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-Primary text-white rounded-lg font-bold shadow-lg shadow-[#4640de]/20"
                >
                  Post Job
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
