import React from "react";

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-[#08121C] py-24 px-6 md:px-16 flex items-center" id="contact">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Editorial Contact Info */}
          <div className="space-y-12">
            <div>
              <span className="text-[#D4AF37] text-[10px] tracking-[.5em] uppercase font-bold mb-4 block">
                Get In Touch
              </span>
              <h2 className="text-5xl md:text-7xl font-light text-white leading-tight tracking-tighter">
                Begin Your <br />
                <span className="font-semibold italic text-[#D4AF37]">Journey</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="group cursor-pointer">
                <p className="text-white/30 text-[10px] tracking-widest uppercase mb-2">Office Headquarters</p>
                <p className="text-xl text-white/80 font-light group-hover:text-white transition-colors">
                  Level 12, DLF Cyber City, <br /> Gurgaon, HR 122002
                </p>
              </div>

              <div className="group cursor-pointer">
                <p className="text-white/30 text-[10px] tracking-widest uppercase mb-2">Private Inquiries</p>
                <p className="text-xl text-white/80 font-light group-hover:text-[#D4AF37] transition-colors">
                  concierge@dikota.com
                </p>
              </div>

              <div className="group cursor-pointer">
                <p className="text-white/30 text-[10px] tracking-widest uppercase mb-2">Call Directly</p>
                <p className="text-xl text-white/80 font-light group-hover:text-white transition-colors">
                  +91 124 555 0123
                </p>
              </div>
            </div>

            {/* Social Links with Thin Lines */}
            <div className="flex gap-8 pt-8 border-t border-white/10">
              {['Instagram', 'LinkedIn', 'WhatsApp'].map((social) => (
                <a key={social} href="#" className="text-[10px] tracking-[.3em] uppercase font-bold text-white/40 hover:text-[#D4AF37] transition-all">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Modern Minimalist Form */}
          <div className="bg-[#0B1C2D] p-8 md:p-12 border border-white/5 relative shadow-2xl">
            {/* Subtle Gold Corner Accent */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#D4AF37]/30"></div>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative border-b border-white/10 py-2 focus-within:border-[#D4AF37] transition-colors">
                  <label className="text-[9px] uppercase tracking-widest text-white/30 block mb-1">Full Name</label>
                  <input type="text" className="bg-transparent w-full text-white outline-none font-light" placeholder="John Doe" />
                </div>
                <div className="relative border-b border-white/10 py-2 focus-within:border-[#D4AF37] transition-colors">
                  <label className="text-[9px] uppercase tracking-widest text-white/30 block mb-1">Email Address</label>
                  <input type="email" className="bg-transparent w-full text-white outline-none font-light" placeholder="john@example.com" />
                </div>
              </div>

              <div className="relative border-b border-white/10 py-2 focus-within:border-[#D4AF37] transition-colors">
                <label className="text-[9px] uppercase tracking-widest text-white/30 block mb-1">Interested In</label>
                <select className="bg-transparent w-full text-white outline-none font-light appearance-none">
                  <option className="bg-[#0B1C2D]">Buying a Property</option>
                  <option className="bg-[#0B1C2D]">Selling a Property</option>
                  <option className="bg-[#0B1C2D]">Investment Inquiry</option>
                </select>
              </div>

              <div className="relative border-b border-white/10 py-2 focus-within:border-[#D4AF37] transition-colors">
                <label className="text-[9px] uppercase tracking-widest text-white/30 block mb-1">Message</label>
                <textarea rows="4" className="bg-transparent w-full text-white outline-none font-light resize-none" placeholder="Tell us about your requirements..."></textarea>
              </div>

              <button className="w-full py-5 bg-[#D4AF37] text-[#0B1C2D] text-[11px] tracking-[.4em] font-black uppercase hover:bg-white hover:text-[#0B1C2D] transition-all duration-500 shadow-xl">
                Send Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactPage;