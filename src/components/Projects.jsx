import React from "react";
import SectionHeader from "./SectionHeader";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "Airbnb Application (Rental Booking Platform)",
      tech: "React.js, Node.js, Express.js, MongoDB, (Recommendation API)",
      points: [
        "Designed a full-stack rental booking platform with a responsive user interface.",
        "Implemented secure authentication and authorization (login, registration, and role-based access).",
        "Enhanced RESTful APIs to manage users, property listings, and searching.",
        "Integrated MongoDB for structured and secure data storage.",
        "implemeted host for manage ad handle applincation and  homes listings and booking managment",
        "Improved usability through clean UI design and validation checks.",
      ],
    },
    {
      title: "Portfolio Website",
      tech: " HTML,Javascript ,React.js, Node.js, Express.js, talwind CSS , (Recommendation API)",
      points: [
        "Designed and developed my personal portfolio website to showcase my projects, skills, and experience with a responsive and modern UI.",
        "Integrated sections for projects, education, and technical skills in an organized manner.",
        "Focused on modern design, performance, and usability to create a professional online presence.",
      ],
    },
    {
      title: "Employee Attendance and Productivity Analytics ",
      tech: " Python ,Streamlit , Pandas, Matplotlib,Scikit-learn ,ML , CSV",
      points: [
        "Analyze employee attendance records and Measure productivity based on performance data",
        "Identify employees with low attendance and performance and Visualize trends using graphs and dashboards",
        " Predict productivity using machine learning regressionn model on the fixed dataset using CSV",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="relative z-10 max-w-7xl mx-auto px-8 py-20 scroll-mt-28"
    >
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>
      <SectionHeader title="PROJECTS" darkMode={darkMode} />
      <div className="grid gap-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group p-8 rounded-3xl border transition-all duration-500 ${darkMode ? "bg-white/[0.02] border-white/10 hover:border-[#11d3bb]/50" : "bg-slate-900/[0.02] border-slate-900/10 hover:border-[#11d3bb]/50"}`}
          >
            <div className="space-y-6">
              <h4 className="text-3xl font-bold text-[#f02e65] group-hover:text-[#11d3bb] transition-colors">
                {project.title}
              </h4>
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#11d3bb]/10 border border-[#11d3bb]/20 text-[#11d3bb] text-sm font-mono">
                {project.tech}
              </div>
              <ul className="grid md:grid-cols-2 gap-6">
                {project.points.map((point, pIndex) => (
                  <li
                    key={pIndex}
                    className={`flex items-start space-x-3 text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    <span className="text-[#f02e65] mt-1">▹</span>
                    <p>{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
