import React from "react";

const properties = [
  {
    id: 1,
    title: "Luxury Villa",
    location: "Delhi",
    price: "₹1.2 Cr",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "Mumbai",
    price: "₹85 Lakh",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Family House",
    location: "Bangalore",
    price: "₹65 Lakh",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Beach Side Home",
    location: "Goa",
    price: "₹2 Cr",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1973&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Studio Flat",
    location: "Pune",
    price: "₹45 Lakh",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Penthouse",
    location: "Gurgaon",
    price: "₹1.8 Cr",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
  },
];

export default function PropertiesSection() {
  return (
    <section className="py-24 bg-[#0B1C2D]" id="properties">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16">
          <span className="text-[#D4AF37] text-[10px] tracking-[.4em] uppercase font-bold mb-4 block">
            The Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
            Featured <span className="font-semibold italic">Properties</span>
          </h2>
          <div className="w-20 h-[1px] bg-[#D4AF37]"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((item) => (
            <div
              key={item.id}
              className="group bg-transparent overflow-hidden transition-all duration-500"
            >
              {/* Image Container with Luxury Overlay */}
              <div className="relative overflow-hidden border border-white/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/800x600?text=Image+Not+Available"; }}
                />
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-[#0B1C2D]/80 backdrop-blur-md text-[#D4AF37] text-[9px] font-bold px-3 py-1 tracking-widest border border-[#D4AF37]/20 uppercase">
                    Premium
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="py-6 px-1">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-xl font-light text-white tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-lg font-semibold text-white">
                    {item.price}
                  </p>
                </div>

                <div className="flex items-center gap-2 mb-8 text-white/40 text-[10px] uppercase tracking-[.2em]">
                  <span className="text-[#D4AF37]">📍</span>
                  {item.location}
                </div>

                <button className="relative w-full py-4 group/btn overflow-hidden border border-white/20 text-white text-[10px] uppercase tracking-[.3em] font-bold transition-all duration-500 hover:border-[#D4AF37]">
                  <span className="relative z-10 group-hover/btn:text-[#0B1C2D] transition-colors duration-500">View Details</span>
                  <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}