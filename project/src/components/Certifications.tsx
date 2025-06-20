import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Certifications = () => {
  const [selectedOrg, setSelectedOrg] = useState('All');

  const allCertifications = [
    // NPTEL
    {
      title: 'Enhancing Soft Skills and Personality',
      organization: 'NPTEL',
      period: 'Feb - Apr 2023',
      link: 'https://drive.google.com/file/d/1dsQ5FFrWZJbMEdA1Dp2FxT-kk59vHmVq/view?usp=sharing',
    },
    {
      title: 'Problem Solving Through Programming In C',
      organization: 'NPTEL',
      period: 'Jul - Oct 2023',
      link: 'https://drive.google.com/file/d/1ZRmox7nv9qfA-5Rgi9MR-OU6wtaMWOiq/view?usp=sharing',
    },
    {
      title: 'Programming In Java',
      organization: 'NPTEL',
      period: 'Jan- Apr 2024',
      link: 'https://drive.google.com/file/d/1mCQdlKYwTjFC_3Z85ILRDetL5r4rVYVY/view?usp=sharing',
    },
    {
      title: 'Data Base Management System',
      organization: 'NPTEL',
      period: 'Jul- Sep 2024',
      link: 'https://drive.google.com/file/d/1xE4t2fWbNyrUHFaqB_ws4MZye3DzY5Gs/view?usp=sharing',
    },
    {
      title: 'Google Cloud Computing Foundations',
      organization: 'NPTEL',
      period: 'Aug - Oct 2024',
      link: 'https://drive.google.com/file/d/10qCE1tuuehgGes5IqqD7HKKwweTB7lhb/view?usp=sharing',
    },

    // Infosys
    {
      title: 'HTML5 - The Language',
      organization: 'Infosys',
      period: 'May 2025',
      link: 'https://drive.google.com/file/d/1Yc1hxNkG7c5MYBP5ATE6FoEu-ZWNIc6T/view?usp=sharing',
    },
    {
      title: 'CSS',
      organization: 'Infosys',
      period: 'May 2025',
      link: 'https://drive.google.com/file/d/13ANYqpM4JPuOVBo5AWK2V6Vp6WEMwiIG/view?usp=sharing',
    },
    {
      title: 'JavaScript',
      organization: 'Infosys',
      period: 'May 2025',
      link: 'https://drive.google.com/file/d/1DXsJw5VuMpkx95KfqmBudk55_UE54MUc/view?usp=sharing',
    },
    {
      title: 'DBMS Part 1',
      organization: 'Infosys',
      period: 'Aug 2024',
      link: 'https://drive.google.com/file/d/13E0tu4ZR2P1tahuo0nAaBJglONyZbOuu/view?usp=sharing',
    },
    {
      title: 'DBMS Part 2',
      organization: 'Infosys',
      period: 'Aug 2024',
      link: 'https://drive.google.com/file/d/1lFjED2r22vlevq8RQx5Ggtn3aUVXvGQf/view?usp=sharing',
    },
    {
      title: 'Python Foundation Certification',
      organization: 'Infosys',
      period: 'Aug 2024',
      link: 'https://drive.google.com/file/d/1OZzR7qmvqqSsVnG2B9erp8eIp-ht2Ows/view?usp=sharing',
    },
    {
      title: 'Java Foundation Certification',
      organization: 'Infosys',
      period: 'Jun 2025',
      link: 'https://drive.google.com/file/d/1Q1uYJaMYq0OAJ-FIK705AJzuavelmqXv/view?usp=sharing',
    },
    {
      title: 'AI Primer Certification',
      organization: 'Infosys',
      period: 'Oct 2024',
      link: 'https://drive.google.com/file/d/1NongVqWACWXKTimx1r95q1Iti8zWO0lB/view?usp=sharing',
    },
    {
      title: 'ReactJS',
      organization: 'Infosys',
      period: 'Feb 2025',
      link: 'https://drive.google.com/file/d/1Jgw1oDAg9z4sbvoUK3geOpe6FrNKRvNq/view?usp=sharing',
    },

    // EduSkills
    {
      title: 'Palo Alto Cybersecurity VI',
      organization: 'Eduskills',
      period: 'Sep - Nov 2023',
      link: 'https://drive.google.com/file/d/1C1OyRjOhUaeK6x1T3wjfsBX_1lh5GZ9V/view?usp=sharing',
    },
    {
      title: 'Blue Prism Intelligent Automation VI',
      organization: 'Eduskills',
      period: 'Jan - Mar 2024',
      link: 'https://drive.google.com/file/d/1eY_tEwWSbiO6k99uazcvcLBp_bld0ec5/view?usp=sharing',
    },
    {
      title: 'AWS Cloud Virtual Internship',
      organization: 'Eduskills',
      period: 'Apr - Jun 2024',
      link: 'https://drive.google.com/file/d/1EIK97RxY7l3en1Hn7yIP8_bGf24Cln1Z/view?usp=sharing',
    },
    {
      title: 'Google Generative AI VI',
      organization: 'Eduskills',
      period: 'Jul - Sep 2024',
      link: 'https://drive.google.com/file/d/1bXTBSf_gRSlhhSdK0qo3f37dh5X68oUQ/view?usp=sharing',
    },
    {
      title: 'Google AI-ML VI',
      organization: 'Eduskills',
      period: 'Oct - Dec 2024',
      link: 'https://drive.google.com/file/d/1eBR-5y_3bYCFQCf5ZjOoCzIMNWe06N8F/view?usp=sharing',
    },
    {
      title: 'Altair Data Science Master VI',
      organization: 'Eduskills',
      period: 'Jan - Mar 2025',
      link: 'https://drive.google.com/file/d/1sjioWACIplQSiBthP1GFEkgITkz0ggkz/view?usp=sharing',
    },
    {
      title: 'Google Android Developer VI',
      organization: 'Eduskills',
      period: 'Apr - Jun 2025',
      link: 'https://drive.google.com/file/d/1qCydY3QHpjAhOOOw3-jbf4OtfgFY7mbk/view?usp=sharing',
    },

    // Cisco
    {
      title: 'Cisco Cyber Suraksha',
      organization: 'Cisco',
      period: 'Oct 2023',
      link: 'https://drive.google.com/file/d/1lqwTh1liG0OpQuG7Twtldh-SpSloMnOy/view?usp=sharing',
    },

    // IBM
    {
      title: 'Data Analytics with Python',
      organization: 'IBM',
      period: 'Dec 2024 - Jan 2025',
      link: 'https://drive.google.com/file/d/1YtJJUpisIl2qEfZX9u4t6jPBAbqtgJM7/view?usp=sharing',
    },

    // Oracle
    {
      title: 'Oracle AI Foundations Associate',
      organization: 'Oracle',
      period: 'Jun 2025',
      link: 'https://drive.google.com/file/d/19IarHQ-e433PpEIf4aBC6Zsl4QFqsDlG/view?usp=sharing',
    },
  ];

  const organizations = [
    'All',
    ...new Set(allCertifications.map((c) => c.organization)),
  ];
  const certifications =
    selectedOrg === 'All'
      ? allCertifications
      : allCertifications.filter((c) => c.organization === selectedOrg);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
              Certifications
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono">
              View my verified certifications from top platforms.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {organizations.map((org) => (
              <button
                key={org}
                onClick={() => setSelectedOrg(org)}
                className={`px-4 py-2 rounded-full text-sm font-mono font-semibold transition-colors ${
                  selectedOrg === org
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/10 text-white hover:bg-purple-500/30'
                }`}
              >
                {org}
              </button>
            ))}
          </div>

          {/* Certifications List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-2 font-mono">
                  {cert.title}
                </h3>
                <p className="text-purple-400 font-semibold mb-1 font-mono">
                  {cert.organization}
                </p>
                <p className="text-gray-400 text-sm mb-4 font-mono">
                  {cert.period}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition-colors font-mono text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
