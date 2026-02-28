"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";
import { opportunities } from "../data/opportunities"; // TUNAVUTA DATA HAPA

export default function OpportunitiesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-32 pb-20">
        
        {/* HEADER */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-16">
          <div className="max-w-4xl">
            <h1 className="text-sm font-bold tracking-widest text-primary uppercase mb-6">
              Opportunities
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              Join our team of experts in research, data & M&E across East Africa.
            </h2>
            {/* Kistari Sharp */}
            <div className="h-[3px] w-24 bg-primary mb-8 rounded-none"></div>
          </div>
        </section>

        {/* INTRODUCTION & REGISTRATION FORM */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Maelezo & Legal Box (Kushoto) */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="text-gray-700 font-normal text-lg leading-relaxed space-y-6 mb-12">
                <p>Are you a seasoned professional in international development with a passion for making a positive impact on the world? Look no further! We are currently seeking multidisciplinary experts in all areas of our service, including research, data handling and management, and monitoring and evaluation.</p>
                <p>With over five years of professional experience in the international development arena, you will bring a wealth of knowledge and expertise to our team. We value candidates with international experience, particularly those who have worked in both developing and transitional countries.</p>
                <p>As a member of our team, you will have the opportunity to work on a variety of assignments, from conducting research to analysing data and evaluating program effectiveness. You will also have the chance to work with a diverse group of experts from around the world, collaborating to make a meaningful difference in the lives of those we serve.</p>
                <p className="font-bold text-gray-900">If you are a highly motivated individual with a commitment to making a positive impact in the world, we want to hear from you! Apply now and join our team in making a difference.</p>
              </div>

              {/* Legal Box - Sharp, No shadow */}
              <div className="bg-gray-50 border-2 border-primary/10 p-8 rounded-none">
                <h4 className="text-xs font-bold tracking-widest text-primary uppercase mb-4">Data Protection & Privacy</h4>
                <p className="text-gray-700 font-normal text-sm leading-relaxed space-y-2 mb-4">At Prime Expertise, we understand the importance of protecting personal data and take this responsibility very seriously. We assure you that the information you provide via this questionnaire and your CV will be used solely for the purpose of recruitment and will be handled with the utmost respect and confidentiality. Your personal data will be securely stored on our servers located in Dar es Salaam and will only be accessed by authorized personnel.</p>
                <p className="text-gray-700 font-normal text-sm leading-relaxed mb-4">Furthermore, we want to ensure that you have full control over your personal data, so we would like to inform you that you have the right to withdraw your consent at any time, as well as the right to request access, rectification, and erasure of your data. You may exercise these rights at any time by emailing us at <a href="mailto:dataprotection@primeexpertise.co.tz" className="text-primary font-bold hover:underline">dataprotection@primeexpertise.co.tz</a>.</p>
                <a href="#privacy-policy" className="text-xs font-bold text-gray-900 uppercase tracking-widest hover:text-primary transition-colors">Read Full Policy</a>
              </div>
            </div>

            {/* Fomu ya Usajili (Kulia) - Sharp, No shadow */}
            <div className="lg:col-span-7 bg-white border-2 border-primary/10 p-8 md:p-12 h-fit sticky top-32 rounded-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-primary/10">Register Your CV</h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col"><label className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2">First Name *</label><input type="text" className="border-0 border-b border-gray-300 py-2 px-0 bg-transparent focus:ring-0 focus:border-primary rounded-none transition-colors w-full outline-none font-normal" required /></div>
                  <div className="flex flex-col"><label className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2">Middle Name *</label><input type="text" className="border-0 border-b border-gray-300 py-2 px-0 bg-transparent focus:ring-0 focus:border-primary rounded-none transition-colors w-full outline-none font-normal" required /></div>
                  <div className="flex flex-col"><label className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2">Sur Name *</label><input type="text" className="border-0 border-b border-gray-300 py-2 px-0 bg-transparent focus:ring-0 focus:border-primary rounded-none transition-colors w-full outline-none font-normal" required /></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col"><label className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2">Email *</label><input type="email" className="border-0 border-b border-gray-300 py-2 px-0 bg-transparent focus:ring-0 focus:border-primary rounded-none transition-colors w-full outline-none font-normal" required /></div>
                  <div className="flex flex-col"><label className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2">Date of Birth *</label><input type="date" className="border-0 border-b border-gray-300 py-2 px-0 bg-transparent focus:ring-0 focus:border-primary rounded-none transition-colors w-full outline-none text-gray-700 font-normal" required /></div>
                </div>
                <div className="flex flex-col pt-4">
                  <label className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">CV Upload *</label>
                  <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-none file:border-0 file:text-xs file:font-bold file:uppercase file:tracking-widest file:bg-primary/10 file:text-primary hover:file:bg-primary/20 file:cursor-pointer transition-colors" required />
                  <p className="text-sm text-gray-700 mt-3 font-normal">Here is our recommended, commonly used <a href="#template" className="text-primary hover:underline font-bold">CV template</a>.</p>
                </div>
                <div className="pt-8 border-t border-primary/10 flex flex-col space-y-6">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded-none border-gray-300 text-primary focus:ring-primary" required />
                    <span className="text-sm text-gray-700 font-normal group-hover:text-primary transition-colors">I Agree to the <a href="#terms" className="underline font-bold">Terms and Conditions</a> and Data Protection Policy.</span>
                  </label>
                  {/* Button Sharp */}
                  <button type="submit" className="w-full sm:w-auto border-2 border-primary bg-primary text-white px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-transparent hover:text-primary transition-colors duration-300 flex items-center justify-center rounded-none">
                    Send Application <ArrowRight className="ml-3 w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>

          </div>
        </section>

        {/* VACANCIES / JOB BOARD */}
        <section className="bg-gray-50 py-24 border-y border-gray-100">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 border-b border-primary/10 pb-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Vacancies</h3>
                <p className="text-gray-700 font-normal">Current open positions and tenders. Showing {opportunities.length} results.</p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center text-sm font-normal text-gray-700">
                <span className="mr-2">Sort by:</span>
                <select defaultValue="Relevance" className="bg-transparent border-0 border-b border-gray-300 focus:ring-0 focus:border-primary text-primary font-bold outline-none cursor-pointer pb-1">
                  <option value="Relevance">Relevance</option>
                  <option value="Newest Post">Newest Post</option>
                  <option value="Days left">Days left</option>
                </select>
              </div>
            </div>

            {/* Grid ya Kadi za Kazi Zinazosomwa kutoka kwenye DB - Sharp, No shadows */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {opportunities.map((job) => (
                <a key={job.id} href={`/opportunities/${job.slug}`} className="group bg-white border-2 border-primary/10 flex flex-col hover:border-primary/50 transition-colors duration-500 cursor-pointer rounded-none">
                  <div className="w-full h-48 overflow-hidden bg-gray-100 border-b border-primary/10 relative">
                    <img 
                      src={`/images/${job.image}`} 
                      alt={job.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold text-primary mb-4 leading-snug line-clamp-2">
                      {job.title}
                    </h4>
                    <p className="text-gray-700 font-normal text-base leading-relaxed mb-8 flex-grow line-clamp-3">
                      {job.desc}
                    </p>
                    <div className="mt-auto pt-6 border-t border-primary/10 flex items-center text-sm font-bold uppercase tracking-widest text-primary">
                      Read More 
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}