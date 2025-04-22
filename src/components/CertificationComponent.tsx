import React from "react";

const CertificationComponent: React.FC = () => {
  const certs = [
    {
      title: "Belajar Dasar Git dengan GitHub",
      id: "",
      link: "",
      badge: "Dicoding",
    },
    {
      title:
        "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud",
      id: "",
      badge: "Dicoding",
      link: "",
    },
    {
      title: "Menjadi Google Cloud Engineer",
      id: "",
      badge: "Google Cloud",
      link: "",
    },
    {
      title: "Primavera P6 Professional Fundamentals",
      id: "",
      badge: "Primavera",
      link: "",
    },
    {
      title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
      id: "",
      badge: "Dicoding",
      link: "",
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      id: "",
      badge: "Dicoding",
      link: "",
    },
    {
      title: "Belajar Dasar Pemrograman Web",
      id: "",
      badge: "Dicoding",
      link: "",
    },
  ];

  return (
    <section className="mb-20 px-6 md:px-16">
      {/* Header */}
      <div className="max-w-3xl mb-12">
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
        {certs.map((cert, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] border border-zinc-800 p-5 rounded-xl shadow-md hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] border border-zinc-800"
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
        ))}
      </div>
    </section>
  );
};

export default CertificationComponent;
