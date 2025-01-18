export default function Contact() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact</h1>
      <form className="max-w-lg mx-auto space-y-6">
        <input type="text" placeholder="Your Name" className="w-full p-4 border rounded-lg" />
        <input type="email" placeholder="Your Email" className="w-full p-4 border rounded-lg" />
        <textarea placeholder="Your Message" className="w-full p-4 border rounded-lg h-32"></textarea>
        <button className="w-full py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Send</button>
      </form>
    </div>
  );
}
