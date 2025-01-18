"use client";

export default function Work() {
  const paintings = [
    { id: 1, title: "Flower Vomit", src: "/paintings/flower_vomit.jpg" },
    { id: 2, title: "Hot Red Nails", src: "/paintings/hot_red_nails.jpg" },
    { id: 3, title: "La cebolla", src: "/paintings/la_cebolla.jpg" },
    { id: 4, title: "Hot Summer Days", src: "/paintings/hot_summer_days.jpg" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 py-16">
      <div className="container mx-auto px-6 lg:px-12 space-y-16">
        {/* Title Section */}
        <h1 className="text-5xl font-extrabold text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-teal-400">
          Work
        </h1>

        {/* Paintings Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {paintings.map((painting) => (
            <div key={painting.id} className="relative group">
              {/* Painting Image */}
              <img
                src={painting.src}
                alt={painting.title}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "/paintings/placeholder.jpg"; // Fallback image
                }}
              />
              {/* Painting Title */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold italic opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {painting.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

