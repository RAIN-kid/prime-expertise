import { notFound } from "next/navigation";
import { opportunities } from "../../../data/opportunities";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default async function ApplyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const job = opportunities.find((j) => j.slug === resolvedParams.slug);

  if (!job) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="bg-white pt-32 pb-20">
        
        {/* LINK YA KURUDI NYUMA KWENYE KAZI MAALUM */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-12">
          <a href={`/opportunities/${job.slug}`} className="inline-flex items-center text-xs font-semibold tracking-widest text-gray-500 uppercase hover:text-gray-900 transition-colors">
            <ArrowLeft className="mr-3 w-4 h-4" />
            Back to {job.title} details
          </a>
        </section>

        {/* HEADER & FORM KAMA YA MWANZO LAKINI INA TITLE YA KAZI */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Maelezo Kushoto */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="text-gray-600 font-light text-lg leading-relaxed space-y-6 mb-12">
                <p>Are you a seasoned professional in international development with a passion for making a positive impact on the world? Look no further! We are currently seeking multidisciplinary experts in all areas of our service, including research, data handling and management, and monitoring and evaluation.</p>
                <p className="font-medium text-gray-900">If you are a highly motivated individual with a commitment to making a positive impact in the world, we want to hear from you! Apply now and join our team in making a difference.</p>
              </div>

              {/* Legal Box */}
              <div className="bg-gray-50 border border-gray-200 p-8">
                <h4 className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-4">Data Protection & Privacy</h4>
                <p className="text-gray-500 font-light text-xs leading-relaxed space-y-2 mb-4">At Prime Expertise, we understand the importance of protecting personal data and take this responsibility very seriously. We assure you that the information you provide via this questionnaire and your CV will be used solely for the purpose of recruitment and will be handled with the utmost respect and confidentiality.</p>
                <a href="#privacy-policy" className="text-xs font-semibold text-gray-900 uppercase tracking-widest hover:text-gray-500 transition-colors">Read Full Policy</a>
              </div>
            </div>

            {/* Fomu ya Usajili Kulia */}
            <div className="lg:col-span-7 bg-white border border-gray-200 p-8 md:p-12 shadow-sm h-fit sticky top-32">
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Register Your CV
              </h3>
              {/* HAPA NDIPO UCHAWI UPO: Inamwambia anaomba kazi gani! */}
              <div className="mb-8 pb-4 border-b border-gray-100 flex items-center">
                <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase mr-3">Applying for:</span>
                <span className="text-sm font-bold text-gray-900 uppercase tracking-widest bg-gray-100 px-3 py-1">{job.title}</span>
              </div>
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col"><label className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">First Name *</label><input type="text" className="border-0 border-b border-gray-300 py-2 px-0 bg-transparent focus:ring-0 focus:border-gray-900 rounded-none transition-colors w-full outline-none" required /></div>
                  <div className="flex flex-col"><label className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">Middle Name *</label><input type="text" className="border-0 border-b border-gray-300 py-2 px-0 bg-transparent focus:ring-0 focus:border-gray-900 rounded-none transition-colors w-full outline-none" required /></div>
                  <div className="flex flex-col"><label className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">Sur Name *</label><input type="text" className="border-0 border-b border-gray-300 py-2 px-0 bg-transparent focus:ring-0 focus:border-gray-900 rounded-none transition-colors w-full outline-none" required /></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col"><label className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">Email *</label><input type="email" className="border-0 border-b border-gray-300 py-2 px-0 bg-transparent focus:ring-0 focus:border-gray-900 rounded-none transition-colors w-full outline-none" required /></div>
                  <div className="flex flex-col"><label className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">Date of Birth *</label><input type="date" className="border-0 border-b border-gray-300 py-2 px-0 bg-transparent focus:ring-0 focus:border-gray-900 rounded-none transition-colors w-full outline-none text-gray-600" required /></div>
                </div>
                <div className="flex flex-col pt-4">
                  <label className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4">CV Upload *</label>
                  <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-none file:border-0 file:text-xs file:font-semibold file:uppercase file:tracking-widest file:bg-gray-100 file:text-gray-900 hover:file:bg-gray-200 file:cursor-pointer transition-colors" required />
                </div>
                <div className="pt-8 border-t border-gray-100 flex flex-col space-y-6">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded-none border-gray-300 text-gray-900 focus:ring-gray-900" required />
                    <span className="text-sm text-gray-600 font-light group-hover:text-gray-900 transition-colors">I Agree to the Terms and Conditions and Data Protection Policy.</span>
                  </label>
                  <button type="submit" className="w-full sm:w-auto bg-gray-900 text-white px-10 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center">
                    Send Application <ArrowRight className="ml-3 w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}