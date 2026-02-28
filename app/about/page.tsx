"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-32 pb-20">
        
        {/* HEADER & INTRODUCTION */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-24">
          <div className="max-w-4xl mb-16">
            <h1 className="text-sm font-semibold tracking-widest text-primary uppercase mb-6">
              Who We Are
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-10">
              A world-class, multi-disciplinary Tanzanian consulting firm dedicated to supporting development initiatives.
            </h2>
            {/* Kistari cha Primary */}
            <div className="h-[3px] w-24 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Maelezo yamekuwa font-normal */}
            <div className="text-gray-700 font-normal text-lg leading-relaxed space-y-6">
              <p>
                Prime Expertise Limited is a world-class, multi-disciplinary, local Tanzanian international development consulting firm dedicated to supporting the missions of international development agencies through high-quality research, data handling and management, and monitoring and evaluation services in support of socioeconomic development initiatives in Tanzania, East Africa, and beyond.
              </p>
              <p>
                The firm has a network of experienced professionals with a deep understanding of the complexities of development initiatives and is dedicated to delivering customized solutions that meet the unique needs of our clients.
              </p>
            </div>
            {/* Picha yenye Rangi Halisi (No Grayscale) */}
            <div className="w-full h-80 bg-gray-100 border-2 border-primary/10 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500">
               <img 
                  src="/images/post9.webp" 
                  alt="Prime Expertise Professionals" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-primary/10 shadow-sm">
            {/* Vision */}
            <div className="p-10 md:p-16 border-b md:border-b-0 md:border-r border-primary/10 bg-white hover:bg-gray-50 transition-colors duration-500">
              <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-6 flex items-center">
                <span className="w-2 h-2 bg-primary mr-4"></span>
                Our Vision
              </h3>
              <p className="text-gray-700 font-normal text-lg leading-relaxed">
                To be the leading provider of research, data handling and management, and monitoring and evaluation services in support of socio-economic development initiatives in Tanzania, East Africa, and beyond.
              </p>
            </div>
            {/* Mission */}
            <div className="p-10 md:p-16 bg-white hover:bg-gray-50 transition-colors duration-500">
              <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-6 flex items-center">
                <span className="w-2 h-2 bg-primary mr-4"></span>
                Our Mission
              </h3>
              <p className="text-gray-700 font-normal text-lg leading-relaxed">
                To provide high-quality, cost-effective, and evidence-based solutions that empower organizations to effectively design, implement, and evaluate their development initiatives in Tanzania, East Africa, and beyond. We strive to be a trusted partner and advisor to our clients, delivering personalized, tailored services that drive impact and support sustainable development.
              </p>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="bg-gray-50 py-24 border-y border-gray-100 mb-24">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="text-center mb-20">
              <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
                What We Stand For
              </h2>
              {/* Title imekuwa font-bold */}
              <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
                Our Core Values
              </h3>
              <p className="text-gray-700 font-normal mt-4 text-lg">The principles that guide everything we do</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {/* Value 1 */}
              <div className="relative">
                <span className="absolute -top-10 -left-4 text-8xl font-bold text-primary/10 -z-10">1</span>
                <h4 className="text-xl font-bold text-primary mb-4">Integrity</h4>
                <p className="text-gray-700 font-normal leading-relaxed text-base">We are committed to upholding the highest ethical standards in all aspects of our work and interactions.</p>
              </div>
              {/* Value 2 */}
              <div className="relative">
                <span className="absolute -top-10 -left-4 text-8xl font-bold text-primary/10 -z-10">2</span>
                <h4 className="text-xl font-bold text-primary mb-4">Excellence</h4>
                <p className="text-gray-700 font-normal leading-relaxed text-base">We strive for excellence in everything we do and hold ourselves accountable to the highest standards of quality and professionalism.</p>
              </div>
              {/* Value 3 */}
              <div className="relative">
                <span className="absolute -top-10 -left-4 text-8xl font-bold text-primary/10 -z-10">3</span>
                <h4 className="text-xl font-bold text-primary mb-4">Collaboration</h4>
                <p className="text-gray-700 font-normal leading-relaxed text-base">We believe in the power of partnerships, working closely with our clients and stakeholders to develop solutions that are tailored to their specific needs and priorities.</p>
              </div>
              {/* Value 4 */}
              <div className="relative">
                <span className="absolute -top-10 -left-4 text-8xl font-bold text-primary/10 -z-10">4</span>
                <h4 className="text-xl font-bold text-primary mb-4">Innovation</h4>
                <p className="text-gray-700 font-normal leading-relaxed text-base">We embrace new ideas, technologies, and approaches to improve our services and are committed to staying at the forefront through continuous learning and innovation.</p>
              </div>
              {/* Value 5 */}
              <div className="relative">
                <span className="absolute -top-10 -left-4 text-8xl font-bold text-primary/10 -z-10">5</span>
                <h4 className="text-xl font-bold text-primary mb-4">Inclusivity</h4>
                <p className="text-gray-700 font-normal leading-relaxed text-base">We believe in the importance of diverse perspectives and experiences, and we strive to create an inclusive work environment that values and respects all individuals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* REGISTRATION & COMPLIANCE */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-24">
          <div className="bg-white border-2 border-primary/10 p-8 md:p-12 max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8 shadow-sm">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-primary flex items-center justify-center rounded-sm shadow-md">
                <span className="text-white text-xs font-bold tracking-widest uppercase">Legal</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary uppercase tracking-widest mb-4">
                Registration & Compliance
              </h3>
              <p className="text-gray-700 font-normal text-sm md:text-base leading-relaxed">
                The firm is incorporated and registered in the United Republic of Tanzania as a private limited liability company under Registration Certificate No. 144452399 and has a valid Business License No. B4243757 reissued on 4 October 2022. The firm also has a Tanzania Revenue Authority certificate of registration with Taxpayer Identification Number (TIN) No. 144-452-399, effective from 22 October 2020.
              </p>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-10 text-center">
          {/* H2 Imekuwa font-bold */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Ready to work with us?</h2>
          <p className="text-xl text-gray-700 font-normal mb-10">Discover how we can support your development initiatives.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="/#services" className="border-2 border-primary bg-primary text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-transparent hover:text-primary transition-colors duration-300">
              Our Services
            </a>
            <a href="/contact" className="border-2 border-gray-300 bg-white text-gray-900 px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:border-primary hover:text-primary transition-colors duration-300">
              Contact Us
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}