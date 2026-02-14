import React from "react";

const locations = [
  {
    id: 1,
    city: "Delhi",
    regions: "Lutyens, Chanakyapuri, South Ex",
    properties: "24 Properties",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    city: "Mumbai",
    regions: "Worli, Malabar Hill, Bandra",
    properties: "18 Properties",
    image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    city: "Bangalore",
    regions: "Indiranagar, Koramangala, Whitefield",
    properties: "32 Properties",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=2127&auto=format&fit=crop",
  },
  {
    id: 4,
    city: "Goa",
    regions: "Assagao, Anjuna, Candolim",
    properties: "12 Properties",
    image: "https://images.unsplash.com/photo-1512356181113-853a150f1aa7?q=80&w=2070&auto=format&fit=crop",
  },
];

const LocationSection = () => {
  return (
    <section className="py-24 bg-[#08121C] text-white" id="locations">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="text-[#D4AF37] text-[10px] tracking-[.5em] uppercase font-bold mb-4 block">
            Strategic Presence
          </span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-6">
            Prime <span className="font-semibold italic text-[#D4AF37]">Destinations</span>
          </h2>
          <div className="w-16 h-[1px] bg-white/20 mx-auto"></div>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {locations.map((loc) => (
            <div 
              key={loc.id} 
              className="group relative h-[500px] overflow-hidden cursor-pointer border border-white/5"
            >
              {/* Image with Dark Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={loc.image} 
                  alt={loc.city} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] via-[#0B1C2D]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>

              {/* Content Box */}
              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                <p className="text-[#D4AF37] text-[10px] tracking-[.3em] font-bold uppercase mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {loc.properties}
                </p>
                <h3 className="text-3xl font-light tracking-tight mb-2 uppercase group-hover:text-[#D4AF37] transition-colors">
                  {loc.city}
                </h3>
                
                {/* Expandable Info on Hover */}
                <div className="max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-700 ease-in-out">
                  <p className="text-white/50 text-[11px] leading-relaxed tracking-wider border-t border-white/10 pt-4 mt-2">
                    {loc.regions}
                  </p>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-[#D4AF37]/20 group-hover:border-r-[#D4AF37] transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom Footer for Section */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-10 gap-6">
          <p className="text-white/40 text-sm font-light italic">
            Expanding our footprint across the subcontinent's most coveted zip codes.
          </p>
          <button className="px-12 py-4 border border-white/10 text-[10px] tracking-[.3em] uppercase font-bold hover:bg-white hover:text-[#0B1C2D] transition-all duration-500">
            View Map View
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;