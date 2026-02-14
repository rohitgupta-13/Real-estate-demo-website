import React from "react";

const BuySellSection = () => {
  return (
    <section className="bg-[#08121C] py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Section 1: Buy - Linked to "Ready To Buy" */}
          {/* Added id="ready-to-buy" and scroll-mt to prevent navbar overlap */}
          <div id="ready-to-buy" className="relative group cursor-pointer scroll-mt-32">
            <div className="overflow-hidden relative h-[500px] md:h-[600px] w-full">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop" 
                alt="Luxury Interior" 
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-12">
                <span className="text-[#D4AF37] text-[10px] tracking-[.4em] uppercase font-bold mb-4 block">
                  The Acquisition
                </span>
                <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                  Find Your <br />
                  <span className="font-semibold italic">Dream Estate</span>
                </h2>
                <p className="text-white/70 text-sm max-w-sm mb-8 font-light leading-relaxed">
                  Gain exclusive access to off-market properties and premium residences 
                  tailored to your architectural preferences.
                </p>
                <button className="w-fit px-10 py-4 bg-white text-[#0B1C2D] text-[10px] tracking-[.3em] font-bold uppercase hover:bg-[#D4AF37] transition-colors duration-500">
                  Explore Listings
                </button>
              </div>
            </div>
          </div>

          {/* Section 2: Sell - Linked to "Ready To Sell" */}
          {/* Added id="ready-to-sell" and scroll-mt to prevent navbar overlap */}
          <div id="ready-to-sell" className="relative group cursor-pointer lg:mt-24 scroll-mt-32">
            <div className="overflow-hidden relative h-[500px] md:h-[600px] w-full border border-white/10 group-hover:border-[#D4AF37]/50 transition-colors duration-700">
              <div className="absolute inset-0 bg-[#0B1C2D]/80 group-hover:bg-[#0B1C2D]/60 transition-all duration-700 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop" 
                alt="Modern Architecture" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.5s]"
              />
              
              <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-8 md:p-12">
                <span className="text-[#D4AF37] text-[10px] tracking-[.4em] uppercase font-bold mb-4 block">
                  The Disposition
                </span>
                <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                  List Your <br />
                  <span className="font-semibold italic">Masterpiece</span>
                </h2>
                <p className="text-white/70 text-sm max-w-sm mb-8 font-light leading-relaxed">
                  Leverage our global network and bespoke marketing strategies to 
                  ensure your property reaches the right discerning audience.
                </p>
                <button className="group/btn flex items-center gap-4 text-[10px] tracking-[.3em] uppercase text-white font-bold">
                  Start Selling
                  <span className="h-[1px] w-12 bg-[#D4AF37] group-hover/btn:w-20 transition-all duration-500"></span>
                </button>
              </div>
            </div>
            
            <div className="absolute -bottom-12 -right-12 text-[120px] font-black text-white/5 pointer-events-none hidden lg:block select-none uppercase tracking-tighter">
              Legacy
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BuySellSection;