import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    document.title = "Andrew Smith | Software Developer";
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Andrew Smith</h1>
        <p className="text-lg md:text-2xl mb-6">Software Developer</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/ajsmith421"
            target="_blank"
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition"
          >
            GitHub
          </a>
          <a
            href="mailto:fullstackdevandrew@gmail.com"
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}