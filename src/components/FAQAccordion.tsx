import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { faqData } from "../Data/FAQData";
import { FiHelpCircle } from "react-icons/fi";

const FAQAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [heights, setHeights] = useState<number[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setHeights(contentRefs.current.map((ref) => (ref ? ref.scrollHeight : 0)));
  }, []);

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="scroll-mt-20 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[150px] top-20 left-10"></div>
        <div className="absolute w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[150px] bottom-20 right-10"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-sm text-tertiary mb-1 tracking-wider font-mono">
            {`(0${8})`}
          </h2>

          <div className="flex items-center gap-3 mb-5">
            <FiHelpCircle className="text-blue-600 dark:text-blue-400 w-8 h-8" />
            <h3 className="text-4xl italic font-display font-semibold text-primary">
              Frequently Asked Questions
            </h3>
          </div>

          <p className="text-sm text-secondary border-t border-gray-300 dark:border-gray-700 pt-3 leading-relaxed font-sans">
            These are the questions I most often receive from recruiters,
            clients, and collaborators — designed to give you a clearer
            understanding of how I work, what I value, and the capabilities I
            bring to each project.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="
                  relative group
                  bg-white dark:bg-[#151515]/80 backdrop-blur-xl 
                  border border-gray-200 dark:border-zinc-800
                  rounded-xl shadow-theme-lg
                  hover:shadow-theme-xl dark:hover:shadow-glow-blue
                  transition-all duration-300
                  hover:-translate-y-[3px]
                "
              >
                {/* Glow Border */}
                <div
                  className="
                    absolute inset-0 rounded-xl z-[-1]
                    opacity-0 group-hover:opacity-100
                    blur-xl transition-all duration-500
                  "
                ></div>

                {/* HEADER BUTTON */}
                <button
                  onClick={() => toggleIndex(index)}
                  className="
                    w-full px-6 py-5
                    flex justify-between items-center
                    text-left text-primary font-display font-medium text-lg
                    transition-colors duration-200
                    hover:bg-gray-100 dark:hover:bg-zinc-800/40
                    rounded-t-xl
                  "
                >
                  <span>{item.question}</span>

                  <ChevronDown
                    className={`
                      w-5 h-5 text-gray-600 dark:text-gray-400 
                      transition-transform duration-300 
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                {/* CONTENT */}
                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  className={`
                    px-6 overflow-hidden text-sm text-secondary font-sans
                    transition-all duration-500 ease-in-out
                    ${isOpen ? "opacity-100 py-4" : "max-h-0 opacity-0"}
                  `}
                  style={{
                    maxHeight: isOpen
                      ? `${heights[index] ? heights[index] + 40 : 0}px`
                      : "0px",
                  }}
                >
                  <p className="leading-relaxed">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
