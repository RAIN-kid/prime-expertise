export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Utambulisho */}
          <div className="flex flex-col">
            <a href="/" className="flex items-center">
              <img 
                src="/images/primexpertlogo.webp" 
                alt="Prime Expertise Logo" 
                className="h-10 md:h-12 w-auto object-contain" 
              />
            </a>
            <p className="text-gray-500 font-light text-sm leading-relaxed mb-6">
              A world-class, multi-disciplinary, local Tanzanian data collection and research services firm.
            </p>
            <a href="mailto:info@primeexpertise.co.tz" className="text-sm font-semibold text-gray-900 uppercase tracking-widest hover:text-gray-500 transition-colors">
              info@primeexpertise.co.tz
            </a>
          </div>

          {/* Column 2: Mawasiliano */}
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold tracking-widest text-gray-900 uppercase mb-6">
              Contact Us
            </h4>
            <p className="text-gray-500 font-light text-sm leading-relaxed mb-2">
              Plot 1040, Haile Selassie Road, Masaki,
            </p>
            <p className="text-gray-500 font-light text-sm leading-relaxed mb-2">
              P.O. Box 60021, Dar es Salaam, 14111
            </p>
            <p className="text-gray-500 font-light text-sm leading-relaxed mb-6">
              Tanzania.
            </p>
            <a href="tel:+255653074907" className="text-gray-900 text-sm font-light hover:text-gray-500 transition-colors">
              +255 (0) 653 074 907
            </a>
          </div>

          {/* Column 3: Links */}
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold tracking-widest text-gray-900 uppercase mb-6">
              Navigate
            </h4>
            <div className="flex flex-col space-y-3">
              <a href="#who-we-are" className="text-gray-500 text-sm font-light hover:text-gray-900 transition-colors">Who We Are</a>
              <a href="#services" className="text-gray-500 text-sm font-light hover:text-gray-900 transition-colors">What We Do</a>
              <a href="#opportunities" className="text-gray-500 text-sm font-light hover:text-gray-900 transition-colors">Opportunities</a>
              <a href="#standard-cv" className="text-gray-500 text-sm font-light hover:text-gray-900 transition-colors">Standard CV Template</a>
            </div>
          </div>

          {/* Column 4: Policies */}
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold tracking-widest text-gray-900 uppercase mb-6">
              Legal & Policies
            </h4>
            <div className="flex flex-col space-y-3">
              <a href="#ethics" className="text-gray-500 text-sm font-light hover:text-gray-900 transition-colors">Ethics and Safeguards</a>
              <a href="#data-protection" className="text-gray-500 text-sm font-light hover:text-gray-900 transition-colors">Data Protection & Privacy Policy</a>
              <a href="#whistleblowing" className="text-gray-500 text-sm font-light hover:text-gray-900 transition-colors">Whistleblowing Policy</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Usajili na Hakimiliki */}
        <div className="border-t border-gray-200 pt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <p className="text-xs text-gray-400 font-light leading-relaxed max-w-3xl mb-4 lg:mb-0">
            © 2026 Prime Expertise Limited. All Rights Reserved. We are a registered, limited liability company in the United Republic of Tanzania (Registration Certificate No. 144452399). Prime Expertise Limited also has a valid Business License No. BL01396912024-2500038016, reissued on 10 June 2025, and a Tanzania Revenue Authority certificate of registration with Taxpayer Identification Number No. 144-452-399.
          </p>
          <div className="flex space-x-4">
            <a href="#privacy" className="text-xs text-gray-400 font-light hover:text-gray-900 transition-colors">Privacy Policy</a>
            <span className="text-gray-300">|</span>
            <a href="#terms" className="text-xs text-gray-400 font-light hover:text-gray-900 transition-colors">Terms of Service</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}