import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/header_dana.png')", backgroundColor: "#ffffff" }}
    >
      <Link href="/work">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-green-500 animate-gradient hover:scale-125 hover:blur-sm hover:brightness-150 transition-all duration-500"
          style={{
            backgroundSize: "200% 200%",
          }}
        >
          Dana Diesendorf
        </h1>
      </Link>
    </div>
  );
}


