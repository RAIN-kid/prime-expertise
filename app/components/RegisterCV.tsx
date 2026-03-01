import { ArrowRight } from "lucide-react";

export default function RegisterCV() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Split Layout Container - Weusi Umepunguzwa (bg-gray-800), Sharp Corners, No Shadows */}
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-800 border-2 border-primary/20 rounded-none shadow-none overflow-hidden">
          
          {/* UPANDE WA KUSHOTO: Maelezo (Softer Dark Theme) */}
          <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center text-left order-2 lg:order-1">
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-4 flex items-center">
              <span className="w-2 h-2 bg-primary mr-3 rounded-none"></span>
              Join Our Network
            </h2>
            <h3 className="text-3xl md:text-5xl font-light text-white leading-tight mb-8">
              Register Your CV in Our Global Database
            </h3>
            
            <ul className="text-gray-300 font-light text-lg space-y-4 mb-10">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary mr-4 mt-2 rounded-none flex-shrink-0"></span>
                <span>Passionate about international development?</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary mr-4 mt-2 rounded-none flex-shrink-0"></span>
                <span>Strong research and data management skills?</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary mr-4 mt-2 rounded-none flex-shrink-0"></span>
                <span>Committed to making a positive impact?</span>
              </li>
            </ul>

            <p className="text-gray-400 font-light mb-12 leading-relaxed">
              Look no further! Unlock exciting opportunities to contribute your expertise.
            </p>

            {/* Button ya Kifahari - Primary Theme, Sharp Corners */}
            <div className="mt-auto">
              <a
                href="#register"
                className="group inline-flex items-center justify-center border-2 border-primary bg-transparent px-10 py-4 text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer rounded-none"
              >
                <span className="text-sm font-semibold tracking-widest uppercase">
                  Register Now
                </span>
                <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-3 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* UPANDE WA KULIA: Picha Imetulia, Haina Zoom, Haina Overlay, Rangi Asilia */}
          <div className="relative w-full h-80 lg:h-full order-1 lg:order-2 border-b-2 lg:border-b-0 lg:border-l-2 border-primary/20 overflow-hidden">
            <img 
              src="https://primexpert.vercel.app/Register-your-CV-2048x1151.jpg" 
              alt="Prime Expertise Team" 
              className="w-full h-full object-cover object-center"
            />
          </div>

        </div>

      </div>
    </section>
  );
}