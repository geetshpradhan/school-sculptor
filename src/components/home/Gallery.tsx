
import React from 'react';
import AnimatedImage from '@/components/ui/AnimatedImage';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Annual Day",
    title: "Annual Day",
  },
  {
    src: "https://images.unsplash.com/photo-1576267423048-15c0040fec78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Sports Event",
    title: "Sports Event",
  },
  {
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    alt: "Science Fair",
    title: "Science Fair",
  },
  {
    src: "https://images.unsplash.com/photo-1660907566951-96b0716a1595?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Independence Day",
    title: "Independence Day",
  },
  {
    src: "https://images.unsplash.com/photo-1511883040705-6011fad9edfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    alt: "Cultural Event",
    title: "Cultural Event",
  },
  {
    src: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "School Trip",
    title: "School Trip",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 uppercase mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            Explore moments from our school events, activities, and celebrations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-shadow animate-on-scroll">
              <AnimatedImage
                src={image.src}
                alt={image.alt}
                className="aspect-[4/3] w-full rounded-xl"
                imgClassName="group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <h3 className="text-white font-bold text-xl p-6">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <button className="inline-flex items-center justify-center px-6 py-3 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 transition-smooth">
            View More Photos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
