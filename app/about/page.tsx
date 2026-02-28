"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-32 pb-20">
        
        {/* HEADER & INTRODUCTION */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-24">
          <div className="max-w-4xl mb-16">
            <h1 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-6">
              Who We Are
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-10">
              A world-class, multi-disciplinary Tanzanian consulting firm dedicated to supporting development initiatives.
            </h2>
            <div className="h-[1px] w-24 bg-gray-900"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="text-gray-600 font-light text-lg leading-relaxed space-y-6">
              <p>
                Prime Expertise Limited is a world-class, multi-disciplinary, local Tanzanian international development consulting firm dedicated to supporting the missions of international development agencies through high-quality research, data handling and management, and monitoring and evaluation services in support of socioeconomic development initiatives in Tanzania, East Africa, and beyond.
              </p>
              <p>
                The firm has a network of experienced professionals with a deep understanding of the complexities of development initiatives and is dedicated to delivering customized solutions that meet the unique needs of our clients.
              </p>
            </div>
            {/* Placeholder Picha ya Kiofisi (Grayscale) */}
            <div className="w-full h-80 bg-gray-100 border border-gray-200 overflow-hidden">
               <img 
                  src="/images/post9.webp" 
                  alt="Prime Expertise Professionals" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200">
            {/* Vision */}
            <div className="p-10 md:p-16 border-b md:border-b-0 md:border-r border-gray-200 bg-white hover:bg-gray-50 transition-colors duration-500">
              <h3 className="text-sm font-semibold tracking-widest text-gray-900 uppercase mb-6 flex items-center">
                <span className="w-2 h-2 bg-gray-900 mr-4"></span>
                Our Vision
              </h3>
              <p className="text-gray-600 font-light text-lg leading-relaxed">
                To be the leading provider of research, data handling and management, and monitoring and evaluation services in support of socio-economic development initiatives in Tanzania, East Africa, and beyond.
              </p>
            </div>
            {/* Mission */}
            <div className="p-10 md:p-16 bg-white hover:bg-gray-50 transition-colors duration-500">
              <h3 className="text-sm font-semibold tracking-widest text-gray-900 uppercase mb-6 flex items-center">
                <span className="w-2 h-2 bg-gray-900 mr-4"></span>
                Our Mission
              </h3>
              <p className="text-gray-600 font-light text-lg leading-relaxed">
                To provide high-quality, cost-effective, and evidence-based solutions that empower organizations to effectively design, implement, and evaluate their development initiatives in Tanzania, East Africa, and beyond. We strive to be a trusted partner and advisor to our clients, delivering personalized, tailored services that drive impact and support sustainable development.
              </p>
            </div>
          </div>
        </section>

        {/* CORE VALUES - Design ya Bei Mbaya yenye Namba */}
        <section className="bg-gray-50 py-24 border-y border-gray-100 mb-24">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="text-center mb-20">
              <h2 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">
                What We Stand For
              </h2>
              <h3 className="text-3xl md:text-5xl font-light text-gray-900">
                Our Core Values
              </h3>
              <p className="text-gray-500 font-light mt-4">The principles that guide everything we do</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {/* Value 1 */}
              <div className="relative">
                <span className="absolute -top-10 -left-4 text-8xl font-bold text-gray-200/50 -z-10">1</span>
                <h4 className="text-xl font-medium text-gray-900 mb-4">Integrity</h4>
                <p className="text-gray-600 font-light leading-relaxed">We are committed to upholding the highest ethical standards in all aspects of our work and interactions.</p>
              </div>
              {/* Value 2 */}
              <div className="relative">
                <span className="absolute -top-10 -left-4 text-8xl font-bold text-gray-200/50 -z-10">2</span>
                <h4 className="text-xl font-medium text-gray-900 mb-4">Excellence</h4>
                <p className="text-gray-600 font-light leading-relaxed">We strive for excellence in everything we do and hold ourselves accountable to the highest standards of quality and professionalism.</p>
              </div>
              {/* Value 3 */}
              <div className="relative">
                <span className="absolute -top-10 -left-4 text-8xl font-bold text-gray-200/50 -z-10">3</span>
                <h4 className="text-xl font-medium text-gray-900 mb-4">Collaboration</h4>
                <p className="text-gray-600 font-light leading-relaxed">We believe in the power of partnerships, working closely with our clients and stakeholders to develop solutions that are tailored to their specific needs and priorities.</p>
              </div>
              {/* Value 4 */}
              <div className="relative">
                <span className="absolute -top-10 -left-4 text-8xl font-bold text-gray-200/50 -z-10">4</span>
                <h4 className="text-xl font-medium text-gray-900 mb-4">Innovation</h4>
                <p className="text-gray-600 font-light leading-relaxed">We embrace new ideas, technologies, and approaches to improve our services and are committed to staying at the forefront through continuous learning and innovation.</p>
              </div>
              {/* Value 5 */}
              <div className="relative">
                <span className="absolute -top-10 -left-4 text-8xl font-bold text-gray-200/50 -z-10">5</span>
                <h4 className="text-xl font-medium text-gray-900 mb-4">Inclusivity</h4>
                <p className="text-gray-600 font-light leading-relaxed">We believe in the importance of diverse perspectives and experiences, and we strive to create an inclusive work environment that values and respects all individuals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* REGISTRATION & COMPLIANCE - Muonekano wa Kisheria (Audit Style) */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-24">
          <div className="bg-white border border-gray-300 p-8 md:p-12 max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8 shadow-sm">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gray-900 flex items-center justify-center rounded-sm">
                <span className="text-white text-xs font-bold tracking-widest uppercase">Legal</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-widest mb-4">
                Registration & Compliance
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                The firm is incorporated and registered in the United Republic of Tanzania as a private limited liability company under Registration Certificate No. 144452399 and has a valid Business License No. B4243757 reissued on 4 October 2022. The firm also has a Tanzania Revenue Authority certificate of registration with Taxpayer Identification Number (TIN) No. 144-452-399, effective from 22 October 2020.
              </p>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION (Ready to work with us?) */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-10 text-center">
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">Ready to work with us?</h2>
          <p className="text-xl text-gray-500 font-light mb-10">Discover how we can support your development initiatives.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="/#services" className="border border-gray-900 bg-gray-900 text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-gray-900 transition-colors duration-300">
              Our Services
            </a>
            <a href="/contact" className="border border-gray-300 bg-white text-gray-900 px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:border-gray-900 transition-colors duration-300">
              Contact Us
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}