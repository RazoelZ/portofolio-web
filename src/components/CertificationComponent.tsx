import React, { useState } from "react";
import DialogComponent from "./DialogComponent";
import { Medal } from "lucide-react";
import { allCerts } from "../Data/CertificationData";

const CertificationComponent: React.FC = () => {
  const [showDialog, setShowDialog] = useState(false);
  const previewCerts = allCerts.slice(0, 8);
  const hasMore = allCerts.length > 8;

  const renderCertCard = (cert: (typeof allCerts)[number], key: number) => (
    <div
      key={key}
      className="
        bg-[#141414]/80 backdrop-blur-xl 
        p-5 rounded-xl border border-zinc-800
        shadow-[0_0_25px_-10px_rgba(56,189,248,0.3)]
        hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.5)]
        transition-all duration-300 
        hover:-translate-y-2 hover:scale-[1.02]
      "
    >
      <div className="mb-2 flex justify-between items-start">
        <h4 className="text-white font-semibold text-md leading-tight">
          {cert.title}
        </h4>

        {cert.badge && (
          <span
            className="
              ml-2 bg-blue-600/20 text-blue-300
              text-xs px-2 py-0.5 rounded-full
              border border-blue-500/30
            "
          >
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
      className="relative py-28 px-6 md:px-16 max-w-6xl mx-auto"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[150px] top-0 left-0"></div>
        <div className="absolute w-[280px] h-[280px] bg-indigo-500/10 rounded-full blur-[150px] bottom-10 right-10"></div>
      </div>

      {/* Header */}
      <div className="w-full mb-10">
        <h2 className="text-sm text-gray-500 mb-1 tracking-wider">(05)</h2>

        <div className="flex items-center gap-3 mb-4">
          <Medal className="text-blue-400 w-7 h-7" />
          <h3 className="text-4xl italic font-semibold text-white">
            Certifications
          </h3>
        </div>

        <p className="text-sm text-gray-400 border-t border-gray-700 pt-3 leading-relaxed max-w-3xl">
          A curated collection of certifications representing my continuous
          learning in software engineering, cloud computing, and IT.
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {previewCerts.map((cert, idx) => renderCertCard(cert, idx))}

        {/* View All Card */}
        {hasMore && (
          <button
            onClick={() => setShowDialog(true)}
            className="
              bg-[#141414]/80 backdrop-blur-xl 
              border border-zinc-800 p-5 rounded-xl
              shadow-[0_0_25px_-12px_rgba(56,189,248,0.3)]
              hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.4)]
              transition-all duration-300 
              hover:-translate-y-2 hover:scale-[1.02]
              text-left cursor-pointer
            "
          >
            <h4 className="text-white font-semibold text-md mb-1">
              +{allCerts.length - 8} more certifications
            </h4>
            <p className="text-sm text-blue-400 underline animate-pulse">
              Click to view all
            </p>
          </button>
        )}
      </div>

      {/* Modal */}
      <DialogComponent
        isOpen={showDialog}
        onClose={() => setShowDialog(false)}
        title="All Certifications"
      >
        <div className="grid sm:grid-cols-2 gap-4 px-4">
          {allCerts.map((cert, i) => renderCertCard(cert, i))}
        </div>
      </DialogComponent>
    </section>
  );
};

export default CertificationComponent;
