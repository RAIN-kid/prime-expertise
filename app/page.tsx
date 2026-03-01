"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RegisterCV from "./components/RegisterCV";
import { caseStudies } from "./data/work";

export default function Home() {
// 1. ARRAY YA PICHA ZA SLIDESHOW (Kama ulivyoagiza)
  const heroImages = [
    "/images/hero1.webp",
    "/images/hero2.webp",
    "/images/hero3.webp",
    "/images/hero5.webp",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // 2. LOGIC YA KUBADILISHA PICHA KILA BAADA YA SEKUNDE 5
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <>
      <Navbar />

      {/* MAIN WRAPPER: pt-28 (inashuka chini ya navbar), 
        px-4 md:px-8 lg:px-12 (inaacha space kushoto na kulia) 
      */}
      <main className="bg-white pt-28 pb-16 px-4 md:px-8 lg:px-12">
        
        {/* HERO BOX: Liko katikati, min-h-[85vh] ili liwe kubwa vizuri */}
        <div className="relative w-full min-h-[85vh] flex items-center justify-center bg-gray-900 overflow-hidden">
          
          {/* Background Picha na Giza (Dark Overlay) */}
          <div className="absolute inset-0 z-0">
            {heroImages.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={src}
                  alt={`Prime Expertise Slide ${index + 1}`}
                  className="w-full h-full object-cover object-center" 
                />
              </div>
            ))}
            
            {/* Overlay nyepesi sana ili picha zionekane vizuri */}
            <div className="absolute inset-0 bg-black/40"></div>
            {/* Gradient yako OG ili chini kuwe na giza kidogo text isomeke */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
          </div>

          {/* Content ya Kiofisi (Mpangilio wako ule ule wa kushoto) */}
          <div className="relative z-10 w-full container mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-start mt-16">
            
            {/* Kistari cha Kifahari (Hapa nimetumia rangi ya Primary) */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "64px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-[2px] bg-primary mb-8"
            ></motion.div>

            {/* Heading (Maandishi yako yale yale OG) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight mb-6">
                Data Collection & Research <br className="hidden md:block" />
                {/* Hapa nimetumia primary color kuongeza muonekano */}
                <span className="font-medium text-primary">Services in Tanzania</span>
              </h1>
            </motion.div>

            {/* Paragraph (Yako ile ile OG) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-2xl text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-12"
            >
              We are a world-class, multi-disciplinary, local Tanzanian data collection and research services firm dedicated to supporting the missions of international development agencies.
            </motion.p>

            {/* Button Iliyonyooka (Haina bg, ina border) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <a
                href="#services"
                // Hover ikiguswa ndio inaleta primary color
                className="group flex items-center justify-center bg-transparent border border-white/50 px-8 py-4 text-white hover:border-primary hover:bg-primary transition-all duration-300 cursor-pointer"
              >
                <span className="text-sm font-semibold tracking-widest uppercase">
                  Explore Our Expertise
                </span>
                <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-3 transition-transform duration-300" />
              </a>
            </motion.div>
            
          </div>
        </div>
      </main>

      {/* SECTION YA TRUSTED BY (Wateja / Partners) */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase">
              Trusted by Leading Global Organizations
            </h2>
          </div>

          {/* Grid ya Logo (Nimeondoa opacity-80 ili zionekane vizuri mwanzo mwisho) */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10 items-center justify-items-center">
            <img src="https://primexpert.vercel.app/client/mecslogo.png" alt="UKAid MECS" className="h-12 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer" />
            <img src="https://primexpert.vercel.app/client/15_karl-kuebel-stiftung.png" alt="Karl Kübel Stiftung" className="h-12 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer" />
            <img src="https://primexpert.vercel.app/client/thefred.png" alt=" Fred Hollows" className="h-12 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer" />
            <img src="https://primexpert.vercel.app/client/hystra.png" alt="Hystra" className="h-10 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer" />
            <img src="https://primexpert.vercel.app/client/loughborough-univeristy-lboro-logo-1024x258.png" alt="Loughborough" className="h-10 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer" />
            <img src="https://primexpert.vercel.app/client/CSSC-logo-bgless.png" alt="CSSC" className="h-14 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer" />
            <img src="https://primexpert.vercel.app/client/CcNLE7oh_400x400.jpg" alt="Partner" className="h-12 rounded-full object-contain hover:scale-110 transition-transform duration-300 cursor-pointer" />
            <img src="https://primexpert.vercel.app/client/afrifoodlinks-logo-mobile-full.c76c76-1024x434.png" alt="AfriFOODlinks" className="h-10 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer" />
            <img src="https://primexpert.vercel.app/client/iclei.png" alt="ICLEI" className="h-12 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer" />
            <img src="https://primexpert.vercel.app/client/rikolto.png" alt="Rikolto" className="h-10 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer" />
            <img src="https://primexpert.vercel.app/client/GDC%20Consulting.png" alt="GDC" className="h-12 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer" />
            <img src="https://primexpert.vercel.app/client/Logo.png" alt="Client Logo" className="h-10 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer" />
          </div>
        </div>
      </section>

      {/* SECTION YA SERVICES (Our Expertise) - Flat Design & Typography */}
      <section id="services" className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          
          {/* Kichwa cha Habari cha Section */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20">
            <div className="max-w-2xl">
              <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
                What We Do
              </h2>
              <h3 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
                Evidence-based solutions across the <br className="hidden md:block"/> project life-cycle.
              </h3>
            </div>
          </div>

          {/* Grid ya Huduma (Cards 3 zilizolala flat) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Kadi ya 1: Research */}
            <a href="/services" className="group border border-gray-200 bg-white p-8 md:p-10 flex flex-col hover:border-gray-400 transition-colors duration-500 cursor-pointer block">
              {/* Picha iliyodhibitiwa (Grayscale + Slow Zoom) */}
              <div className="w-full h-48 mb-8 overflow-hidden relative bg-gray-100">
                <img 
                  src="https://primexpert.vercel.app/services/3-1024x884.jpg" 
                  alt="Research" 
                  className="object-cover w-full h-full group-hover:scale-105"
                />
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">Research</h4>
              <p className="text-gray-600 font-light leading-relaxed mb-8 flex-grow text-sm md:text-base line-clamp-3">
                Our research services include designing and implementing both qualitative and quantitative studies, collecting and analysing data, and producing reports and publications that provide valuable insights and inform the design and implementation of development initiatives.
              </p>
              {/* Text Link badala ya Button kubwa */}
              <div className="mt-auto flex items-center text-sm font-semibold uppercase tracking-widest text-gray-900">
                Learn more 
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-3 transition-transform duration-300" />
              </div>
            </a>

            {/* Kadi ya 2: Data Handling */}
            <a href="/services" className="group border border-gray-200 bg-white p-8 md:p-10 flex flex-col hover:border-gray-400 transition-colors duration-500 cursor-pointer block">
              <div className="w-full h-48 mb-8 overflow-hidden relative bg-gray-100">
                <img 
                  src="https://primexpert.vercel.app/services/2-1-scaled.jpg" 
                  alt="Data Handling" 
                  className="object-cover w-full h-full group-hover:scale-105"
                />
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">Data Management</h4>
              <p className="text-gray-600 font-light leading-relaxed mb-8 flex-grow text-sm md:text-base line-clamp-3">
                We also offer a range of expert data handling and management services, including the design and implementation of data collection systems, the establishment of robust data management processes, and the analysis and interpretation of data to inform program design and decision-making.
              </p>
              <div className="mt-auto flex items-center text-sm font-semibold uppercase tracking-widest text-gray-900">
                Learn more 
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-3 transition-transform duration-300" />
              </div>
            </a>

            {/* Kadi ya 3: M & E */}
            <a href="/services" className="group border border-gray-200 bg-white p-8 md:p-10 flex flex-col hover:border-gray-400 transition-colors duration-500 cursor-pointer block">
              <div className="w-full h-48 mb-8 overflow-hidden relative bg-gray-100">
                <img 
                  src="https://primexpert.vercel.app/services/6-664x1024.jpg" 
                  alt="Monitoring & Evaluation" 
                  className="object-cover w-full h-full group-hover:scale-105"
                />
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-4">Monitoring & Evaluation</h4>
              <p className="text-gray-600 font-light leading-relaxed mb-8 flex-grow text-sm md:text-base line-clamp-3">
                In addition to our research and data services, we also provide comprehensive monitoring and evaluation services to help organizations track the progress and impact of their development initiatives, identify areas for improvement, and make informed decisions based on evidence.
              </p>
              <div className="mt-auto flex items-center text-sm font-semibold uppercase tracking-widest text-gray-900">
                Learn more 
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-3 transition-transform duration-300" />
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* SECTION YA OUR REACH & IMPACT - Wapishane Layout (Zig-Zag) & Original Colors */}
      <section className="py-32 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          
          {/* Kichwa cha Habari */}
          <div className="text-center mb-24">
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
              Global Footprint
            </h2>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 leading-tight">
              Our Reach & Impact
            </h3>
          </div>

          {/* 1. OUR OFFICES (Maelezo Kushoto, Ramani Kulia) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200 mb-16">
            
            {/* Maelezo (Kushoto) */}
            <div className="p-8 md:p-16 flex flex-col justify-center bg-white border-b lg:border-b-0 lg:border-r border-gray-200">
              <h4 className="text-2xl font-light text-primary mb-6 border-b border-gray-100 pb-4 inline-block w-fit">
                Our Offices
              </h4>
              <p className="text-gray-600 font-light leading-relaxed text-lg">
                Headquartered in Tanzania, we deliver research, data & M&E services across East Africa and beyond.
              </p>
            </div>
            
            {/* Ramani (Kulia) */}
            <div className="p-8 md:p-16 lg:h-120 bg-gray-50 flex items-center justify-center">
              <img 
                src="https://primexpert.vercel.app/Map_TRIMMED.svg" 
                alt="Prime Expertise Offices Map" 
                className="w-full max-w-sm h-auto mix-blend-multiply" 
              />
            </div>
          </div>

          {/* 2. SERVING THE SDGS (Picha Kushoto, Maelezo Kulia - Zimepishana) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200">
            
            {/* Picha ya Data (Kushoto) - Rangi Zimerudishwa ili maelezo yalete maana */}
            {/* Kwenye simu (mobile) picha itakaa chini, kwenye PC itakaa kushoto (order-2 lg:order-1) */}
            <div className="p-8 md:p-16 bg-gray-50 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-200 order-2 lg:order-1">
              <img 
                src="https://primexpert.vercel.app/map.jpg" 
                alt="Sustainable Development Goals Contribution" 
                className="w-full h-auto mix-blend-darken" 
              />
            </div>
            
            {/* Maelezo (Kulia) */}
            <div className="p-8 md:p-16 flex flex-col justify-center bg-white order-1 lg:order-2">
              <h4 className="text-2xl font-light text-primary mb-6 border-b border-gray-100 pb-4 inline-block w-fit">
                Our Outreach: Serving the SDGs
              </h4>
              <p className="text-gray-600 font-light leading-relaxed text-lg">
                We support the Sustainable Development Goals. The icons below (excluding the black and white ones) symbolise the areas in which we have provided our services to make a contribution towards achieving these goals.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION YA CASE STUDIES (Highlights of Our Work) - Whitepaper Style */}
      <section className="py-32 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          
          {/* Kichwa cha Habari */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 border-b border-gray-200 pb-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
                Case Studies
              </h2>
              <h3 className="text-3xl md:text-5xl font-light text-gray-900 leading-tight">
                Highlights of Our Work
              </h3>
            </div>
            <div className="mt-8 md:mt-0">
              <a href="/work" className="group flex items-center text-sm font-semibold uppercase tracking-widest text-primary hover:text-gray-500 transition-colors duration-300">
                View All Publications
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Grid ya Case Studies (Ripoti 3 za Mfano) */}
         {/* Grid ya Case Studies (Ripoti 3 za Mfano zinazosomwa kutoka kwenye DB) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(0, 3).map((study) => (
              <a 
                key={study.id} 
                href="/work" 
                className="group flex flex-col bg-white border border-gray-200 hover:border-gray-400 transition-colors duration-500 cursor-pointer"
              >
                {/* Cover Image */}
                <div className="w-full h-48 overflow-hidden relative bg-gray-100 border-b border-gray-100">
                  <img 
                    // Hapa tunatumia picha kutoka kwenye data. Kama hujaziweka kule, tumia hizi placeholders za Unsplash ulizokuwa nazo
                    src={
                      study.id === 1 ? "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop" :
                      study.id === 2 ? "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop" :
                      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=500&fit=crop"
                    }
                    alt={study.title} 
                    className="w-full h-full object-cover group-hover:scale-105"
                  />
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
              </a>
            ))}
          </div>
        </div>
      </section>
      
      <RegisterCV />
      <Footer />
    </>
  );
}