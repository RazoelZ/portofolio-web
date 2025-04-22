import React from "react";
import ProjectComponent from "../components/ProjectComponent";
import ExperienceComponent from "../components/ExperienceComponents";

const IndexExperienceScreen: React.FC = () => {
  return (
    <div id="experience">
      <ExperienceComponent />
      <ProjectComponent />
    </div>
  );
};

export default IndexExperienceScreen;
