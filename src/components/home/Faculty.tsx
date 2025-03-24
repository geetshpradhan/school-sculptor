
import React from 'react';
import RevealOnScroll from '../ui/RevealOnScroll';
import AnimatedImage from '../ui/AnimatedImage';

const faculty = [
  {
    id: 1,
    name: 'Dr. Emily Chen',
    title: 'Professor of Philosophy',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80',
    bio: 'Award-winning philosopher focusing on ethics and epistemology with over 15 years of teaching experience.',
  },
  {
    id: 2,
    name: 'Prof. Michael Reynolds',
    title: 'Dean of Engineering',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    bio: 'Pioneering researcher in sustainable engineering with industry experience at leading technology companies.',
  },
  {
    id: 3,
    name: 'Dr. Amara Williams',
    title: 'Chair of Business Studies',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    bio: 'Former CEO turned educator with expertise in organizational leadership and business strategy.',
  },
  {
    id: 4,
    name: 'Prof. James Wilson',
    title: 'Director of Arts Program',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    bio: 'Acclaimed artist and educator specializing in digital media and contemporary art practices.',
  }
];

const Faculty = () => {
  return (
    <section id="faculty" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Distinguished Faculty</h2>
        </RevealOnScroll>
        
        <RevealOnScroll delay={100}>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            Our faculty members are leaders in their fields, bringing real-world expertise
            and cutting-edge research into the classroom.
          </p>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, index) => (
            <RevealOnScroll key={member.id} delay={200 + (index * 100)}>
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden group">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <AnimatedImage
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full"
                    imgClassName="group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                    <div className="p-6 text-white">
                      <p className="font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.title}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
