import React from 'react';
import { Building, Calendar, Award, TrendingUp } from 'lucide-react';

const Internships = () => {
  const internships = [
    {
      company: "Infosys Springboard",
      role: "Software Development Intern",
      period: "2025",
      status: "Current",
      description: "Developing a comprehensive Grievance Handling System using Django framework and JavaScript. The system streamlines complaint management processes with role-based access control and automated workflow management.",
      technologies: ["Django", "JavaScript", "Python", "HTML/CSS", "SQLite"],
      achievements: [
        "Built multi-role access system (Admin, Employee, Customer)",
        "Implemented automated ticket tracking and resolution system",
        "Designed responsive UI with modern JavaScript frameworks",
        "Reduced complaint processing time by 40%"
      ],
      color: "from-blue-600 to-indigo-700",
      logo: "I"
    },
    {
      company: "Google Cloud + Eduskills",
      role: "AI/ML Development Intern",
      period: "2024",
      status: "Completed",
      description: "Worked on cutting-edge Generative AI projects utilizing machine learning models and Google Cloud Platform services. Focused on developing intelligent applications with natural language processing capabilities.",
      technologies: ["Google Cloud Platform", "Machine Learning", "Python", "TensorFlow", "APIs"],
      achievements: [
        "Developed generative AI applications using ML models",
        "Integrated Google Cloud services for scalable solutions",
        "Implemented natural language processing features",
        "Gained expertise in cloud-based AI development"
      ],
      color: "from-green-600 to-emerald-700",
      logo: "G"
    }
  ];

  return (
    <section id="internships" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Hands-on industry experience building real-world solutions
            </p>
          </div>

          {/* Internships */}
          <div className="space-y-8">
            {internships.map((internship, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${internship.color} flex items-center justify-center text-white text-2xl font-bold`}>
                        {internship.logo}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{internship.company}</h3>
                        <p className="text-purple-400 font-semibold">{internship.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Calendar className="w-4 h-4" />
                        <span>{internship.period}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        internship.status === 'Current' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {internship.status}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {internship.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Key Achievements
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {internship.achievements.map((achievement, achievementIndex) => (
                        <div
                          key={achievementIndex}
                          className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                        >
                          <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;