import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { faqData } from "../Data/FAQData";

const FAQAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [heights, setHeights] = useState<number[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const newHeights = contentRefs.current.map((ref) =>
      ref ? ref.scrollHeight : 0
    );
    setHeights(newHeights);
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="mb-20 px-6 md:px-16 max-w-6xl mx-auto">
      <div className="w-full">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-sm text-gray-400 mb-1">(06)</h2>
          <h3 className="text-4xl italic font-semibold text-white mb-5">
            Frequently Asked Questions
          </h3>
          <p className="text-sm text-gray-400 border-t border-gray-600 pt-3">
            These are some of the common questions I get from recruiters,
            collaborators, or clients — and my answers to help you understand my
            background better.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] border border-zinc-700 rounded-xl shadow-md hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-white font-medium text-lg hover:bg-zinc-800 transition rounded-t-xl cursor-pointer"
                >
                  {item.question}
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transform transition-transform ${
                      isActive ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out text-sm text-gray-300 ${
                    isActive ? "py-4 opacity-100" : "max-h-0 opacity-0"
                  }`}
                  style={{
                    maxHeight: isActive ? `${heights[index] + 150}px` : "0px",
                  }}
                >
                  <p>{item.answer}</p>
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
