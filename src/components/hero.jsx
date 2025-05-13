import React from "react";
import { ArrowRight, Mail, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-[#070F10] text-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-900 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-800 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-black border border-emerald-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
              <span className="text-emerald-400 text-sm font-medium">
                Software Engineer
              </span>
            </div>

            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Hello, I'm{" "}
                <span className="text-emerald-400">Markian Mumba</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
                I build robust, scalable, and user-centric applications with
                clean architecture and exceptional user experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-3 rounded-md font-medium flex items-center gap-2 transition duration-300"
              >
                View My Projects <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="border border-gray-700 hover:border-emerald-500 hover:bg-black text-white px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-black text-xs font-medium shadow-md">
                  React
                </div>
                <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-black text-xs font-medium shadow-md">
                  Next
                </div>
                <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-black text-xs font-medium shadow-md">
                  Java
                </div>
                <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-black text-xs font-medium shadow-md">
                  TS
                </div>
              </div>
              <p className="text-sm text-gray-400 font-medium">
                Tech stack I work with
              </p>
            </div>
          </div>

          {/* Image/Visual Element */}
          <div className="relative h-[450px] flex items-center justify-center">
            <div className="absolute w-full h-full max-w-md">
              <div className="w-full h-full bg-gradient-to-br from-emerald-900 to-emerald-700 rounded-md shadow-xl transform rotate-3"></div>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-emerald-800 to-emerald-600 rounded-md shadow-xl transform -rotate-3 transition-all duration-300 hover:rotate-0"></div>

              {/* Code window mockup overlay */}
              <div className="absolute inset-0 m-8 bg-gray-900 rounded-md shadow-inner overflow-hidden border border-gray-800">
                <div className="h-6 bg-black flex items-center px-4 border-b border-gray-800">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="p-4 text-sm text-emerald-400 font-mono">
                  <p>
                    <span className="text-gray-400">const</span>{" "}
                    <span className="text-emerald-300">developer</span> = {`{`}
                  </p>
                  <p className="ml-4">
                    <span className="text-emerald-500">name</span>:{" "}
                    <span className="text-emerald-300">'Markian Mumba'</span>,
                  </p>
                  <p className="ml-4">
                    <span className="text-emerald-500">skills</span>: [
                    <span className="text-emerald-300">'React'</span>,{" "}
                    <span className="text-emerald-300">'Next.js'</span>,{" "}
                    <span className="text-emerald-300">'Java'</span>,{" "}
                    <span className="text-emerald-300">'TypeScript'</span>],
                  </p>
                  <p className="ml-4">
                    <span className="text-emerald-500">passion</span>:{" "}
                    <span className="text-emerald-300">
                      'Building exceptional applications'
                    </span>
                  </p>
                  <p>{`}`};</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-6">
        <a
          href="https://github.com/markmumba"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-black border border-gray-800 rounded-full hover:border-emerald-500 transition-all transform hover:-translate-y-1"
          aria-label="GitHub"
        >
          <svg
            className="w-5 h-5 text-emerald-400"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/markian-mumba-67231517a/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-black border border-gray-800 rounded-full hover:border-emerald-500 transition-all transform hover:-translate-y-1"
          aria-label="LinkedIn"
        >
          <svg
            className="w-5 h-5 text-emerald-400"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a
          href="mailto:mumbamarkian@gmail.com"
          className="p-3 bg-black border border-gray-800 rounded-full hover:border-emerald-500 transition-all transform hover:-translate-y-1"
          aria-label="Email"
        >
          <Mail size={20} className="text-emerald-400" />
        </a>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center cursor-pointer hover:text-emerald-400 transition-colors animate-bounce">
        <span className="text-sm font-medium mb-2 text-gray-400">
          Scroll Down
        </span>
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default HeroSection;
