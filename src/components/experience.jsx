import React from "react";
import {
  Calendar,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Download,
} from "lucide-react";
import resumePDF from "../assets/resume.pdf";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-16 md:py-24 bg-[#070F10] text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-emerald-900 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-emerald-800 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-black border border-emerald-500 mb-4">
            <span className="text-emerald-400 text-sm font-medium">
              My Journey
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            Experience & Education
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            A timeline of my professional journey and educational background
            that has shaped my expertise in software engineering.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line - Hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-800 hidden md:block"></div>

          <div className="space-y-8 md:space-y-12">
            {/* Kyosk Experience */}
            <TimelineItem
              side="right"
              date="Present"
              title="Backend Engineer"
              company="Kyosk"
              icon={<Briefcase className="text-emerald-400" size={20} />}
            >
              <ul className="space-y-3 text-gray-400 text-sm md:text-base">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>
                    Developed scalable microservices architecture using Spring
                    Boot for payment processing systems, improving transaction
                    reliability and system performance
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>
                    Implemented comprehensive testing protocols with JUnit and
                    Mockito, maintaining a minimum of 80% unit test coverage
                    across all services
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>
                    Utilised Docker for containerisation, ensuring consistent
                    deployment across development and production environments
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>
                    Authored detailed Technical Requirements Documentation (TRD)
                    for payment integrations, reducing implementation errors by
                    standardising workflow processes
                  </span>
                </li>
              </ul>
            </TimelineItem>

            {/* University Education */}
            <TimelineItem
              side="left"
              date="2020 - 2024"
              title="Bachelor of Computer Science"
              company="Riara University"
              icon={<GraduationCap className="text-emerald-400" size={20} />}
            >
              <p className="text-gray-400 text-sm md:text-base">
                Completed a comprehensive Computer Science program with a focus
                on software engineering principles, algorithms, data structures,
                and system design.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 md:px-3 md:py-1 bg-black border border-gray-800 rounded-full text-xs text-gray-300">
                  Data Structures
                </span>
                <span className="px-2 py-1 md:px-3 md:py-1 bg-black border border-gray-800 rounded-full text-xs text-gray-300">
                  Calculus
                </span>
                <span className="px-2 py-1 md:px-3 md:py-1 bg-black border border-gray-800 rounded-full text-xs text-gray-300">
                  Digital Logic
                </span>
                <span className="px-2 py-1 md:px-3 md:py-1 bg-black border border-gray-800 rounded-full text-xs text-gray-300">
                  Computer Organization
                </span>
                <span className="px-2 py-1 md:px-3 md:py-1 bg-black border border-gray-800 rounded-full text-xs text-gray-300">
                  Compiler Construction
                </span>
                <span className="px-2 py-1 md:px-3 md:py-1 bg-black border border-gray-800 rounded-full text-xs text-gray-300">
                  Algorithms
                </span>
                <span className="px-2 py-1 md:px-3 md:py-1 bg-black border border-gray-800 rounded-full text-xs text-gray-300">
                  Microcontrollers
                </span>
                <span className="px-2 py-1 md:px-3 md:py-1 bg-black border border-gray-800 rounded-full text-xs text-gray-300">
                  Operating Systems
                </span>
                <span className="px-2 py-1 md:px-3 md:py-1 bg-black border border-gray-800 rounded-full text-xs text-gray-300">
                  Computer Networks
                </span>
                <span className="px-2 py-1 md:px-3 md:py-1 bg-black border border-gray-800 rounded-full text-xs text-gray-300">
                  Computer Architecture
                </span>
              </div>
            </TimelineItem>

            {/* Web Development Certificate */}
            <TimelineItem
              side="right"
              date="March - October 2019"
              title="Web Development Certificate"
              company="Moringa School"
              icon={<GraduationCap className="text-emerald-400" size={20} />}
            >
              <p className="text-gray-400 text-sm md:text-base">
                Intensive full-stack web development program focusing on modern
                web technologies and best practices in software development.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">

                <span className="px-2 py-1 md:px-3 md:py-1 bg-black border border-gray-800 rounded-full text-xs text-gray-300">
                  JavaScript
                </span>
                <span className="px-2 py-1 md:px-3 md:py-1 bg-black border border-gray-800 rounded-full text-xs text-gray-300">
                  Angular
                </span>
                <span className="px-2 py-1 md:px-3 md:py-1 bg-black border border-gray-800 rounded-full text-xs text-gray-300">
                  Python
                </span>
                <span className="px-2 py-1 md:px-3 md:py-1 bg-black border border-gray-800 rounded-full text-xs text-gray-300">
                  Django
                </span>
              </div>
            </TimelineItem>
          </div>
        </div>

        {/* Resume Download Section */}
        <div className="text-center mt-12 md:mt-16">
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-emerald-500 hover:bg-emerald-600 text-black rounded-md font-medium transition-colors text-sm md:text-base"
          >
            <Download size={18} className="md:w-5 md:h-5" />
            View Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

// Timeline Item Component
const TimelineItem = ({ side, date, title, company, icon, children }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-stretch ${
        side === "left" ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Content Side */}
      <div className="w-full md:w-1/2 px-0 md:px-6">
        <div
          className={`bg-black border border-gray-800 p-4 md:p-6 rounded-md shadow-xl h-full ${
            side === "left" ? "md:mr-auto" : "md:ml-auto"
          } max-w-lg hover:border-gray-700 transition-all`}
        >
          {/* Date - Visible on mobile only */}
          <div className="flex items-center mb-4 md:hidden">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
            <span className="text-gray-400 text-sm font-medium">{date}</span>
          </div>

          <div className="flex items-center mb-4">
            <div className="p-2 bg-black border border-gray-800 rounded-md mr-3">
              {icon}
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold">{title}</h3>
              <p className="text-emerald-400 text-sm md:text-base">{company}</p>
            </div>
          </div>

          {children}
        </div>
      </div>

      {/* Center Point - Hidden on mobile */}
      <div className="hidden md:flex flex-col items-center">
        <div className="w-4 h-4 bg-emerald-400 rounded-full mt-6"></div>
        <div className="text-gray-400 font-medium mt-2 whitespace-nowrap">
          {date}
        </div>
      </div>

      {/* Empty Side - Hidden on mobile */}
      <div className="hidden md:block w-1/2"></div>
    </div>
  );
};

export default ExperienceSection;
