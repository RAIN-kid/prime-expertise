"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-32 pb-0">
        
        {/* HEADER */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-16">
          <div className="max-w-4xl">
            <h1 className="text-sm font-semibold tracking-widest text-primary uppercase mb-6">
              Contact Us
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-8">
              Got an inquiry?
            </h2>
            <div className="h-[1px] w-24 bg-primary mb-8"></div>
            <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl">
              Submit the form below and our team will respond as soon as possible. Your email will only be used in response to your inquiry.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT: FORM & CONTACT DETAILS */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-gray-200">
            
            {/* FOMU YA MAWASILIANO (Kushoto - Columns 7) */}
            <div className="lg:col-span-7 bg-white p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-gray-200">
              <form className="space-y-10">
                
                {/* Subject Selection */}
                <div className="flex flex-col">
                  <label className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4">Subject *</label>
                  <select defaultValue="" className="border-0 border-b border-gray-300 py-3 px-0 bg-transparent focus:ring-0 focus:border-gray-900 rounded-none transition-colors w-full outline-none text-primary font-light appearance-none cursor-pointer">
                    <option value="General Inquiries">General Inquiries</option>
                    <option value="Partnerships">Partnerships</option>
                    <option value="Opportunities">Opportunities</option>
                    <option value="Services">Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Company Name & Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">Company Name *</label>
                    <input type="text" className="border-0 border-b border-gray-300 py-2 px-0 bg-transparent focus:ring-0 focus:border-gray-900 rounded-none transition-colors w-full outline-none font-light" required />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">Name *</label>
                    <input type="text" className="border-0 border-b border-gray-300 py-2 px-0 bg-transparent focus:ring-0 focus:border-gray-900 rounded-none transition-colors w-full outline-none font-light" required />
                  </div>
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">Email *</label>
                    <input type="email" className="border-0 border-b border-gray-300 py-2 px-0 bg-transparent focus:ring-0 focus:border-gray-900 rounded-none transition-colors w-full outline-none font-light" required />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">Phone *</label>
                    <input type="tel" className="border-0 border-b border-gray-300 py-2 px-0 bg-transparent focus:ring-0 focus:border-gray-900 rounded-none transition-colors w-full outline-none font-light" required />
                  </div>
                </div>

                {/* Message Box */}
                <div className="flex flex-col">
                  <label className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">Message *</label>
                  <textarea rows={4} className="border-0 border-b border-gray-300 py-2 px-0 bg-transparent focus:ring-0 focus:border-gray-900 rounded-none transition-colors w-full outline-none font-light resize-none" required></textarea>
                </div>

                {/* Checkbox & Policy */}
                <div className="pt-4 flex flex-col space-y-8">
                  <label className="flex items-start space-x-4 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 mt-1 rounded-none border-gray-300 text-gray-900 focus:ring-gray-900" required />
                    <span className="text-sm text-gray-600 font-light group-hover:text-gray-900 transition-colors leading-relaxed">
                      <strong className="block mb-1 font-medium text-gray-900">Acceptance of Prime Expertise's Data Protection and Privacy Policy</strong>
                      By checking the box, you acknowledge that you have read, understood, and agree to abide by Prime Expertise's <a href="#privacy" className="underline font-medium text-primary">Data Protection and Privacy Policy</a>.
                    </span>
                  </label>

                  <button type="submit" className="w-full sm:w-auto bg-primary text-white px-10 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center">
                    Submit Inquiry
                    <ArrowRight className="ml-3 w-4 h-4" />
                  </button>
                </div>

              </form>
            </div>

            {/* CONTACT DETAILS (Kulia - Columns 5) */}
            <div className="lg:col-span-5 bg-gray-50 p-8 md:p-16 flex flex-col justify-center">
              <h3 className="text-2xl font-light text-primary mb-10 pb-4 border-b border-gray-200">
                Contact details
              </h3>
              
              <div className="space-y-10">
                {/* Physical Address */}
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-3 flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-900 mr-3"></span>
                    Physical Address
                  </h4>
                  <p className="text-gray-600 font-light leading-relaxed pl-4 border-l border-gray-200">
                    Prime Expertise Limited,<br />
                    Plot 1040, Haile Selassie Road, Masaki,<br />
                    Dar es Salaam, 14111, Tanzania.
                  </p>
                </div>

                {/* Postal Address */}
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-3 flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-900 mr-3"></span>
                    Postal Address
                  </h4>
                  <p className="text-gray-600 font-light leading-relaxed pl-4 border-l border-gray-200">
                    Prime Expertise Limited,<br />
                    P.O. Box 60021,<br />
                    Dar es Salaam, Tanzania.
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-3 flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-900 mr-3"></span>
                    Email
                  </h4>
                  <p className="pl-4 border-l border-gray-200">
                    <a href="mailto:info@primeexpertise.co.tz" className="text-gray-900 font-light hover:text-gray-500 transition-colors">
                      info@primeexpertise.co.tz
                    </a>
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-3 flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-900 mr-3"></span>
                    Phone
                  </h4>
                  <p className="pl-4 border-l border-gray-200">
                    <a href="tel:+255653074907" className="text-gray-900 font-light hover:text-gray-500 transition-colors">
                      +255 (0) 653 074 907
                    </a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* GOOGLE MAPS EMBED - Grayscale na Hover Effect */}
        <section className="w-full h-96 border-t border-gray-200 bg-gray-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.366247656209!2d39.2747113153528!3d-6.725114695138138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4d3ebaa18e77%3A0xc3f98e8d89cbdf1c!2sHaile%20Selassie%20Rd%2C%20Dar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-1000"
          ></iframe>
        </section>

      </main>

      <Footer />
    </>
  );
}