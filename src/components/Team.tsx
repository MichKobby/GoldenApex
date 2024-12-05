import React from 'react';
import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Isaac Mensah Nyame',
    title: 'Founder & Chief Executive Officer',
    image:'https://raw.githubusercontent.com/MichKobby/Images-/233e4487b19ea588fde6d7f047571e1f7ad4910b/Nyame.png',
    bio: 'A seasoned technology leader with over a decade of expertise in financial technology consulting, Dr. Nyame holds a Doctor of Business Administration from Walden University. His extensive certifications including PMP, CSPO, AWS Developer, PSM-1, and CompTIA Security+ ce demonstrate his commitment to excellence.As founder and CEO of Golden Apex Advisory, he leverages his experience in technological enhancement and digital transformation to help organizations navigate the evolving business landscape.',
    linkedin: '#',
  },
  {
    name: 'Michael Kwabena Amoah',
    title: 'Co-Founder & Chief Operations Officer',
    image: 'https://raw.githubusercontent.com/MichKobby/Images-/67124855ec3ab2024a767ae1a8515b524df6c750/IMG_1410.jpeg',
    bio: 'With over ten years of specialized experience in Banking, Mortgage, and Insurance technologies, Michael Amoah combines legal expertise with deep financial services knowledge. A certified Project Management Professional (PMP), Scrum Product Owner (CSPO), and IBM AI Product Manager, he oversees Golden Apex Advisorys operational framework and service delivery. His unique blend of legal, technical, and practical experience in implementing complex financial systems ensures clients receive comprehensive, results-driven solutions.',
    linkedin: '#',
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Meet the Experts Behind Golden Apex Advisory
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our leadership team brings decades of combined experience in
            technology, finance, and business strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-[#D4AF37] font-semibold mb-4">
                  {member.title}
                </p>
                <p className="text-gray-600 mb-6">{member.bio}</p>
                <a
                  href={member.linkedin}
                  className="inline-flex items-center text-gray-600 hover:text-[#D4AF37]"
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
  );
};

export default Team;
