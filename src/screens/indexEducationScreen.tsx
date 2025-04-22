import React from "react";
import EducationComponent from "../components/EducationComponents";
import CertificationComponent from "../components/CertificationComponent";
// import OrganizationComponent from "../components/OrganizationComponents";

const indexEducationScreen: React.FC = () => {
  return (
    <section className="min-h-screen px-6 md:px-16 py-20 text-white">
      {/* 🎓 Education */}
      <EducationComponent />

      {/* 📜 Certifications */}
      <CertificationComponent />

      {/* 🏢 Organization */}
      {/* <OrganizationComponent /> */}
    </section>
  );
};

export default indexEducationScreen;
