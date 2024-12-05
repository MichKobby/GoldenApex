import React from 'react';
import { Linkedin, Award, BookOpen, Briefcase } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Isaac Mensah Nyame',
      title: 'Founder & Chief Executive Officer',
      image: 'https://raw.githubusercontent.com/MichKobby/Images-/233e4487b19ea588fde6d7f047571e1f7ad4910b/Nyame.png',
      bio: 'A seasoned technology leader with over a decade of expertise in financial technology consulting, Dr. Nyame holds a Doctor of Business Administration from Walden University. His extensive certifications including PMP, CSPO, AWS Developer, PSM-1, and CompTIA Security+ ce demonstrate his commitment to excellence. As founder and CEO of Golden Apex Advisory, he leverages his experience in technological enhancement and digital transformation to help organizations navigate the evolving business landscape.',
      linkedin: '#',
      achievements: [
        'Doctor of Business Administration',
        'PMP & CSPO Certified',
        'AWS Developer'
      ]
    },
    {
      name: 'Michael Kwabena Amoah',
      title: 'Co-Founder & Chief Operations Officer',
      image: 'https://raw.githubusercontent.com/MichKobby/Images-/67124855ec3ab2024a767ae1a8515b524df6c750/IMG_1410.jpeg',
      bio: 'With over ten years of specialized experience in Banking, Mortgage, and Insurance technologies, Michael Amoah combines legal expertise with deep financial services knowledge. A certified Project Management Professional (PMP), Scrum Product Owner (CSPO), and IBM AI Product Manager, he oversees Golden Apex Advisory\'s operational framework and service delivery. His unique blend of legal, technical, and practical experience in implementing complex financial systems ensures clients receive comprehensive, results-driven solutions.',
      linkedin: '#',
      achievements: [
        'PMP Certified',
        'CSPO Certified',
        'IBM AI Product Manager'
      ]
    },
  ];

  return (
    <div className="pt-16">
      <div className="relative py-24">
        <div 
          className="absolute inset-0 z-0 bg-gradient-to-r from-gray-900 to-gray-800"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">Leadership Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            Meet the visionaries driving innovation and excellence at Golden Apex Advisory
          </p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-96 object-cover object-center"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-[#D4AF37] font-medium">
                      {member.title}
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Award className="h-5 w-5 text-[#D4AF37] mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {member.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <BookOpen className="h-4 w-4 text-[#D4AF37] mr-2" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Briefcase className="h-5 w-5 text-[#D4AF37] mr-2" />
                      Professional Background
                    </h4>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center text-[#D4AF37] hover:text-[#B08F2D] transition-colors duration-200"
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;