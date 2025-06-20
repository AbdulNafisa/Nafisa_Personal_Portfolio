const PositionsOfResponsibility = () => (
  <section
    id="positions"
    className="py-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl max-w-4xl mx-auto my-10 px-6"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-mono text-center">
      Positions of Responsibility
    </h2>
    <div className="grid md:grid-cols-2 gap-6">
      {/* MLSA */}
      <div className="bg-white/10 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
        <img
          src="https://miro.medium.com/max/552/1*fMCdGCokXoh8CECCD7j9Og.png"
          alt="MLSA Badge"
          className="w-16 h-16 mb-4"
        />
        <h3 className="text-2xl font-semibold text-purple-400 mb-2 font-mono">
          Microsoft Learn Student Ambassador
        </h3>
        <ul className="list-disc list-inside text-gray-300 font-mono text-left ml-4">
          <li>
            Organizer and Content Creator – Organized Algothon in SITAR 2K25
            Fest.
          </li>
          <li>
            Organized MLSA at PVSIT Orientation Session on vision and objectives
            of MLSA.
          </li>
        </ul>
      </div>
      {/* NSS */}
      <div className="bg-white/10 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
        <img
          src="https://www.nss.gtu.ac.in/images/nss.png"
          alt="NSS Logo"
          className="w-16 h-16 mb-4"
        />
        <h3 className="text-2xl font-semibold text-purple-400 mb-2 font-mono">
          National Service Scheme (NSS)
        </h3>
        <ul className="list-disc list-inside text-gray-300 font-mono text-left ml-4">
          <li>
            NSS Volunteer – Engaged in social outreach, marathons, treks, and
            environmental activities through NSS programs.
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default PositionsOfResponsibility;
