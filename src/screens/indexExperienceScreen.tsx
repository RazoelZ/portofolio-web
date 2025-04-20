import React from "react";
import ProjectComponent from "../components/ProjectComponent";
import ExperienceComponent from "../components/ExperienceComponents";

const IndexExperienceScreen: React.FC = () => {
  return (
    <section className="min-h-screen px-6 md:px-16 py-20 text-white">
      <ExperienceComponent />
      <ProjectComponent />
    </section>
  );
};

export default IndexExperienceScreen;
