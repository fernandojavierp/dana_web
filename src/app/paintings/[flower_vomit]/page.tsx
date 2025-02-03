"use client";

import Image from "next/image";
import Link from "next/link";

export default function FlowerVomitPage() {
  const painting = {
    title: "Flower Vomit",
    description: "A surreal exploration of nature and chaos, 'Flower Vomit' blends vibrant colors and abstract shapes to evoke both beauty and unease.",
    src: "/paintings/flower_vomit.png",
    dimensions: "120cm x 90cm",
    medium: "Oil on Canvas",
    year: 2023,
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-16">
      <div className="container mx-auto px-6 lg:px-12 space-y-12">
        {/* Title */}
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {painting.title}
        </h1>

        {/* Painting Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Section */}
          <div>
            <Image
              src={painting.src}
              alt={painting.title}
              width={600}
              height={800}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Information Section */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600">{painting.description}</p>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Dimensions:</strong> {painting.dimensions}
              </li>
              <li>
                <strong>Medium:</strong> {painting.medium}
              </li>
              <li>
                <strong>Year:</strong> {painting.year}
              </li>
            </ul>
            <Link
              href="/paintings"
              className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-500 transition duration-300"
            >
              Back to Paintings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
