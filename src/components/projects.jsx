import React, { useState } from "react";
import {
  ExternalLink,
  Code,
  Database,
  Server,
  Layout,
  ArrowRight,
} from "lucide-react";

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 0,
      title: "BolloApp",
      subtitle: "Smart Waste Management Platform",
      role: "Full Stack Developer",
      description:
        "A smart waste management platform optimizing collection scheduling and enabling real-time tracking for service providers. Features payment gateway integration and an automated notification system.",
      image: "/src/assets/bollaapp.png",
      demoLink: "https://bolloapp.netlify.app/",
      codeLink: "https://github.com/markmumba",
      technologies: [
        "Next.js",
        "Spring Boot",
        "React Query",
        "MTN/MoMo Integration",
      ],
      highlights: [
        "Engineered a smart waste management platform using Next.js and Spring Boot",
        "Implemented MTN and MoMo payment gateway integrations using React Query",
        "Developed an automated notification system with Spring Boot",
        "Built a responsive analytics dashboard with React.js",
      ],
      category: "Full Stack",
    },
    {
      id: 1,
      title: "RentItUp",
      subtitle: "Equipment Rental Platform",
      role: "Full Stack Developer",
      description:
        "A comprehensive equipment rental platform serving active users with 500+ equipment listings. Features secure authentication, payment processing, and intuitive interfaces.",
      image: "/src/assets/rentitup.png",
      demoLink: "https://rentitup-frontend.vercel.app/",
      codeLink: "https://github.com/markmumba",
      technologies: ["Next.js", "Spring Boot", "JWT", "OAuth", "TypeScript"],
      highlights: [
        "Architected a comprehensive equipment rental platform with Next.js frontend and Spring Boot backend",
        "Implemented secure payment processing and multi-factor authentication system using JWT and OAuth",
        "Designed RESTful APIs with Spring Boot",
        "Created responsive, intuitive interfaces with Next.js and TypeScript",
      ],
      category: "Full Stack",
    },
    {
      id: 2,
      title: "Oskaloosa Computer Solutions",
      subtitle: "Dynamic Website with CMS",
      role: "Software Developer",
      description:
        "A dynamic website with content management capabilities, allowing non-technical staff to update product catalogs and content without developer involvement.",
      image: "/src/assets/oskaloosa.png",
      demoLink: "https://www.skaloosa.com/",
      codeLink: "https://github.com/markmumba",
      technologies: ["Next.js", "Contentful CMS", "NodeJS"],
      highlights: [
        "Designed a dynamic website using Next.js and Contentful CMS",
        "Integrated Contentful headless CMS with Next.js",
        "Implemented robust email functionality using NodeJS",
      ],
      category: "Web Development",
    },
    {
      id: 3,
      title: "Project Tracker",
      subtitle: "Student-Lecturer Project Supervision",
      role: "Full Stack Developer",
      description:
        "An end-to-end MVP platform facilitating efficient student-lecturer project supervision with document management and role-based access control.",
      image: "/src/assets/projecttracker.png",
      demoLink: "https://project-tracker-frontend-snowy.vercel.app/",
      codeLink: "https://github.com/markmumba",
      technologies: ["React Vite", "Golang", "JWT Authentication"],
      highlights: [
        "Designed and developed an end-to-end MVP platform using React Vite and Golang",
        "Engineered document management system with role-based access control",
        "Developed an intuitive dashboard interface with React.js",
        "Implemented automated email notification system using Golang",
      ],
      category: "Full Stack",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-[#070F10] text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-900 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-800 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-black border border-emerald-500 mb-4">
            <span className="text-emerald-400 text-sm font-medium">
              My Work
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work, highlighting my skills in full-stack
            development, clean architecture, and user-centric design.
          </p>
        </div>

        {/* Project Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`px-4 py-2 rounded-md transition-all ${
                activeProject === index
                  ? "bg-emerald-500 text-black"
                  : "bg-transparent border border-gray-800 text-gray-400 hover:border-emerald-500 hover:text-emerald-400"
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Active Project Display */}
        <div className="grid md:grid-cols-5 gap-8">
          {/* Project Image - Takes 2 columns on md+ screens */}
          <div className="md:col-span-2 rounded-md overflow-hidden relative group">
            <div className="aspect-w-16 aspect-h-9 bg-gray-900 border border-gray-800 rounded-md flex items-center justify-center">
              <img
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.classList.add(
                    "flex",
                    "items-center",
                    "justify-center"
                  );
                  const fallbackIcon = document.createElement("div");
                  fallbackIcon.className =
                    "flex flex-col items-center justify-center text-gray-400";
                  fallbackIcon.innerHTML = `
                    <svg class="w-16 h-16 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span class="text-sm">Project Preview</span>
                  `;
                  e.target.parentElement.appendChild(fallbackIcon);
                }}
              />
            </div>

            {/* Overlay with links */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
              <a
                href={projects[activeProject].demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-emerald-500 text-black rounded-full hover:bg-emerald-600 transition-colors"
                aria-label="View demo"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href={projects[activeProject].codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-black border border-emerald-500 text-emerald-400 rounded-full hover:bg-emerald-500 hover:text-black transition-colors"
                aria-label="View code"
              >
                <Code size={20} />
              </a>
            </div>
          </div>

          {/* Project Details - Takes 3 columns on md+ screens */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold">
                    {projects[activeProject].title}
                  </h3>
                  <p className="text-emerald-400">
                    {projects[activeProject].role}
                  </p>
                </div>
                <span className="px-3 py-1 text-xs bg-black border border-gray-800 rounded-full text-gray-400">
                  {projects[activeProject].category}
                </span>
              </div>

              <p className="text-gray-400 mb-6">
                {projects[activeProject].description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-medium mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {projects[activeProject].highlights.map(
                    (highlight, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-400"
                      >
                        <span className="text-emerald-400 mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-black border border-gray-800 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-between items-center">
              <a
                href={projects[activeProject].demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                View Live Demo
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setActiveProject((prev) =>
                      prev === 0 ? projects.length - 1 : prev - 1
                    )
                  }
                  className="p-2 bg-black border border-gray-800 rounded-md hover:border-emerald-500 transition-colors"
                  aria-label="Previous project"
                >
                  <ArrowRight size={16} className="rotate-180" />
                </button>
                <button
                  onClick={() =>
                    setActiveProject((prev) =>
                      prev === projects.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="p-2 bg-black border border-gray-800 rounded-md hover:border-emerald-500 transition-colors"
                  aria-label="Next project"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/markmumba"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-emerald-500 text-emerald-400 rounded-md hover:bg-emerald-500 hover:text-black transition-all duration-300"
          >
            View All Projects on GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
