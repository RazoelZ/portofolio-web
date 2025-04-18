import React from "react";
import Lottie from "lottie-react";
import loader from "../assets/loader.json";

const LoaderComponent: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <Lottie animationData={loader} loop className="w-32 h-32w-32" />
    </div>
  );
};

export default LoaderComponent;
