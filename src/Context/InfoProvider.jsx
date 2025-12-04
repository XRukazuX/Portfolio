import { InfoContext } from "./TemaContext";

function InfoProvider({ children }) {
  const Info = {
    frontend: ["HTML5 💻", "CSS 🎨", "JavaScript ⚡", "React.js ⚛️"],
    backend: ["Node.js 🟢", "Express.js 🚀"],
    tools: [
      "Git & GitHub 🌐",
      "NPM / Yarn 📦",
      "Figma / Diseño UI 🎨",
      "VSCode ✏️",
    ],
  };
  return (
    <InfoContext.Provider value={{ Info }}>{children}</InfoContext.Provider>
  );
}
export default InfoProvider;
