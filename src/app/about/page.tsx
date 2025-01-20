export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto px-6 lg:px-12 py-16 space-y-16">
        {/* About Me Section */}
        <section className="text-left">
          <h1 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-teal-400">
            
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-gray-600 max-w-4xl">
            Born in Germany, I found my home in Barcelona at the age of 18, where I later graduated from the University of Barcelona with a degree in Fine Arts. Since moving to Spain, I have undergone a transformative experience that has profoundly influenced both my life and art.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 max-w-4xl">
            As an artist from the north adapting to the vibrant colors and rich essence of the south, my work has evolved to become more vivid, expressive, and festive. My paintings live out a celebration of spring, letting the viewer associate different shapes, patterns, and colors with natural elements. 
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 max-w-4xl">
            Inspired by artists like <span className="font-semibold text-gray-800">Joan Mitchell</span> and <span className="font-semibold text-gray-800">Cecily Brown</span>, I blend abstraction and figuration to infuse my work with energy and movement. My artistic process is deeply physical, engaging with the canvas using my entire body to create spontaneous and expressive compositions.
          </p>
        </section>

        {/* Education Section */}
        <section className="text-left">
          <h1 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-green-500 to-purple-600">
            EDUCATION
          </h1>
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
      </div>
    </div>
  );
}

