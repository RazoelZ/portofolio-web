"use client";
import React, { useState } from "react";
import { experiencesData } from "../Data/ExperienceData";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const ExperienceComponent: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <section className="mb-60 px-6 md:px-16 max-w-6xl mx-auto md:pt-5">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-sm text-gray-500 dark:text-gray-400 mb-1 tracking-wider">
          {`(0${3})`}
        </h2>
        <h3 className="text-4xl italic font-semibold text-gray-900 dark:text-white mb-3">
          Experience
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700 pt-3">
          A journey across consulting, government, startups, and engineering —
          delivering high-impact solutions in every role.
        </p>
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Arrow left */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10
          p-3 rounded-2xl border border-gray-200 dark:border-zinc-800 
          shadow-theme-lg dark:hover:shadow-glow-blue
          hover:shadow-theme-xl
          transition-all duration-300
          hover: hover:border-blue-500 dark:hover:border-blue-400/40"
          onClick={() => instanceRef.current?.prev()}
        >
          ‹
        </button>

        <div ref={sliderRef} className="keen-slider">
          {experiencesData.map((exp, index) => (
            <div key={index} className="keen-slider__slide">
              <div
                className="
                  group bg-white dark:bg-[#141414]
                  flex flex-col
                  h-full w-[85%] lg:w-[92%] mx-auto
                  p-7 rounded-2xl border border-gray-200 dark:border-zinc-800 
                  shadow-theme-lg dark:hover:shadow-glow-blue
                  hover:shadow-theme-xl
                  transition-all duration-300
                  hover: hover:border-blue-500 dark:hover:border-blue-400/40
                "
              >
                {/* Top */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-display font-semibold text-blue-600 dark:text-blue-400">
                    {exp.role}{" "}
                    <span className="text-secondary font-normal">
                      – {exp.company}
                    </span>
                  </h3>
                  <span className="text-sm text-tertiary font-mono mt-1 md:mt-0">
                    {exp.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 text-secondary text-sm leading-relaxed pl-4 list-disc font-sans">
                  {exp.bullets.map((item, i) => (
                    <li
                      key={i}
                      className="hover:text-blue-600 dark:hover:text-blue-300 transition duration-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow right */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10
          p-3 rounded-2xl border border-gray-200 dark:border-zinc-800 
          shadow-theme-lg dark:hover:shadow-glow-blue
          hover:shadow-theme-xl
          transition-all duration-300
          hover: hover:border-blue-500 dark:hover:border-blue-400/40"
          onClick={() => instanceRef.current?.next()}
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-3">
        {experiencesData.map((_, index) => (
          <button
            key={index}
            onClick={() => instanceRef.current?.moveToIdx(index)}
            className={`w-3 h-3 rounded-full transition ${
              currentSlide === index
                ? "bg-blue-600 dark:bg-blue-400"
                : "bg-gray-300 dark:bg-zinc-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceComponent;
