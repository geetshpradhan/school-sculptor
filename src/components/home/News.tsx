
import React from 'react';
import RevealOnScroll from '../ui/RevealOnScroll';
import AnimatedImage from '../ui/AnimatedImage';

const newsItems = [
  {
    id: 1,
    title: 'New Research Center Opens This Fall',
    excerpt: 'State-of-the-art facility will advance interdisciplinary research in AI and human health.',
    date: 'August 15, 2023',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 2,
    title: 'Students Win International Design Competition',
    excerpt: 'A team of engineering and design students takes top prize for sustainable urban planning project.',
    date: 'July 22, 2023',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 3,
    title: 'Alumni Spotlight: Leading Innovation in Healthcare',
    excerpt: 'Graduate builds startup transforming patient care through advanced data analytics.',
    date: 'June 10, 2023',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
];

const News = () => {
  return (
    <section id="news" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Latest News</h2>
        </RevealOnScroll>
        
        <RevealOnScroll delay={100}>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            Stay updated with the latest happenings, achievements, and innovations 
            from our vibrant academic community.
          </p>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <RevealOnScroll key={item.id} delay={200 + (index * 100)}>
              <article className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <AnimatedImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full"
                    imgClassName="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  
                  <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                  
                  <a 
                    href="#" 
                    className="inline-flex items-center text-primary font-medium group-hover:underline"
                    aria-label={`Read more about ${item.title}`}
                  >
                    Read More
                    <svg 
                      className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
        
        <RevealOnScroll delay={500}>
          <div className="text-center mt-12">
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 font-medium rounded-lg hover:bg-gray-50 transition-smooth"
            >
              View All News
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default News;
