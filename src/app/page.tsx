import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center">
      <Image 
        src="/header_dana.png" 
        alt="Header Image" 
        layout="fill" 
        objectFit="cover" 
      />
    </div>
  );
}



