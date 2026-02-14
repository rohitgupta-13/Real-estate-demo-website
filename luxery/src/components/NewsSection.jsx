import React from "react";

const newsArticles = [
  {
    id: 1,
    date: "Oct 24, 2025",
    category: "Architecture",
    title: "The Rise of Sustainable Luxury in Modern Villas",
    description: "Discover how eco-conscious design is redefining the high-end real estate market in 2026.",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650",
  },
  {
    id: 2,
    date: "Nov 12, 2025",
    category: "Market Report",
    title: "Mumbai's Skyward Growth: A Real Estate Overview",
    description: "An in-depth analysis of the luxury apartment surge in the heart of India's financial capital.",
    image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1",
  },
  {
    id: 3,
    date: "Dec 05, 2025",
    category: "Interior",
    title: "Minimalist Aesthetics: Less is More in Penthouse Design",
    description: "How Dikota is implementing neutral palettes to create timeless residential spaces.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
  },
];

const NewsSection = () => {
  return (
    <section className="py-24 bg-[#0B1C2D] text-white" id="news">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#D4AF37] text-[10px] tracking-[.4em] uppercase font-bold mb-4 block">
              Journal & Insights
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
              Latest <span className="font-semibold italic">News</span>
            </h2>
          </div>
          <a href="/news" className="group flex items-center gap-4 text-[10px] tracking-[.3em] uppercase text-white/60 hover:text-[#D4AF37] transition-all">
            View All Articles
            <span className="h-[1px] w-8 bg-[#D4AF37] group-hover:w-16 transition-all duration-500"></span>
          </a>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {newsArticles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              {/* Image with Luxury Border Effect */}
              <div className="relative overflow-hidden mb-8">
                <div className="absolute inset-0 border border-white/10 z-10 pointer-events-none group-hover:border-[#D4AF37]/40 transition-colors duration-500"></div>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute bottom-0 left-0 bg-[#0B1C2D] p-4 pr-8 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <p className="text-[#D4AF37] text-[9px] tracking-[.2em] font-bold uppercase">
                    {article.category}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <p className="text-white/40 text-[10px] tracking-widest uppercase">
                  {article.date}
                </p>
                <h3 className="text-2xl font-light leading-snug group-hover:text-[#D4AF37] transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed font-light line-clamp-2">
                  {article.description}
                </p>
                
                <div className="pt-4 overflow-hidden">
                   <button className="text-[10px] tracking-[.3em] uppercase font-bold text-white relative flex items-center gap-2 group/btn">
                     Read Article
                     <span className="h-[1px] w-0 bg-[#D4AF37] transition-all duration-500 group-hover/btn:w-12"></span>
                   </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;