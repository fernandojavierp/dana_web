import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6 lg:px-12 py-16 space-y-16">
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          {/* About Me Section */}
          <section className="text-left flex-1">
            <p className="mt-8 text-lg leading-relaxed text-gray-600 max-w-4xl">
              Born in Germany, I found my home in Barcelona at the age of 18, where I later graduated from the University of Barcelona with a degree in Fine Arts. Since moving to Spain, I have undergone a transformative experience that has profoundly influenced both my life and art.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 max-w-4xl">
              As an artist from the north adapting to the vibrant colors and rich essence of the south, my work has evolved to become more vivid, expressive, and festive. My paintings live out a celebration of spring, letting the viewer associate different shapes, patterns, and colors with natural elements. 
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 max-w-4xl">
              Inspired by artists like <span className="font-semibold text-gray-800">Joan Mitchell</span> and <span className="font-semibold text-gray-800">Cecily Brown</span>, I blend abstraction and figuration to infuse my work with energy and movement. My artistic process is deeply physical, engaging with the canvas using my entire body to create spontaneous and expressive compositions.
            </p>
            <p className="mt-8 text-lg text-gray-600">
            <span className="block font-semibold text-gray-800">
              University of Barcelona, Barcelona, Spain
            </span>
            Bachelor of Fine Arts
          </p>
          <p className="text-sm mt-2 text-gray-500">
            September 2019 – June 2023
          </p>
          </section>

          {/* Image Section */}
          <div className="flex-1 flex items-center justify-center mt-0 lg:mt-0 p-0">
            <Image
              src="/about_me_image.jpg"
              alt="About Me"
              width={700}
              height={800}
              className="w-full h-full object-cover shadow-lg transform scale-60 lg:scale-60 m-0 p-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

