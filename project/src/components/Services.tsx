import React from 'react';
import { Code, Figma, Database, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      subtitle: "React, JavaScript, Tailwind CSS",
      description: "Building responsive, interactive web interfaces with modern React practices.",
      icon: <Code className="w-8 h-8" />,
      deliverables: [
        "Landing pages with sleek animations",
        "Component-driven UIs",
        "Mobile-first implementations"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "UI/UX Prototyping",
      subtitle: "Figma, Design Thinking",
      description: "Creating intuitive wireframes and prototypes that prioritize user needs.",
      icon: <Figma className="w-8 h-8" />,
      deliverables: [
        "User flow diagrams",
        "Clickable mockups",
        "Usability-focused redesigns"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Full-Stack Solutions",
      subtitle: "Django, MERN Stack",
      description: "Developing functional web applications from concept to deployment.",
      icon: <Database className="w-8 h-8" />,
      deliverables: [
        "Database-integrated systems",
        "RESTful APIs",
        "Deployment-ready MVPs"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Technical Consultation",
      subtitle: "For Students & Startups",
      description: "Bridging theory and practice for academic projects or early-stage ideas.",
      icon: <Users className="w-8 h-8" />,
      deliverables: [
        "Tech stack recommendations",
        "Project roadmap planning",
        "Code review for learning projects"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
              Services I Offer
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono">
              Practical solutions grounded in my technical training and project experience
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className={`text-transparent bg-clip-text bg-gradient-to-r ${service.color} mb-4`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 font-mono">{service.title}</h3>
                <p className="text-purple-400 text-sm font-medium mb-4 font-mono">{service.subtitle}</p>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-mono">
                  {service.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-white font-semibold text-sm mb-3 font-mono">What I deliver:</h4>
                  {service.deliverables.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm font-mono">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;