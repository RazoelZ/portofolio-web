import React, { useState } from "react";
import DialogComponent from "./DialogComponent"; // Adjust path as needed

const allCerts = [
  {
    title: "Belajar Dasar Git dengan GitHub",
    badge: "Dicoding",
    id: "",
    link: "",
  },
  {
    title: "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud",
    badge: "Dicoding",
    id: "",
    link: "",
  },
  {
    title: "Menjadi Google Cloud Engineer",
    badge: "Google Cloud",
    id: "",
    link: "",
  },
  {
    title: "Primavera P6 Professional Fundamentals",
    badge: "Primavera",
    id: "",
    link: "",
  },
  {
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    badge: "Dicoding",
    id: "",
    link: "",
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    badge: "Dicoding",
    id: "",
    link: "",
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    badge: "Dicoding",
    id: "",
    link: "",
  },
  { title: "IT Support", badge: "Coursera", id: "", link: "" },
  {
    title: "Primavera P6 Professional Fundamentals Oracle Academy",
    badge: "Oracle",
    id: "",
    link: "",
  },
  {
    title: "Operating Systems and You: Becoming a Power User",
    badge: "Coursera",
    id: "",
    link: "",
  },
  {
    title: "System Administration and IT Infrastructure",
    badge: "Coursera",
    id: "",
    link: "",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    badge: "Coursera",
    id: "",
    link: "",
  },
  { title: "Bangkit Graduate (96+)", badge: "Bangkit", id: "", link: "" },
];

const CertificationComponent: React.FC = () => {
  const [showDialog, setShowDialog] = useState(false);
  const previewCerts = allCerts.slice(0, 8);
  const hasMore = allCerts.length > 8;

  const renderCertCard = (cert: (typeof allCerts)[number], key: React.Key) => (
    <div
      key={key}
      className="bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] border border-zinc-800 p-5 rounded-xl shadow-md hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] "
    >
      <div className="mb-2 flex justify-between items-start">
        <h4 className="text-white font-semibold text-md">{cert.title}</h4>
        {cert.badge && (
          <span className="ml-2 bg-blue-800/20 text-blue-300 text-xs px-2 py-0.5 rounded-full font-medium">
            {cert.badge}
          </span>
        )}
      </div>
      {cert.id || cert.link ? (
        <p className="text-sm text-gray-400">
          {cert.id && <span>Credential ID: {cert.id}</span>}
          {cert.link && (
            <>
              {" "}
              |{" "}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                View
              </a>
            </>
          )}
        </p>
      ) : (
        <p className="text-sm text-gray-500 italic">Credential pending</p>
      )}
    </div>
  );

  return (
    <section
      id="certificates"
      className="py-22 px-6 md:px-16 max-w-6xl mx-auto bg-[#121212]"
    >
      {/* Header */}
      <div className="w-full mb-3">
        <h2 className="text-sm text-gray-400 mb-1">(05)</h2>
        <h3 className="text-4xl italic font-semibold text-white mb-4">
          Certifications
        </h3>
        <p className="text-sm text-gray-400 border-t border-gray-600 pt-3">
          A collection of certifications and modules that reflect my learning
          journey in front-end, back-end, cloud computing, and software
          development.
        </p>
      </div>

      {/* Certification Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {previewCerts.map((cert, idx) => renderCertCard(cert, idx))}

        {/* 9th card as View All */}
        {hasMore && (
          <button
            onClick={() => setShowDialog(true)}
            className="bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] border border-zinc-800 p-5 rounded-xl shadow-md hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] text-left cursor-pointer"
          >
            <h4 className="text-white font-semibold text-md mb-1">
              +{allCerts.length - 8} more certifications
            </h4>
            <p className="text-sm text-blue-400 underline">Click to view all</p>
          </button>
        )}
      </div>

      {/* Dialog Modal */}
      <DialogComponent
        isOpen={showDialog}
        onClose={() => setShowDialog(false)}
        title="All Certifications"
      >
        <div className="grid sm:grid-cols-2 gap-4 px-4">
          {allCerts.map((cert, i) => renderCertCard(cert, i))}
        </div>
      </DialogComponent>

      {/* Back to Top */}
      {/* <div className="mt-8 flex justify-center md:justify-end animate-bounce">
        <a
          href="#top"
          className="text-gray-400 hover:text-blue-400 transition text-lg"
        >
          ↑ Back to Top
        </a>
      </div> */}
    </section>
  );
};

export default CertificationComponent;
