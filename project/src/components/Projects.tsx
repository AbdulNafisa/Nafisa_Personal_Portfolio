import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce App',
      githubLink: 'https://github.com/AbdulNafisa/E-COMMERCE-APPLICATION',
      externalLink: '',
      description:
        'React-based dynamic store UI with modern design patterns, shopping cart functionality, and responsive layout. Features include product filtering, user authentication, and payment integration.',
      image:
        'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5'],
      metrics: [
        { label: 'Components', value: '15+' },
        { label: 'Pages', value: '8' },
      ],
    },
    {
      title: 'Health-Booker',
      githubLink: 'https://github.com/AbdulNafisa/Health-Booker',
      externalLink: '',
      description:
        'Full-stack MERN application for healthcare appointment management. Includes patient registration, doctor scheduling, appointment booking, and real-time notifications.',
      image:
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      metrics: [
        { label: 'API Endpoints', value: '20+' },
        { label: 'User Roles', value: '3' },
      ],
    },
    {
      title: 'Chatting App',
      githubLink: 'https://github.com/AbdulNafisa/Chatting-Application',
      externalLink: '',
      description:
        'Real-time messaging application developed using Java Swing for the frontend and Socket Programming for network communication, enabling seamless peer-to-peer communication.',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Java', 'Socket Programming', 'Swing', 'Multi-threading'],
      metrics: [
        { label: 'Concurrent Users', value: '50+' },
        { label: 'Message Types', value: '5' },
      ],
    },
  ];

  const publications = [
    {
      title:
        'Impact of Covid-19 Affected Population All Over India Using Tableau Software. (IJRERD, Vol. 09, Issue 02)',
      description:
        'Interactive data visualization dashboard built with Tableau, displaying real-time COVID-19 statistics, trends, and geographical distribution. Visualized the impact of COVID-19 on the Indian population using Tableau, highlighting regional disparities and trends.',
      image:
        'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Tableau', 'Data Analysis', 'SQL'],
      metrics: [
        { label: 'Data Points', value: '10K+' },
        { label: 'Visualizations', value: '12' },
      ],
      certLink:
        'https://drive.google.com/file/d/1Fol0VICLbuBjja2Addw1rskMqnGGVe58/view?usp=sharing',
      pdfLink:
        'https://drive.google.com/file/d/1fPZWBSjJ0gqu_zs_x9-LrszT2QBIlr4d/view?usp=sharing',
    },
  ];

  const renderCard = (item, index) => (
    <div
      key={index}
      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group ${
        index % 2 === 1 ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="md:flex">
        <div className="md:w-1/3 relative">
          <div className="h-64 md:h-full relative overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 border border-white/20 rounded-full"></div>
          </div>
        </div>

        <div className="md:w-2/3 p-8">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors font-mono">
              {item.title}
            </h3>
            <div className="flex gap-2">
              {item.certLink && item.pdfLink ? (
                <>
                  <a
                    href={item.certLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-green-600/80 rounded-lg hover:bg-green-700 transition-colors text-sm text-white font-mono"
                  >
                    View Certificate
                  </a>
                  <a
                    href={item.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-600/80 rounded-lg hover:bg-blue-700 transition-colors text-sm text-white font-mono"
                  >
                    View PDF
                  </a>
                </>
              ) : (
                <>
                  {item.githubLink && (
                    <a
                      href={item.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {item.externalLink && (
                    <a
                      href={item.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  )}
                </>
              )}
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6 font-mono">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {item.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-6">
            {item.metrics.map((metric, metricIndex) => (
              <div key={metricIndex} className="text-center">
                <div className="text-xl font-bold text-purple-400 font-mono">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-400 font-mono">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Projects Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
            Projects Showcase
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono">
            Innovative solutions blending technical execution with user-centric
            design
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => renderCard(project, index))}
        </div>

        {/* Publications Section */}
        <div className="text-center mt-24 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
            Publications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono">
            Research and data-driven insights visualized for public awareness
          </p>
        </div>

        <div className="space-y-8">
          {publications.map((pub, index) => renderCard(pub, index))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
