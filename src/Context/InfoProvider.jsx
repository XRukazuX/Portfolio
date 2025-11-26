import { InfoContext } from "./TemaContext";

function InfoProvider({ children }) {
  const Info = {
    name: "Lucas",
    skills: [
      "HTML5 💻",
      "CSS 🎨",
      "JavaScript ⚡",
      "React.js ⚛️",
      "Node.js 🟢",
      "Express.js 🚀",
    ],
  };
  return (
    <InfoContext.Provider value={{ Info }}>{children}</InfoContext.Provider>
  );
}
export default InfoProvider;
