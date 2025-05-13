import React from 'react';

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "TypeScript", level: 80 }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Django", level: 75 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      category: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Git", level: 85 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Skills & Expertise</h2>
          <div className="mt-3 w-16 h-1 mx-auto bg-blue-600 rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900">Additional Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Agile Methodologies",
              "Problem Solving",
              "Team Collaboration",
              "Code Review",
              "Technical Documentation",
              "Performance Optimization",
              "Security Best Practices",
              "UI/UX Design"
            ].map((skill, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow hover:shadow-md transition-shadow"
              >
                <span className="text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;