import { useState } from "react";
import knowledge from "../data/knowledge.json";

export default function FloatingAssistant() {
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleOptionClick = (option: string) => {
    switch (option) {
      case "experience":
        setAnswer(
          knowledge.experiences
            .map((e) => `• ${e.role} at ${e.company} (${e.period})`)
            .join("\n")
        );
        break;

      case "skills":
        setAnswer(
          `Technical Skills:\n${knowledge.skills.technical.join(", ")}`
        );
        break;

      case "projects":
        setAnswer(
          knowledge.projects
            .map((p) => `• ${p.name} (${p.year}) — ${p.role}`)
            .join("\n")
        );
        break;

      case "education":
        setAnswer(
          `${knowledge.education.degree}\n${knowledge.education.university}\nGPA: ${knowledge.education.gpa}`
        );
        break;

      case "all":
        setAnswer(
          "Here’s a full summary about me:\n\n" +
            knowledge.experiences
              .map((e) => `• ${e.role} at ${e.company}`)
              .join("\n") +
            "\n\nSkills:\n" +
            knowledge.skills.technical.join(", ")
        );
        break;

      default:
        setAnswer("");
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-purple-600 text-white shadow-xl flex items-center justify-center hover:bg-purple-700 transition"
        onClick={() => setOpen(!open)}
      >
        {open ? "×" : "AI"}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-white/90 backdrop-blur border shadow-xl rounded-xl p-4 animate-fadeIn">
          <h3 className="font-semibold text-lg mb-2">Ask about me</h3>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleOptionClick("experience")}
              className="p-2 bg-gray-100 hover:bg-gray-200 rounded"
            >
              My Experiences
            </button>

            <button
              onClick={() => handleOptionClick("skills")}
              className="p-2 bg-gray-100 hover:bg-gray-200 rounded"
            >
              My Skills
            </button>

            <button
              onClick={() => handleOptionClick("projects")}
              className="p-2 bg-gray-100 hover:bg-gray-200 rounded"
            >
              My Projects
            </button>

            <button
              onClick={() => handleOptionClick("education")}
              className="p-2 bg-gray-100 hover:bg-gray-200 rounded"
            >
              My Education
            </button>

            <button
              onClick={() => handleOptionClick("all")}
              className="p-2 bg-purple-100 hover:bg-purple-200 rounded"
            >
              Full Summary
            </button>
          </div>

          {answer && (
            <div className="mt-3 p-2 bg-gray-50 border rounded text-sm whitespace-pre-wrap">
              {answer}
            </div>
          )}
        </div>
      )}
    </>
  );
}
