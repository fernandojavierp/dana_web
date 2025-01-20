import Image from "next/image";

export default function Expositions() {
  const expositions = [
    { id: 1, title: "BF4 Gallery, Gallery, Barcelona – Group exhibition", date: "December 20th-23rd 2024" },
    { id: 2, title: "Leonardo Collective, Matiz Gallery, Barcelona – Group exhibition", date: "November 22nd-23rd 2024" },
    { id: 3, title: "BF4 Gallery, Gallery, Barcelona – Live painting performance", date: "October 24th 2024" },
    { id: 4, title: "The folio club, Poblenou OPEN NIGHT, Barcelona – Group exhibition", date: "November 24th – December 12th 2023" },
    { id: 5, title: "Sense Títol, University of Barcelona, Barcelona – Group exhibition", date: "September 29th – October 6th 2023" },
    { id: 6, title: "NauART, Gallery, Barcelona – Group exhibition", date: "June 16th – 23rd 2023" },
    { id: 7, title: "WAC Poblenou urban district, Barcelona – Art competition", date: "May 6th 2023" },
    { id: 8, title: "Art Number 23, Gallery, Barcelona – Group exhibition", date: "August 26th – September 2nd 2022" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-14">
      <div className="container mx-auto px-6 lg:px-12 space-y-18">
      
        {/* Expositions List */}
        <ul className="space-y-4 pt-8">
          {expositions.map((expo) => (
            <li key={expo.id} className="pb-1">
              <h2 className="text-lg-1 font-semibold text-gray-800 mb-1">
                {expo.title}
              </h2>
              <p className="text-sm text-base-1 text-gray-600">
                <span className="font-medium"></span> {expo.date}
              </p>
            </li>
          ))}
        </ul>

        {/* Image Section */}
        <div className="flex items-center justify-center py-10">
          <Image
            src="/expositions_image.jpg"
            alt="Expositions"
            width={600}
            height={800}
            className="w-full h-auto max-w-xs md:max-w-lg lg:max-w-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
