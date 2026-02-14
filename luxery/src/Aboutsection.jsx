import React from "react";

const AboutSection = () => {
  return (
    <section className="py-24 bg-[#0B1C2D] text-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Image Composition */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative z-10 overflow-hidden border border-white/10 w-full">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                alt="Luxury Architectural Detail" 
                className="w-full h-[500px] md:h-[600px] object-cover filter grayscale transition-all duration-1000 hover:grayscale-0 scale-100 hover:scale-105"
                loading="lazy"
              />
            </div>
            
            {/* Floating Gold Card - Adjusted positioning for reliability */}
            <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:right-10 z-30 bg-[#D4AF37] p-6 md:p-12 shadow-[20px_20px_60px_rgba(0,0,0,0.5)]">
              <p className="text-[#0B1C2D] text-4xl md:text-5xl font-bold mb-2 tracking-tighter">15+</p>
              <p className="text-[#0B1C2D] text-[10px] tracking-[.3em] font-black uppercase whitespace-nowrap">
                Years of Excellence
              </p>
            </div>

            {/* Decorative Background Frame */}
            <div className="absolute -top-6 -left-6 w-64 h-64 border border-[#D4AF37]/30 z-0 hidden md:block"></div>
          </div>

          {/* Right Side: Narrative Content */}
          <div className="w-full lg:w-1/2 space-y-8 lg:pl-8">
            <div className="space-y-4">
              <span className="text-[#D4AF37] text-[10px] tracking-[.4em] uppercase font-bold block">
                The Dikota Philosophy
              </span>
              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                Crafting Spaces for <br />
                <span className="font-semibold italic">Discerning Lifestyles</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-white/70 text-lg font-light leading-relaxed">
                Dikota is not merely a real estate firm; we are curators of 
                architectural masterpieces. We believe that a home is an 
                extension of one's identity—a sanctuary where luxury meets legacy.
              </p>
              <p className="text-white/40 text-sm leading-relaxed max-w-md italic border-l border-[#D4AF37]/50 pl-4">
                "We don't just sell square footage; we broker the backdrop to your life's most significant moments."
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/10">
              <div className="group">
                <p className="text-2xl font-semibold mb-1 tracking-tight group-hover:text-[#D4AF37] transition-colors">₹4500 Cr+</p>
                <p className="text-white/40 text-[9px] tracking-widest uppercase font-bold">Asset Value Managed</p>
              </div>
              <div className="group">
                <p className="text-2xl font-semibold mb-1 tracking-tight group-hover:text-[#D4AF37] transition-colors">120+</p>
                <p className="text-white/40 text-[9px] tracking-widest uppercase font-bold">Luxury Projects</p>
              </div>
            </div>

            {/* Signature CTA */}
            <button className="pt-4 group flex items-center gap-6 bg-transparent border-none">
              <div className="h-[1px] w-12 bg-[#D4AF37] group-hover:w-20 transition-all duration-500"></div>
              <span className="text-[11px] tracking-[.3em] uppercase font-bold text-white group-hover:text-[#D4AF37] transition-all">
                Discover Our Heritage
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;