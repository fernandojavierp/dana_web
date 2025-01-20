export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-16">
      <div className="container mx-auto px-6 lg:px-12 space-y-16">
        {/* Contact Section */}
        <section className="text-left">
          <h1 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-teal-400">
            
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-gray-500 max-w-4xl mx-auto text-left">
            For further information, please write to: <a href="mailto:danadiesen@gmail.com" className="text-blue-500 hover:underline">danadiesen@gmail.com</a>
          </p>
          <p className="mt-2 text-lg leading-relaxed text-gray-500 max-w-4xl mx-auto text-left">
            Or message me on Instagram: <a href="https://www.instagram.com/daanajey" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@daanajey</a>
          </p>
          <p className="mt-2 text-lg leading-relaxed text-gray-500 max-w-4xl mx-auto text-left">
            Have a nice day!
          </p>
        </section>
      </div>
    </div>
  );
}
