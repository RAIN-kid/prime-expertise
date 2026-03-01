"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-32 pb-20">
        
        {/* HEADER YA KIOFISI */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-20">
          <div className="max-w-4xl">
            <h1 className="text-sm font-semibold tracking-widest text-primary uppercase mb-6">
              Our Services
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-10">
              High-quality research, data handling & management, and M&E to support development initiatives.
            </h2>
            <div className="h-[1px] w-24 bg-primary mb-8"></div>
            <p className="text-xl text-gray-500 font-light leading-relaxed max-w-3xl">
              Across Tanzania, East Africa, and beyond.
            </p>
          </div>
        </section>

        {/* INTRO: HOW WE SUPPORT YOUR INITIATIVES */}
        <section className="bg-gray-50 py-24 border-y border-gray-100 mb-24">
          <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
            <h3 className="text-2xl md:text-4xl font-light text-gray-900 mb-6">
              How we support your initiatives
            </h3>
            <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
              Our team has extensive experience in development contexts. We deliver evidence-based solutions tailored to your needs.
            </p>
          </div>
        </section>

        {/* THE SERVICES (Layout ya Kupishana / Alternating) */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-32 space-y-24">
          
          {/* SERVICE 1: RESEARCH (Picha Kushoto, Maelezo Kulia) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200 group hover:border-gray-400 transition-colors duration-500">
            {/* Picha Kushoto */}
            <div className="w-full h-80 lg:h-96 overflow-hidden bg-gray-100 border-b lg:border-b-0 lg:border-r border-gray-200">
              <img 
                src="https://primexpert.vercel.app/services/3-1024x884.jpg" 
                alt="Research Services" 
                className="w-full h-full object-cover group-hover:scale-105"
              />
            </div>
            {/* Maelezo Kulia */}
            <div className="p-10 md:p-16 flex flex-col justify-center bg-white">
              <span className="text-xs font-semibold tracking-widest text-primary/80 uppercase mb-4 block">01</span>
              <h3 className="text-3xl font-light text-primary mb-6">Research</h3>
              <div className="h-[1px] w-16 bg-primary/30 mb-6"></div>
              <p className="text-gray-600 font-light text-lg leading-relaxed">
                Our research services include designing and implementing both qualitative and quantitative studies, collecting and analysing data, and producing reports and publications that provide valuable insights and inform the design and implementation of development initiatives.
              </p>
            </div>
          </div>

          {/* SERVICE 2: DATA HANDLING (Maelezo Kushoto, Picha Kulia - Zimepishana) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200 group hover:border-gray-400 transition-colors duration-500 flex-col-reverse lg:flex-row">
            {/* Maelezo Kushoto */}
            <div className="p-10 md:p-16 flex flex-col justify-center bg-white border-b lg:border-b-0 lg:border-r border-gray-200 order-2 lg:order-1">
              <span className="text-xs font-semibold tracking-widest text-primary/80 uppercase mb-4 block">02</span>
              <h3 className="text-3xl font-light text-primary mb-6">Data Handling & Management</h3>
              <div className="h-[1px] w-16 bg-primary/30 mb-6"></div>
              <p className="text-gray-600 font-light text-lg leading-relaxed">
                We also offer a range of expert data handling and management services, including the design and implementation of data collection systems, the establishment of robust data management processes, and the analysis and interpretation of data to inform program design and decision-making.
              </p>
            </div>
            {/* Picha Kulia */}
            <div className="w-full h-80 lg:h-96 overflow-hidden bg-gray-100 order-1 lg:order-2">
              <img 
                src="https://primexpert.vercel.app/services/2-1-scaled.jpg" 
                alt="Data Handling & Management" 
                className="w-full h-full object-covern-all group-hover:scale-105"
              />
            </div>
          </div>

          {/* SERVICE 3: M & E (Picha Kushoto, Maelezo Kulia) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200 group hover:border-gray-400 transition-colors duration-500">
            {/* Picha Kushoto */}
            <div className="w-full h-80 lg:h-96 overflow-hidden bg-gray-100 border-b lg:border-b-0 lg:border-r border-gray-200">
              <img 
                src="https://primexpert.vercel.app/services/6-664x1024.jpg" 
                alt="Monitoring & Evaluation" 
                className="w-full h-full object-cover group-hover:scale-105"
              />
            </div>
            {/* Maelezo Kulia */}
            <div className="p-10 md:p-16 flex flex-col justify-center bg-white">
              <span className="text-xs font-semibold tracking-widest text-primary/80 uppercase mb-4 block">03</span>
              <h3 className="text-3xl font-light text-primary mb-6">Monitoring & Evaluation</h3>
              <div className="h-[1px] w-16 bg-primary/30 mb-6"></div>
              <p className="text-gray-600 font-light text-lg leading-relaxed">
                In addition to our research and data services, we also provide comprehensive monitoring and evaluation services to help organizations track the progress and impact of their development initiatives, identify areas for improvement, and make informed decisions based on evidence.
              </p>
            </div>
          </div>

        </section>

        {/* CALL TO ACTION (Ready to get started?) */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-10 text-center">
          <div className="bg-gray-50 border border-gray-200 py-20 px-6">
            <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">Ready to get started?</h2>
            <p className="text-xl text-gray-500 font-light mb-10 max-w-2xl mx-auto">
              Let's discuss how we can support your development initiatives with research, data, and M&E.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="/news" className="border border-gray-900 bg-primary text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-gray-900 transition-colors duration-300">
                View our work
              </a>
              <a href="/contact" className="border border-gray-300 bg-white text-primary px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:border-gray-900 transition-colors duration-300">
                Contact Us
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}