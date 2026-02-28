// Images for Featured Jobs
import fj1 from "@/assets/images/featureJobs/fj1.png";
import fj2 from "@/assets/images/featureJobs/fj2.png";
import fj3 from "@/assets/images/featureJobs/fj3.png";
import fj4 from "@/assets/images/featureJobs/fj4.png";
import fj5 from "@/assets/images/featureJobs/fj5.png";
import fj6 from "@/assets/images/featureJobs/fj6.png";
import fj7 from "@/assets/images/featureJobs/fj7.png";
import fj8 from "@/assets/images/featureJobs/fj8.png";

// Images for Feature Jobs
import Lj1 from "@/assets/images/latestJob/lj1.png";
import Lj2 from "@/assets/images/latestJob/lj2.png";
import Lj3 from "@/assets/images/latestJob/lj3.png";
import Lj4 from "@/assets/images/latestJob/lj4.png";
import Lj5 from "@/assets/images/latestJob/lj5.png";
import Lj6 from "@/assets/images/latestJob/lj6.png";
import Lj7 from "@/assets/images/latestJob/lj7.png";
import Lj8 from "@/assets/images/latestJob/lj8.png";

// Icons for Categories (if needed, but Categories uses Lucide icons directly)
import {
  Palette,
  TrendingUp,
  Megaphone,
  Wallet,
  Monitor,
  Code,
  Briefcase,
  Users,
} from "lucide-react";

export const categoriesData = [
  { icon: Palette, title: "Design", jobs: 235 },
  { icon: TrendingUp, title: "Sales", jobs: 756 },
  { icon: Megaphone, title: "Marketing", jobs: 140 },
  { icon: Wallet, title: "Finance", jobs: 325 },
  { icon: Monitor, title: "Technology", jobs: 436 },
  { icon: Code, title: "Engineering", jobs: 542 },
  { icon: Briefcase, title: "Business", jobs: 211 },
  { icon: Users, title: "Human Resource", jobs: 346 },
];

export const featuredJobsData = [
  {
    logo: fj1,
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    type: "Full Time",
    description: "Revolut is looking for Email Marketing to help team ma ...",
    tags: ["Marketing", "Design"],
  },
  {
    logo: fj2,
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Fransisco, US",
    type: "Full Time",
    description: "Dropbox is looking for Brand Designer to help the team t ...",
    tags: ["Design", "Business"],
  },
  {
    logo: fj3,
    title: "Email Marketing",
    company: "Pitch",
    location: "Berlin, Germany",
    type: "Full Time",
    description:
      "Pitch is looking for Customer Manager to join marketing t ...",
    tags: ["Marketing"],
  },
  {
    logo: fj4,
    title: "Visual Designer",
    company: "Blinklist",
    location: "Granada, Spain",
    type: "Full Time",
    description:
      "Blinkist is looking for Visual Designer to help team desi ...",
    tags: ["Design"],
  },
  {
    logo: fj5,
    title: "Product Designer",
    company: "ClassPass",
    location: "Manchester, UK",
    type: "Full Time",
    description: "ClassPass is looking for Product Designer to help us...",
    tags: ["Marketing", "Design"],
  },
  {
    logo: fj6,
    title: "Lead Designer",
    company: "Canva",
    location: "Ontario, Canada",
    type: "Full Time",
    description: "Canva is looking for Lead Engineer to help develop n ...",
    tags: ["Design", "Business"],
  },
  {
    logo: fj7,
    title: "Brand Strategist",
    company: "GoDaddy",
    location: "Marseille, France",
    type: "Full Time",
    description: "GoDaddy is looking for Brand Strategist to join the team...",
    tags: ["Marketing"],
  },
  {
    logo: fj8,
    title: "Data Analyst",
    company: "Twitter",
    location: "San Diego, US",
    type: "Full Time",
    description: "Twitter is looking for Data Analyst to help team desi ...",
    tags: ["Technology"],
  },
];

export const latestJobsData = [
  {
    logo: Lj1,
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    type: "Full-Time",
    tags: ["Full-Time", "Marketing", "Design"],
  },
  {
    logo: Lj3,
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Fransisco, USA",
    type: "Full-Time",
    tags: ["Full-Time", "Design"],
  },
  {
    logo: Lj5,
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    type: "Full-Time",
    tags: ["Full-Time", "Developer"],
  },
  {
    logo: Lj7,
    title: "HR Manager",
    company: "Packer",
    location: "Lucern, Switzerland",
    type: "Full-Time",
    tags: ["Full-Time", "Marketing", "Management"],
  },
  {
    logo: Lj2,
    title: "Social Media Assistant",
    company: "Netlify",
    location: "Paris, France",
    type: "Full-Time",
    tags: ["Full-Time", "Marketing"],
  },
  {
    logo: Lj4,
    title: "Brand Designer",
    company: "Maze",
    location: "San Fransisco, USA",
    type: "Full-Time",
    tags: ["Full-Time", "Marketing", "Design"],
  },
  {
    logo: Lj6,
    title: "Interactive Developer",
    company: "Udacity",
    location: "Hamburg, Germany",
    type: "Full-Time",
    tags: ["Full-Time", "Marketing", "Design"],
  },
  {
    logo: Lj8,
    title: "HR Manager",
    company: "Webflow",
    location: "Lucern, Switzerland",
    type: "Full-Time",
    tags: ["Full-Time", "Marketing", "Design"],
  },
];
