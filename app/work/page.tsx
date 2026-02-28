"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { caseStudies } from "../data/work";

export default function WorkPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-32 pb-20">
        
        {/* HEADER YA KIOFISI - No font-light, Sharp line */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-20">
          <div className="max-w-4xl">
            <h1 className="text-sm font-bold tracking-widest text-primary uppercase mb-6">
              Our Work
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              Case Studies
            </h2>
            {/* Kistari sasa kina ncha kali (rounded-none) */}
            <div className="h-[3px] w-24 bg-primary mb-8 rounded-none"></div>
            <p className="text-xl text-gray-700 font-normal leading-relaxed max-w-2xl">
              Selected projects showcasing our expertise in research, data handling & management, and monitoring & evaluation across East Africa and beyond.
            </p>
          </div>
        </section>

        {/* GRID YA KADI - No Shadows, Sharp Corners */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {caseStudies.map((study) => (
              <div 
                key={study.id} 
                className="group flex flex-col bg-white border-2 border-primary/10 hover:border-primary/50 transition-all duration-500 cursor-pointer rounded-none"
              >
                {/* Cover Image */}
                <div className="w-full h-48 overflow-hidden relative bg-gray-100 border-b border-primary/10">
                  {study.image ? (
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : null}
                </div>
                
                {/* Content ya Ripoti */}
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4 block">
                    {study.date}
                  </span>
                  {/* Title ni Bold na Primary */}
                  <h4 className="text-xl font-bold text-primary mb-4 leading-snug line-clamp-3">
                    {study.title}
                  </h4>
                  {/* Description imekuwa text-base font-normal */}
                  <p className="text-gray-700 font-normal text-base leading-relaxed flex-grow line-clamp-3">
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