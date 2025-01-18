import Link from "next/link";
import Image from "next/image";

export default function Expositions() {
  const expositions = [
    { id: 1, title: "Exposition 1", date: "2023-01-01", location: "Gallery A" },
    { id: 2, title: "Exposition 2", date: "2023-02-01", location: "Gallery B" },
    { id: 3, title: "Exposition 3", date: "2023-03-01", location: "Gallery C" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-16">
      <div className="container mx-auto px-6 lg:px-12 space-y-16">
        {/* Title Section */}
        <h1 className="text-5xl font-extrabold text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-teal-400">
          Expositions
        </h1>

        {/* Expositions List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expositions.map((expo) => (
            <div
              key={expo.id}
              className="p-6 bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500 mb-2">
                {expo.title}
              </h2>
              <p className="text-lg text-gray-600 mb-1">
                <span className="font-medium">Date:</span> {expo.date}
              </p>
              <p className="text-lg text-gray-600">
                <span className="font-medium">Location:</span> {expo.location}
              </p>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center">
          <Image
            src="/expositions_image.jpg"
            alt="Expositions"
            width={600}
            height={800}
            className="w-full h-auto max-w-xs md:max-w-lg lg:max-w-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}
