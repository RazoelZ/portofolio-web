import React from "react";
import HeroComponent from "../components/HeroComponent";
import AboutMeComponent from "../components/AboutMeComponent";

const IndexPortofolioScreen: React.FC = () => {
  return (
    <div id="top">
      <HeroComponent />
      <AboutMeComponent />
    </div>
  );
};

export default IndexPortofolioScreen;
