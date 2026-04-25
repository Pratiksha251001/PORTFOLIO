import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaUser,
  FaFileDownload,
} from "react-icons/fa";
import resume from "../assets/mern_resumeup.pdf";
import Preskilet from "../assets/preskilet.png";

const Hero = ({ darkMode }) => {
  const coder = {
    name: "PRATIKSHA PARISE",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "Express.js",
      "Node.js",
      "TailwindCSS",
      "TypeScript",
      "SQL",
      "MongoDB",
    ],
    hardworker: true,
    quickLearner: true,
    problemSolver: true,
    hireable: function () {
      return this.hardworker && this.problemSolver && this.skills.length >= 5;
    },
  };

  return (
    <main className="relative z-10 max-w-7xl mx-auto px-8 pt-12 pb-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-10">
          <div className="space-y-6">
            <h2
              className={`text-4xl font-bold ${darkMode ? "text-gray-100" : "text-gray-800"}`}
            >
              Hello,
            </h2>
            <h1 className="text-5xl lg:text-5xl font-extrabold leading-[1.15]">
              This is <span className="text-[#f02e65]">Pratiksha Parise</span> ,
              I'm a <br />
              <span className="text-[#11d3bb]">
                Software Developer | Full Stack MERN Developer | Data Analyst.
              </span>
            </h1>
            <p
              className={`text-lg max-w-xl leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              I am a proficient and passionate software developer with a focus
              on innovative solutions in technology. With extensive experience
              in various programming languages and frameworks, I excel at
              developing web applications and APIs.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 text-2xl text-[#f02e65]">
            <a
              href="https://github.com/Pratiksha251001"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/pratiksha-parise/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://preskilet.com/69b93ad03f319a002113a46d"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <a
                href="https://preskilet.com/69b93ad03f319a002113a46d"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img src={Preskilet} alt="Preskilet" className="w-5 h-5" />
              </a>
            </a>{" "}
            {/*<a href="#" className="hover:scale-110 transition-transform"><FaFacebook /></a>
            <a href="#" className="hover:scale-110 transition-transform"><FaTwitter /></a>*/}
          </div>

          {/* Buttons */}
          <div className="flex space-x-6">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className={`border px-10 py-3.5 rounded-full flex items-center space-x-3 transition-all text-sm font-bold tracking-wider ${darkMode ? "border-white/20 hover:bg-white/5" : "border-gray-300 hover:bg-gray-100"}`}
            >
              <span>CONTACT ME</span>
              <FaUser className="text-xs" />
            </button>
            <button
              onClick={() => window.open(resume, "_blank")}
              className="bg-gradient-to-r from-[#f02e65] to-[#d946ef] text-white px-10 py-3.5 rounded-full flex items-center space-x-3 hover:shadow-[0_0_20px_rgba(240,46,101,0.4)] transition-all text-sm font-bold tracking-wider"
            >
              <span>GET RESUME</span>
              <FaFileDownload className="text-xs" />
            </button>
          </div>
        </div>

        {/* Right Content - Code Window */}
        <div className="relative group lg:scale-110">
          <div
            className={`absolute -inset-1 bg-gradient-to-r from-[#11d3bb] to-[#f02e65] rounded-2xl blur transition-opacity duration-500 ${darkMode ? "opacity-20 group-hover:opacity-30" : "opacity-10 group-hover:opacity-20"}`}
          ></div>
          <div
            className={`relative border rounded-2xl p-8 shadow-2xl transition-colors duration-500 ${darkMode ? "bg-[#0d1117] border-white/10" : "bg-white border-gray-200"}`}
          >
            <div className="flex space-x-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div
              className={`font-mono text-sm leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              <p>
                <span className="text-[#f02e65]">const</span>{" "}
                <span className="text-[#11d3bb]">coder</span> = {"{"}
              </p>
              <p className="pl-6">
                <span>name:</span>{" "}
                <span className="text-[#ffbd2e]">'Pratiksha Parise'</span>,
              </p>
              <p className="pl-6">
                <span>skills:</span> [
              </p>
              <p className="pl-12 text-[#ffbd2e]">
                'HTML', 'CSS', 'JavaScript', 'React',
              </p>
              <p className="pl-12 text-[#ffbd2e]">
                'React', 'Redux','TailwindCSS','Express.js',
              </p>
              <p className="pl-12 text-[#ffbd2e]">
                'Node.js', 'TypeScript', 'MongoDB', 'SQL',
              </p>
              <p className="pl-6">],</p>
              <p className="pl-6">
                <span>hardworker:</span>{" "}
                <span className="text-[#ffbd2e]">true</span>,
              </p>
              <p className="pl-6">
                <span>quickLearner:</span>{" "}
                <span className="text-[#ffbd2e]">true</span>,
              </p>
              <p className="pl-6">
                <span>problemSolver:</span>{" "}
                <span className="text-[#ffbd2e]">true</span>,
              </p>
              <p className="pl-6">
                <span>hireable:</span>{" "}
                <span className="text-[#f02e65]">function</span>() {"{"}
              </p>
              <p className="pl-12">
                <span className="text-[#f02e65]">return</span> (
              </p>
              <p className="pl-18">
                <span className="text-[#11d3bb]">this</span>.hardworker &&
              </p>
              <p className="pl-18">
                <span className="text-[#11d3bb]">this</span>.problemSolver &&
              </p>
              <p className="pl-18">
                <span className="text-[#11d3bb]">this</span>.skills.length &gt;={" "}
                <span className="text-[#ffbd2e]">5</span>
              </p>
              <p className="pl-12">);</p>
              <p className="pl-6">{"}"}</p>
              <p>{"};"}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
