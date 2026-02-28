import React from "react";
import latestJobBanner from "@/assets/images/latestJobBanner.png";
import SectionHeader from "@/components/sites/common/SectionHeader";
import { latestJobsData } from "@/utils/data";
import LatestJobCard from "@/components/sites/common/LatestJobCard";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/framer-motion";

const LatestJob = () => {
  return (
    <section
      id="latest-jobs"
      className="section-padding lg:py-20 py-10 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${latestJobBanner})` }}
    >
      <div className="section-padding-x lg:px-20">
        <SectionHeader
          title="Latest"
          blueText="jobs open"
          linkText="Show all jobs"
          linkTo="/jobs"
        />

        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {latestJobsData.map((job, index) => (
            <motion.div key={index} variants={fadeIn("up", 0.05 * index)}>
              <LatestJobCard {...job} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LatestJob;
