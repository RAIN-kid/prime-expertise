import { ArrowRight } from "lucide-react";

export default function RegisterCV() {
  return (
    <section className="relative py-32 bg-gray-900 overflow-hidden">
      {/* Background Image yenye Giza Nzito */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity">
        <img 
          src="https://primexpert.vercel.app/Register-your-CV-2048x1151.jpg" 
          alt="Prime Expertise Team" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 flex flex-col items-center text-center">
        <h2 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-6">
          Join Our Network
        </h2>
        <h3 className="text-3xl md:text-5xl font-light text-white leading-tight mb-10 max-w-3xl">
          Register Your CV in Our Global Database
        </h3>
        
        {/* List ya Sifa kwa mtindo wa kiofisi */}
        <ul className="text-gray-300 font-light text-lg space-y-4 mb-12">
          <li className="flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-white mr-4"></span>
            Passionate about international development?
          </li>
          <li className="flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-white mr-4"></span>
            Strong research and data management skills?
          </li>
          <li className="flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-white mr-4"></span>
            Committed to making a positive impact?
          </li>
        </ul>

        <p className="text-gray-400 font-light mb-12">
          Look no further! Unlock exciting opportunities to contribute your expertise.
        </p>

        {/* Button ya Kifahari */}
        <a
          href="/opportunities"
          className="group flex items-center justify-center border border-white px-10 py-4 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 cursor-pointer"
        >
          <span className="text-sm font-semibold tracking-widest uppercase">
            Register Now
          </span>
          <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-3 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
}