"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Paintings() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const paintings = [
    { id: 1, title: "Flower Vomit", src: "/paintings/flower_vomit.jpg" },
    { id: 2, title: "Hot Red Nails", src: "/paintings/hot_red_nails.jpg" },
    { id: 3, title: "La cebolla", src: "/paintings/la_cebolla.jpg" },
    { id: 4, title: "Hot Summer Days", src: "/paintings/hot_summer_days.jpg" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-16 relative">
      <div className="container mx-auto px-6 lg:px-12 space-y-15">
        
        {/* Paintings Gallery */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 list-none">
          {paintings.map((painting, index) => (
            <li
              key={painting.id}
              className={`relative group ${index % 2 === 0 ? "mt-12" : "mb-8"}`}
            >
              {/* Painting Image */}
              <Image
                src={painting.src}
                alt={painting.title}
                width={500}
                height={500}
                className="w-full h-auto object-contain"
                onError={(e) => {
                  e.currentTarget.src = "/paintings/placeholder.jpg"; // Fallback image
                }}
              />
              {/* Painting Title */}
              <div className="mt-3 text-sm italic text-left text-gray-700">
                {painting.title}
              </div>
            </li>
          ))}
        </ul>
      </div>
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

