import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      <Image 
        src="/home_dana_bg.jpg" 
        alt="Header Image" 
        layout="fill" 
        objectFit="cover" 
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}



