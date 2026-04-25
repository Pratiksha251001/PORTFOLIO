import React from "react";
import SectionHeader from "./SectionHeader";
import edunetCert from "../assets/edunet.pdf";
import eisystemsCert from "../assets/eisytem.pdf";
import mainflowCert from "../assets/mainflow.pdf";
import uptoskillsCert from "../assets/uptoskills.pdf";
import codetechCert from "../assets/codetech.pdf";
const Internship = ({ darkMode }) => {
  const internships = [
    {
      company: "UptoSkills",
      role: "MERN Stack Developer Intern",
      period: " 3 Month",
      certificate: uptoskillsCert,
      points: [
        "I am currently working as part of a team on an E-learning platform, where I have contributed to the design and development of the application.",
        " I have hands-on experience working across frontend, backend, and database systems, along with customer support and AI-based features.",
        "This experience has helped me strengthen my teamwork, collaboration, and problem-solving skills. I have also gained practical exposure to real-world projects, including GitHub collaboration and project handling.",
      ],
    },
    {
      company: "Edunet Foundation",
      role: "AI And Cloud (IBM Cloud) Intern ",
      period: "1 Month",
      certificate: edunetCert,
      points: [
        "Emerging Technologies (AI & Cloud) through SkillsBuild & IBM Cloud Platform, conducted by Edunet Foundation in collaboration with AICTE.",
        " Create a virtual Python Jupyter Notebook AI model using Studio.ai (IBM platform) ",
        "Develop Machine Learning models for Corp.ai and Nsap.ai This internship helped me strengthen my skills in: Artificial Intelligence , Cloud Computing, IBM Cloud Services , Real-world project understanding , AI/ML Model Development",
        "This internship provided me with practical experience in AI and cloud technologies, enhancing my understanding of these emerging fields and their applications in real-world projects.",
      ],
    },
    {
      company: "EIsystems",
      role: "Data science Specialization Intern",
      period: " 3 Month",
      certificate: eisystemsCert,
      points: [
        "Completed a 3-month internship in Data Science, working on text and image classification using machine learning models.",
        "Developed strong skills in data analysis, model building, and solving real-world problems through hands-on projects.",
        "Gained practical industry experience and a solid foundation to apply data-driven solutions in future work",
      ],
    },
    {
      company: "Mainflow Technologies",
      role: "MERN Stack Training & Internship",
      period: "3 Month",
      certificate: mainflowCert,
      points: [
        "It helps to understand  bacic knowledge of full stack MERN development , from front-end design to back-end implementation and database management.",
        "Built a foundational React app to understand component structure, state management, and lifecycle methods.",
        "Developed a dynamic website showcasing movies with features like search and filtering using React Implemented Create, Read, Update, and Delete functionalities using MongoDB and Node.js for backend operations.",
      ],
    },
    {
      company: "Codetech IT Solutions ",
      role: "Web Development Intern",
      period: "1 Month",
      certificate: codetechCert,
      points: [
        "I gained hands-on experience in key web technologies including HTML, CSS, JavaScript, and SQL.",
        "This opportunity helped me strengthen my front-end and back-end development skills while working on real-world tasks.",
      ],
    },
  ];

  return (
    <section
      id="internship"
      className="relative z-10 max-w-7xl mx-auto px-8 py-20 scroll-mt-28"
    >
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>
      <SectionHeader title="EXPERIENCE INTERNSHIPS" darkMode={darkMode} />
      <div className="grid gap-12">
        {internships.map((item, index) => (
          <div key={index} className="relative pl-8 border-l border-white/10">
            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-[#f02e65] shadow-[0_0_10px_#f02e65]"></div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h4 className="text-2xl font-bold text-white">
                  {item.company}
                </h4>
                <p className="text-[#11d3bb] font-semibold">{item.role}</p>
              </div>
              <span
                className={`text-sm font-bold mt-2 md:mt-0 ${darkMode ? "text-gray-500" : "text-gray-400"}`}
              >
                {item.period}
              </span>
            </div>
            <ul className="space-y-4">
              {item.points.map((point, pIndex) => (
                <li
                  key={pIndex}
                  className={`flex items-start space-x-3 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  <span className="text-[#f02e65] mt-1.5">•</span>
                  <p className="leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
            {item.certificate && (
              <a
                href={item.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-[#f02e65] text-white rounded-lg text-sm hover:bg-pink-600 transition"
              >
                View Certificate 🎓
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Internship;
