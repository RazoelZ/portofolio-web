import React from "react";
import { organizationsData } from "../Data/OrganizationData";
import { Landmark } from "lucide-react";

const OrganizationComponent: React.FC = () => {
  return (
    <section id="leadership" className="scroll-mt-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="eyebrow mb-1">{`(06)`}</h2>

          <div className="flex items-center gap-3 mb-4">
            <Landmark className="text-accent w-9 h-9" />
            <h2 className="text-4xl italic font-serif-display font-semibold text-primary">
              Leadership &amp; Development
            </h2>
          </div>

          <p className="text-sm md:text-lg text-secondary border-t border-line pt-3 leading-relaxed font-sans">
            Beyond client delivery — organizational and community roles where I
            led teams, built processes, and represented institutions.
          </p>
        </div>

        <div className="space-y-6">
          {organizationsData.map((org, index) => (
            <div
              key={index}
              className="
                border border-line p-6 md:p-8
                bg-white dark:bg-[#0f1420]
                hover:border-accent/60 transition-colors duration-300
              "
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-4 gap-1">
                <h3 className="text-lg md:text-xl font-serif-display font-semibold text-primary leading-tight">
                  {org.role}
                  <span className="text-secondary font-sans font-normal">
                    {" "}
                    — {org.org}
                  </span>
                </h3>
                <span className="eyebrow text-xs shrink-0">{org.period}</span>
              </div>

              <ul className="space-y-2.5 text-secondary text-sm md:text-base leading-relaxed pl-5 list-disc font-sans">
                {org.bullets.map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-accent transition-colors duration-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizationComponent;
