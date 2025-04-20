import React from "react";
const CertificationComponent: React.FC = () => {
  const certs = [
    {
      title: "Dicoding – Front-End Web Developer Expert",
      id: "ABC-1234",
      link: "https://www.dicoding.com",
    },
    {
      title: "BuildWithAngga – React JS for Beginner",
      id: "BWA-5678",
    },
  ];

  return (
    <div className="mb-16">
      <h2 className="relative text-3xl font-bold mb-10 inline-flex items-center gap-2 text-white after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[3px] after:w-0 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full">
        <span className="text-4xl">📜</span> Certifications
      </h2>
      <ul className="space-y-6 list-disc pl-6 text-gray-400">
        {certs.map((cert, index) => (
          <li key={index}>
            <strong className="text-green-400">{cert.title}</strong>
            <br />
            Credential ID: {cert.id}
            {cert.link && (
              <>
                {" "}
                |{" "}
                <a
                  href={cert.link}
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CertificationComponent;
