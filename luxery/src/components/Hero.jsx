import React from 'react'

const Hero = () => {
  return (
   
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://www.pexels.com/download/video/17224730"  

          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find Your Dream Home
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mb-6 text-gray-200">
          Discover premium properties at the best locations with trusted real
          estate services.
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition">
            Explore Properties
          </button>

          <button className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}



export default Hero