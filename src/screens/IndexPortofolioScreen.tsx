import React, { useEffect, useState } from "react";
import HeroComponent from "../components/HeroComponent";
import AboutMeComponent from "../components/AboutMeComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const IndexPortofolioScreen: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize); // Re-run on resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  if (isMobile) {
    // Render components stacked for mobile
    return (
      <div className="flex flex-col gap-6 px-4 py-6">
        <HeroComponent />
        <AboutMeComponent />
      </div>
    );
  }

  // Render Swiper carousel for desktop/tablet
  return (
    <Swiper
      modules={[Pagination, Navigation, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        type: "bullets",
      }}
      navigation
      effect="fade"
      className="h-full"
    >
      <SwiperSlide>
        <HeroComponent />
      </SwiperSlide>
      <SwiperSlide>
        <AboutMeComponent />
      </SwiperSlide>
    </Swiper>
  );
};

export default IndexPortofolioScreen;
