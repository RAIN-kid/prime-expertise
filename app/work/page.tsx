"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { caseStudies } from "../data/work";

export default function WorkPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-32 pb-20">
        
        {/* HEADER YA KIOFISI */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-20">
          <div className="max-w-4xl">
            <h1 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-6">
              Our Work
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-8">
              Case Studies
            </h2>
            <div className="h-[1px] w-24 bg-gray-900 mb-8"></div>
            <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl">
              Selected projects showcasing our expertise in research, data handling & management, and monitoring & evaluation across East Africa and beyond.
            </p>
          </div>
        </section>

        {/* GRID YA KADI */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {caseStudies.map((study) => (
              <div 
                key={study.id} 
                className="group flex flex-col bg-white border border-gray-200 hover:border-gray-400 transition-colors duration-500 cursor-pointer"
              >
                {/* Cover Image (Inachora picha KAMA TU ipo kwenye database) */}
                <div className="w-full h-48 overflow-hidden relative bg-gray-100 border-b border-gray-100">
                  {study.image ? (
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                  ) : null}
                </div>
                
                {/* Content ya Ripoti */}
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4 block">
                    {study.date}
                  </span>
                  <h4 className="text-lg font-medium text-gray-900 mb-4 leading-snug line-clamp-3">
                    {study.title}
                  </h4>
                  <p className="text-gray-600 font-light text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                    {study.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}