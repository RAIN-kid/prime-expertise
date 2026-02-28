import { ArrowRight } from "lucide-react";

export default function RegisterCV() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Floating Rounded Container */}
        <div className="relative py-24 bg-gray-900 overflow-hidden">
          
          {/* Background Image yenye Giza Nzito */}
          <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity">
            <img 
              src="https://primexpert.vercel.app/Register-your-CV-2048x1151.jpg" 
              alt="Prime Expertise Team" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
            {/* text-primary na font-bold */}
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-6">
              Join Our Network
            </h2>
            {/* font-bold na text-white */}
            <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-10 max-w-3xl">
              Register Your CV in Our Global Database
            </h3>
            
            {/* List ya Sifa - font-normal */}
            <ul className="text-gray-200 font-normal text-lg md:text-xl space-y-4 mb-12">
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-primary mr-4 rounded-full"></span>
                Passionate about international development?
              </li>
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-primary mr-4 rounded-full"></span>
                Strong research and data management skills?
              </li>
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-primary mr-4 rounded-full"></span>
                Committed to making a positive impact?
              </li>
            </ul>

            <p className="text-gray-300 font-normal text-lg mb-12 max-w-2xl">
              Look no further! Unlock exciting opportunities to contribute your expertise to our high-impact projects.
            </p>

            {/* Button ya Kiofisi - Primary Theme */}
            <a
              href="/opportunities"
              className="group flex items-center justify-center bg-primary border-2 border-primary px-12 py-5 text-white hover:bg-transparent hover:text-white transition-all duration-300 cursor-pointer"
            >
              <span className="text-sm font-bold tracking-widest uppercase">
                Register Now
              </span>
              <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-3 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}