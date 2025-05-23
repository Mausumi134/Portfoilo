// src/components/sections/About.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Award,
  BookOpen,
  Github as GitHub,
} from "lucide-react";
import GlassMorphicCard from "../ui/GlassMorphicCard";
import SectionHeading from "../ui/SectionHeading";
import { personalInfo } from "../../data";
import profileImage from "../../assets/mausumi dp.jpg";

const About: React.FC = () => {
  const aboutFeatures = [
    {
      icon: <Code className="h-6 w-6 text-primary-500" />,
      title: "Full-Stack Developer",
      description: "MERN stack | Responsive UI/UX | API Integration",
    },
    {
      icon: <Award className="h-6 w-6 text-yellow-500" />,
      title: "Problem Solver",
      description: "DSA enthusiast | Competitive coder on LeetCode & GFG",
    },
    {
      icon: <GitHub className="h-6 w-6 text-accent-500" />,
      title: "Open Source Contributor",
      description: "Hacktoberfest | GirlScript Summer Of Code | Collaboration driven",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-green-500" />,
      title: "Lifelong Learner",
      description: "Exploring Next.js, AWS & TypeScript",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-dark-100 dark:to-dark-300">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="About Me" subtitle="Let’s Connect" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Textual Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm a Computer Science student at LPU, passionate about crafting efficient full-stack solutions. With hands-on experience in MERN development and a strong DSA foundation, I enjoy building scalable apps and diving into hackathons. I'm always learning—be it new frameworks or solving challenges on LeetCode.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="bg-primary-100 dark:bg-primary-900/30 rounded-full p-2 mr-3">
                    <Code className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Lovely Professional University
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {personalInfo.collegeLocation}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-secondary-100 dark:bg-secondary-900/30 rounded-full p-2 mr-3">
                    <BookOpen className="h-5 w-5 text-secondary-600 dark:text-secondary-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Education
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      B.Tech in CSE
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mini Cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              {aboutFeatures.map((feature, index) => (
                <GlassMorphicCard
                  key={index}
                  className="p-5 rounded-2xl hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
                  delay={index * 0.1}
                >
                  <div className="flex flex-col gap-2">
                    <div className="w-12 h-12 bg-white/50 dark:bg-black/50 rounded-full flex items-center justify-center shadow">
                      {feature.icon}
                    </div>
                    <h4 className="font-bold text-gray-800 dark:text-white text-lg">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </GlassMorphicCard>
              ))}
            </div>
          </motion.div>

          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-400/20 to-secondary-400/20 rounded-full animate-pulse-slow"></div>
              <div className="absolute inset-2 bg-gradient-to-bl from-pink-400/20 to-purple-500/10 rounded-full animate-pulse-slow delay-1000"></div>
              <motion.div
                animate={{ rotateZ: [0, 360] }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary-500/30"
              />
              <div className="absolute inset-6 overflow-hidden rounded-full border-8 border-white dark:border-dark-200 shadow-xl">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
             
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
