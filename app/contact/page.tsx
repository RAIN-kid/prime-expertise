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
            {/* Title kuu imekuwa font-bold */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              Got an inquiry?
            </h2>
            <div className="h-[3px] w-24 bg-primary mb-8 rounded-full"></div>
            {/* Paragraph imekuwa font-normal na text-gray-700 */}
            <p className="text-xl text-gray-700 font-normal leading-relaxed max-w-2xl">
              Submit the form below and our team will respond as soon as possible. Your email will only be used in response to your inquiry.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT: FORM & CONTACT DETAILS */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-32">
          {/* Boksi Kuu (Consistency applied) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-primary/10 shadow-sm">
            
            {/* FOMU YA MAWASILIANO (Kushoto - Columns 7) */}
            <div className="lg:col-span-7 bg-white p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-primary/10">
              <form className="space-y-10">
                
                {/* Subject Selection */}
                <div className="flex flex-col">
                  {/* Label imekuwa text-sm */}
                  <label className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">Subject *</label>
                  {/* Select input imekuwa font-normal */}
                  <select defaultValue="" className="border-0 border-b border-gray-300 py-3 px-0 bg-transparent focus:ring-0 focus:border-primary rounded-none transition-colors w-full outline-none text-gray-900 font-normal appearance-none cursor-pointer">
                    <option value="" disabled>Select an inquiry type</option>
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
                    <label className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">Company Name *</label>
                    <input type="text" className="border-0 border-b border-gray-300 py-2 px-0 bg-transparent focus:ring-0 focus:border-primary rounded-none transition-colors w-full outline-none font-normal" required />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">Name *</label>
                    <input type="text" className="border-0 border-b border-gray-300 py-2 px-0 bg-transparent focus:ring-0 focus:border-primary rounded-none transition-colors w-full outline-none font-normal" required />
                  </div>
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">Email *</label>
                    <input type="email" className="border-0 border-b border-gray-300 py-2 px-0 bg-transparent focus:ring-0 focus:border-primary rounded-none transition-colors w-full outline-none font-normal" required />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">Phone *</label>
                    <input type="tel" className="border-0 border-b border-gray-300 py-2 px-0 bg-transparent focus:ring-0 focus:border-primary rounded-none transition-colors w-full outline-none font-normal" required />
                  </div>
                </div>

                {/* Message Box */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">Message *</label>
                  <textarea rows={4} className="border-0 border-b border-gray-300 py-2 px-0 bg-transparent focus:ring-0 focus:border-primary rounded-none transition-colors w-full outline-none font-normal resize-none" required></textarea>
                </div>

                {/* Checkbox & Policy */}
                <div className="pt-4 flex flex-col space-y-8">
                  <label className="flex items-start space-x-4 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 mt-1 rounded-none border-gray-300 text-primary focus:ring-primary" required />
                    {/* Text ya policy imekuwa font-normal text-gray-700 */}
                    <span className="text-sm text-gray-700 font-normal group-hover:text-gray-900 transition-colors leading-relaxed">
                      <strong className="block mb-1 font-bold text-gray-900">Acceptance of Prime Expertise's Data Protection and Privacy Policy</strong>
                      By checking the box, you acknowledge that you have read, understood, and agree to abide by Prime Expertise's <a href="#privacy" className="text-primary hover:underline font-bold">Data Protection and Privacy Policy</a>.
                    </span>
                  </label>

                  <button type="submit" className="w-full sm:w-auto border-2 border-primary bg-primary text-white px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-transparent hover:text-primary transition-colors duration-300 flex items-center justify-center">
                    Submit Inquiry
                    <ArrowRight className="ml-3 w-4 h-4" />
                  </button>
                </div>

              </form>
            </div>

            {/* CONTACT DETAILS (Kulia - Columns 5) */}
            <div className="lg:col-span-5 bg-gray-50 p-8 md:p-16 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-10 pb-4 border-b border-primary/10">
                Contact details
              </h3>
              
              <div className="space-y-10">
                {/* Physical Address */}
                <div>
                  <h4 className="text-sm font-bold tracking-widest text-primary uppercase mb-3 flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary mr-3"></span>
                    Physical Address
                  </h4>
                  {/* Font-normal badala ya font-light */}
                  <p className="text-gray-700 font-normal leading-relaxed pl-4 border-l border-primary/20 text-lg">
                    Prime Expertise Limited,<br />
                    Plot 1040, Haile Selassie Road, Masaki,<br />
                    Dar es Salaam, 14111, Tanzania.
                  </p>
                </div>

                {/* Postal Address */}
                <div>
                  <h4 className="text-sm font-bold tracking-widest text-primary uppercase mb-3 flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary mr-3"></span>
                    Postal Address
                  </h4>
                  <p className="text-gray-700 font-normal leading-relaxed pl-4 border-l border-primary/20 text-lg">
                    Prime Expertise Limited,<br />
                    P.O. Box 60021,<br />
                    Dar es Salaam, Tanzania.
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h4 className="text-sm font-bold tracking-widest text-primary uppercase mb-3 flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary mr-3"></span>
                    Email
                  </h4>
                  <p className="pl-4 border-l border-primary/20">
                    <a href="mailto:info@primeexpertise.co.tz" className="text-gray-900 font-normal text-lg hover:text-primary transition-colors">
                      info@primeexpertise.co.tz
                    </a>
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <h4 className="text-sm font-bold tracking-widest text-primary uppercase mb-3 flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary mr-3"></span>
                    Phone
                  </h4>
                  <p className="pl-4 border-l border-primary/20">
                    <a href="tel:+255653074907" className="text-gray-900 font-normal text-lg hover:text-primary transition-colors">
                      +255 (0) 653 074 907
                    </a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* GOOGLE MAPS EMBED -*/}
        <section className="w-full h-96 border-t border-gray-200 bg-gray-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.366247656209!2d39.2747113153528!3d-6.725114695138138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4d3ebaa18e77%3A0xc3f98e8d89cbdf1c!2sHaile%20Selassie%20Rd%2C%20Dar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className=""
          ></iframe>
        </section>

      </main>

      <Footer />
    </>
  );
}