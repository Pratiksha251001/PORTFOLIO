export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      };
    case "css":
      return {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      };
    case "javascript":
      return {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      };
    case "typescript":
      return {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      };
    case "react":
      return {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      };

    case "tailwind":
      return {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      };
    case "mongodb":
      return {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      };

    case "postgresql":
      return {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      };
    case "git":
      return {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      };

    case "bootstrap":
      return {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      };

    case "figma":
      return {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      };

    case "github":
      return {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      };
    case "redux":
      return {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      };
    case "node js":
    case "nodejs":
    case "node.js":
      return {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      };
    case "express":
    case "expressjs":
    case "express.js":
      return {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      };
    case "power bi":
    case "powerbi":
      return { src: "https://cdn.worldvectorlogo.com/logos/power-bi-2.svg" };
    case "vscode":
    case "vs code":
      return {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      };
    case "figma":
    case "figma design":
      return {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      };
    case "python":
    case "python ":
      return {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      };
    case "excel":
      return {
        src: "https://img.icons8.com/color/48/microsoft-excel-2019.png",
      };

    case "google colab":
      return {
        src: "https://colab.research.google.com/img/colab_favicon_256px.png",
      };
    case "c":
      return {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      };

    default:
      return null;
  }
};
