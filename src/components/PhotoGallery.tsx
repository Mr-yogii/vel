import React from 'react';

const PHOTOS = [
  {
  url: "/vel1.jpg",
    caption: "cute smile"
  },
  {
    url: "/vel5.jpg",
    caption: "memorables."
  },
  {
    url: "/vel3.jpg",
    caption: "teenage look"
  },
  {
    url: "/vel4.jpg",
    caption: "comination of beauty"
  }
];

export const PhotoGallery: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {PHOTOS.map((photo, index) => (
        <div
          key={index}
          className="group relative transform hover:scale-105 transition-transform duration-300 animate-on-scroll"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="relative overflow-hidden rounded-lg shadow-xl aspect-[4/3]">
            <img
              src={photo.url}
              alt={photo.caption}
              className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <p className="absolute bottom-4 left-4 text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {photo.caption}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}