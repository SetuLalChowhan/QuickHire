import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  User,
  Mail,
  Link as LinkIcon,
  FileText,
} from "lucide-react";

const JobApplyForm = ({ isApplied, isApplying, job, handleSubmit }) => {
  return (
    <aside className="lg:col-span-1">
      <div className="sticky top-[100px] bg-white lg:p-8 p-4 lg:p-10 border border-[#D6DDEB] shadow-2xl shadow-Primary/5 rounded-xl">
        {isApplied ? (
          <div className="text-center py-10 space-y-6">
            <div className="w-20 h-20 bg-[#56CDAD]/10 text-[#56CDAD] rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="text-[24px] font-bold text-[#25324B]">
              Application Sent!
            </h3>
            <p className="text-[#515B6F] text-[16px] leading-[1.6]">
              Your application for <strong>{job.title}</strong> has been
              successfully submitted. We'll be in touch soon.
            </p>
            <Link
              to="/jobs"
              className="block w-full bg-Primary text-white font-bold py-4 rounded-lg hover:bg-[#3b36c4] shadow-lg shadow-Primary/20 transition-all text-center"
            >
              Apply for more jobs
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="space-y-2 border-b border-[#D6DDEB] pb-6">
              <h3 className="text-[26px] font-bold text-[#25324B]">
                Apply Now
              </h3>
              <p className="text-[#7C8493] text-[15px]">
                Join {job.company} and start your journey today.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="space-y-2.5">
                <label className="text-[15px] font-bold text-[#202430] flex items-center gap-2">
                  <User size={16} className="text-Primary" /> Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Jane Doe"
                  className="w-full p-4 bg-[#F8F9FB] border border-[#D6DDEB] rounded-lg outline-none focus:border-Primary focus:bg-white text-[#25324B] font-medium transition-all"
                />
              </div>

              <div className="space-y-2.5">
                <label className="text-[15px] font-bold text-[#202430] flex items-center gap-2">
                  <Mail size={16} className="text-Primary" /> Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="jane@example.com"
                  className="w-full p-4 bg-[#F8F9FB] border border-[#D6DDEB] rounded-lg outline-none focus:border-Primary focus:bg-white text-[#25324B] font-medium transition-all"
                />
              </div>

              <div className="space-y-2.5">
                <label className="text-[15px] font-bold text-[#202430] flex items-center gap-2">
                  <LinkIcon size={16} className="text-Primary" /> Resume Link
                  (URL)
                </label>
                <input
                  name="resumeLink"
                  type="url"
                  required
                  placeholder="https://drive.google.com/..."
                  className="w-full p-4 bg-[#F8F9FB] border border-[#D6DDEB] rounded-lg outline-none focus:border-Primary focus:bg-white text-[#25324B] font-medium transition-all"
                />
              </div>

              <div className="space-y-2.5">
                <label className="text-[15px] font-bold text-[#202430] flex items-center gap-2">
                  <FileText size={16} className="text-Primary" /> Cover Note
                </label>
                <textarea
                  name="coverNote"
                  rows="5"
                  required
                  placeholder="Tell us why you're a good fit..."
                  className="w-full p-4 bg-[#F8F9FB] border border-[#D6DDEB] rounded-lg outline-none focus:border-Primary focus:bg-white text-[#25324B] font-medium transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isApplying}
                className="w-full bg-Primary text-white font-bold py-5 rounded-lg hover:bg-[#3b36c4] shadow-lg shadow-Primary/20 transition-all text-[17px] flex items-center justify-center gap-3 disabled:opacity-70 mt-2"
              >
                {isApplying ? (
                  <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Submit Application"
                )}
              </button>
            </form>

            <p className="text-[13px] text-[#7C8493] leading-relaxed text-center italic">
              Your data is safe with us. We only share it with the hiring team.
            </p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default JobApplyForm;
