"use client";
import React, { useState } from "react";
import { experiencesData } from "../Data/ExperienceData";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FiBriefcase } from "react-icons/fi";

const ExperienceComponent: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <section className="scroll-mt-28" id="experiences">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm text-gray-500 dark:text-gray-400 mb-1 tracking-wider">
            {`(0${3})`}
          </h2>

          <div className="flex items-center gap-3 mb-4">
            <FiBriefcase className="text-blue-600 dark:text-blue-400 w-9 h-9" />
            <h2 className="text-3xl md:text-4xl italic font-semibold text-gray-900 dark:text-white">
              Experience
            </h2>
          </div>

          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700 pt-3">
            A journey across consulting, government, startups, and engineering —
            delivering high-impact solutions in every role.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative md:px-16">
          {/* Arrows - Desktop Only */}
          <button
            className="
            hidden md:flex
            absolute left-0 top-1/2 -translate-y-1/2
            z-10 p-3 rounded-2xl
            bg-surface
            border border-gray-200 dark:border-zinc-800
            shadow-theme-lg hover:shadow-theme-xl dark:hover:shadow-glow-blue
            transition-all duration-300 group
          "
            onClick={() => instanceRef.current?.prev()}
          >
            <ChevronLeft className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition" />
          </button>

          {/* Slider */}
          <div ref={sliderRef} className="keen-slider">
            {experiencesData.map((exp, index) => (
              <div key={index} className="keen-slider__slide px-1 md:px-4">
                <div
                  className="
                  bg-surface
                  rounded-2xl p-6 md:p-8
                  border border-gray-200 dark:border-zinc-800
                  shadow-theme-lg hover:shadow-theme-xl
                  dark:hover:shadow-glow-blue
                  transition-all duration-300
                  max-w-4xl mx-auto h-full
                "
                >
                  {/* Top Section */}
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-5">
                    <h3 className="text-lg md:text-xl font-display font-semibold text-blue-600 dark:text-blue-400 leading-tight">
                      {exp.role}
                      <span className="text-secondary font-normal">
                        {" "}
                        – {exp.company}
                      </span>
                    </h3>

                    <span className="text-xs md:text-sm text-tertiary font-mono mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3 text-secondary text-sm md:text-base leading-relaxed pl-5 list-disc font-sans">
                    {exp.bullets.map((item, i) => (
                      <li
                        key={i}
                        className="
                        hover:text-blue-600 dark:hover:text-blue-300
                        transition-colors duration-200
                      "
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow - Desktop Only */}
          <button
            className="
            hidden md:flex
            absolute right-0 top-1/2 -translate-y-1/2
            z-10 p-3 rounded-2xl
            bg-surface
            border border-gray-200 dark:border-zinc-800
            shadow-theme-lg hover:shadow-theme-xl dark:hover:shadow-glow-blue
            transition-all duration-300 group
          "
            onClick={() => instanceRef.current?.next()}
          >
            <ChevronRight className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {experiencesData.map((_, index) => (
            <button
              key={index}
              onClick={() => instanceRef.current?.moveToIdx(index)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-blue-600 dark:bg-blue-400 scale-110"
                  : "bg-gray-300 dark:bg-zinc-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceComponent;
