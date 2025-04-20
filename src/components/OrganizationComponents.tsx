import React from "react";

const OrganizationComponent: React.FC = () => {
  const orgs = [
    {
      name: "HIMATIF (Informatics Student Association)",
      date: "2022 – 2023",
      description:
        "Served as Creative Media Staff. Designed event posters, managed website updates, and collaborated with cross-functional teams for event promotions.",
    },
    {
      name: "Bangkit Academy 2023 – Web Development Path",
      date: "by Google, GoTo, & Traveloka",
      description:
        "Completed a 6-month intensive program focused on full-stack development, cloud computing, and soft skill training.",
    },
  ];

  return (
    <div>
      <h2 className="relative text-3xl font-bold mb-10 inline-flex items-center gap-2 text-white after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[3px] after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full">
        <span className="text-4xl">🏢</span> Organization
      </h2>
      <div className="space-y-6">
        {orgs.map((org, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] p-6 rounded-2xl border border-zinc-800 shadow-md"
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-1">
              {org.name}
            </h3>
            <p className="text-gray-400 text-sm mb-2">{org.date}</p>
            <p className="text-gray-400 text-sm">{org.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizationComponent;
