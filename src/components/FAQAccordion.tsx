import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { faqData } from "../Data/FAQData"; // Adjust the import path as necessary

const FAQAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [heights, setHeights] = useState<number[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Get all scrollHeights after mount
    const newHeights = contentRefs.current.map((ref) =>
      ref ? ref.scrollHeight : 0
    );
    setHeights(newHeights);
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 ">
          Frequently Asked Questions (FAQ)
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-700 rounded-xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-4 cursor-pointer bg-gray-800 hover:bg-gray-700 text-left text-lg font-medium text-white focus:outline-none"
                >
                  {item.question}
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform ${
                      isActive ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  className="px-6 text-gray-300 transition-all duration-500 ease-in-out overflow-hidden"
                  style={{
                    // maxHeight: isActive ? `${heights[index]}px` : "0px",
                    opacity: isActive ? 1 : 0,
                    padding: isActive ? "1.5rem" : "0rem",
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
