"use client";

import { useState, useEffect } from "react";
import Image from "next/image";


export default function Paintings() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const paintings = [
    { id: 1, title: "Flower Vomit", src: "/paintings/flower_vomit.png", slug: "flower_vomit" },
    { id: 2, title: "Hot Red Nails", src: "/paintings/hot_red_nails.png", slug: "hot_red_nails" },
    { id: 3, title: "La cebolla", src: "/paintings/la_cebolla.png", slug: "la_cebolla" },
    { id: 4, title: "Hot Summer Days", src: "/paintings/hot_summer_days.png", slug: "hot_summer_days" },
    { id: 5, title: "A little alien invasion never killed nobody", src: "/paintings/a_little_alien_invasion_never_killed_nobody.png", slug: "a_little_alien_invasion_never_killed_nobody" },
    { id: 6, title: "Be my Bumblebee", src: "/paintings/be_my_bumble_bee.png", slug: "be_my_bumble_bee" },
    { id: 7, title: "Do you like to have fun", src: "/paintings/do_you_like_to_have_fun.png", slug: "do_you_like_to_have_fun" },
    { id: 8, title: "Drowning garden", src: "/paintings/drowning_garden.png", slug: "drowning_garden" },
    { id: 9, title: "Exploding strawberry sponge cake with flies", src: "/paintings/exploding_strawberry_sponge_cake_with_flies.png", slug: "exploding_strawberry_sponge_cake_with_flies" },
    { id: 10, title: "Feliz dia de muertos!", src: "/paintings/feliz_dia_de_muertos_!.png", slug: "feliz_dia_de_muertos_!" },
    { id: 11, title: "Happy tomato salad", src: "/paintings/happy_tomato_salad.png", slug: "happy_tomato_salad" },
    { id: 12, title: "Paisaje 3", src: "/paintings/paisaje_3.png", slug: "paisaje_3" },
    { id: 13, title: "Peach fuzz", src: "/paintings/peach_fuzz.png", slug: "peach_fuzz" },
    { id: 14, title: "Somewhere in Albania", src: "/paintings/somewhere_in_albania.png", slug: "somewhere_in_albania" },
    { id: 15, title: "Tree of life", src: "/paintings/tree_of_life.png", slug: "tree_of_life" },
    { id: 16, title: "Where is the cat?", src: "/paintings/where_is_the_cat.jpeg", slug: "where_is_the_cat" },
    { id: 17, title: "Your favorite t-shirt", src: "/paintings/your_favorite_t-shirt.png", slug: "your_favorite_t_-_shirt" },
   
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
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-20 py-9 list-none">
          {paintings.map((painting, index) => (
            <li
              key={painting.id}
              className={`relative group ${index % 2 === 0 ? "mt-14" : "mb-8"}`}
            >
              {/* Painting Image */}
              
                <Image
                  src={painting.src}
                  alt={painting.title}
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain"
                  priority
                  quality={100}
                  onError={(e) => {
                    e.currentTarget.src = "/paintings/placeholder.jpg"; // Fallback image
                  }}
                />
              
              {/* Painting Title */}
              <div className="mt-3 text-sm italic text-left text-gray-600">
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
