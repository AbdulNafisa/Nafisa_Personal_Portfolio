import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      company: 'Google Cloud + Eduskills',
      role: 'AI/ML Development Intern',
      period: 'July - September 2024',
      status: 'Completed',
      description:
        'Worked on cutting-edge Generative AI projects utilizing machine learning models and Google Cloud Platform services. Focused on developing intelligent applications with natural language processing capabilities.',
      technologies: [
        'Google Cloud Platform',
        'Machine Learning',
        'Python',
        'TensorFlow',
        'APIs',
      ],
      achievements: [
        'Developed generative AI applications using ML models',
        'Integrated Google Cloud services for scalable solutions',
        'Implemented natural language processing features',
        'Gained expertise in cloud-based AI development',
      ],
      certificateLink:
        'https://drive.google.com/file/d/1EPIXhoaHUO3SrJ8_7xnl9zZQhStI9WPw/view?usp=sharing',
    },
    {
      company: 'Infosys Springboard (Internship 5.0 (Batch (B4) ))',
      role: 'Software Development Intern',
      period: 'February - April 2025',
      status: 'Completed',
      description:
        'Developed a comprehensive Grievance Handling System using Django framework and JavaScript. The system streamlines complaint management processes with role-based access control and automated workflow management.',
      technologies: ['Django', 'JavaScript', 'Python', 'HTML/CSS', 'SQLite'],
      achievements: [
        'Built multi-role access system (Admin, Employee, Customer)',
        'Implemented automated ticket tracking and resolution system',
        'Designed responsive UI with modern JavaScript frameworks',
        'Reduced complaint processing time by 40%',
      ],
      certificateLink:
        'https://drive.google.com/file/d/1ExrW38DAV7gz2KSYJo4eEWm2sofJI5HH/view?usp=drive_link',
    },
  ];

  return (
    <section id="work-experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono">
              My professional journey and hands-on experience in the tech
              industry
            </p>
          </div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 font-mono">
                      {exp.role}
                    </h3>
                    <p className="text-blue-400 font-semibold font-mono">
                      {exp.company}
                    </p>
                    {exp.status && (
                      <span className="text-sm text-green-400 font-mono">
                        {exp.status}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span className="font-mono">{exp.period}</span>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-4 font-mono">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-300 text-sm font-mono px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4 font-mono">
                  {exp.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                {/* Certificate Link */}
                <a
                  href={exp.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-mono"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
