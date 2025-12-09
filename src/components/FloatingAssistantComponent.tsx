import { useState } from "react";
import { knowledge } from "../Data/KnowledgeData";

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
        className="
          fixed bottom-6 right-6 w-14 h-14 rounded-full
          bg-purple-600 hover:bg-purple-700
          text-white shadow-theme-xl
          flex items-center justify-center
          transition-all duration-300
          dark:shadow-[0_0_20px_rgba(139,92,246,0.45)]
        "
        onClick={() => setOpen(!open)}
      >
        {open ? "×" : "AI"}
      </button>

      {/* Panel */}
      {open && (
        <div
          className="
            fixed bottom-24 right-6 w-80 
            bg-white/70 dark:bg-[#171717]/80 backdrop-blur-xl
            border border-gray-300 dark:border-zinc-700
            shadow-theme-xl rounded-xl p-4
            animate-fadeIn text-primary
          "
        >
          <h3 className="font-semibold text-lg mb-3 text-primary">
            Ask about me
          </h3>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleOptionClick("experience")}
              className="
                p-2 rounded-lg
                bg-gray-100 hover:bg-gray-200
                dark:bg-[#222] dark:hover:bg-[#282828]
                transition
              "
            >
              My Experiences
            </button>

            <button
              onClick={() => handleOptionClick("skills")}
              className="
                p-2 rounded-lg
                bg-gray-100 hover:bg-gray-200
                dark:bg-[#222] dark:hover:bg-[#282828]
                transition
              "
            >
              My Skills
            </button>

            <button
              onClick={() => handleOptionClick("projects")}
              className="
                p-2 rounded-lg
                bg-gray-100 hover:bg-gray-200
                dark:bg-[#222] dark:hover:bg-[#282828]
                transition
              "
            >
              My Projects
            </button>

            <button
              onClick={() => handleOptionClick("education")}
              className="
                p-2 rounded-lg
                bg-gray-100 hover:bg-gray-200
                dark:bg-[#222] dark:hover:bg-[#282828]
                transition
              "
            >
              My Education
            </button>

            <button
              onClick={() => handleOptionClick("all")}
              className="
                p-2 rounded-lg
                bg-purple-100 hover:bg-purple-200
                dark:bg-purple-900/40 dark:hover:bg-purple-800/40
                text-purple-700 dark:text-purple-300
                transition
              "
            >
              Full Summary
            </button>
          </div>

          {answer && (
            <div
              className="
                mt-4 p-3 rounded-lg text-sm whitespace-pre-wrap
                bg-gray-50 dark:bg-[#222]
                border border-gray-300 dark:border-zinc-700
              "
            >
              {answer}
            </div>
          )}
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out forwards;
        }
      `}</style>
    </>
  );
}
