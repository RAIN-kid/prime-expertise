import { notFound } from "next/navigation";
import { opportunities } from "../../data/opportunities";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default async function SingleOpportunityPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const job = opportunities.find((j) => j.slug === resolvedParams.slug);

  if (!job) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="bg-white pt-32 pb-20">
        
        {/* LINK YA KURUDI NYUMA */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-12">
          <a href="/opportunities" className="inline-flex items-center text-xs font-semibold tracking-widest text-gray-500 uppercase hover:text-gray-900 transition-colors">
            <ArrowLeft className="mr-3 w-4 h-4" />
            Back to all vacancies
          </a>
        </section>

        {/* HEADER YA KAZI */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-16 max-w-4xl mx-0">
          <span className="text-xs font-semibold tracking-widest text-gray-900 uppercase mb-6 block border border-gray-900 px-3 py-1 w-fit">
            Opportunity · {job.type}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
            {job.title}
          </h1>
          <p className="text-sm font-medium tracking-widest text-gray-500 uppercase flex flex-wrap gap-4 items-center">
            <span>{job.location}</span>
            <span className="w-1.5 h-1.5 bg-gray-300"></span>
            <span>{job.experience}</span>
            <span className="w-1.5 h-1.5 bg-gray-300"></span>
            <span>{job.compensation}</span>
          </p>
        </section>

        {/* ROLE OVERVIEW & DETAILS GRID */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-24 max-w-5xl mx-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Maelezo Kushoto (Col 7) */}
            <div className="lg:col-span-7">
              <h3 className="text-2xl font-light text-gray-900 mb-6 pb-4 border-b border-gray-200">Role overview</h3>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                {job.desc}
              </p>
              {/* Kama una fullContent kwenye data, unaweza kuiweka hapa */}
            </div>

            {/* Vijisanduku vya Taarifa Kulia (Col 5) */}
            <div className="lg:col-span-5 bg-gray-50 border border-gray-200 p-8 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">Type</h4>
                <p className="text-gray-900 font-medium capitalize">{job.type}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">Experience</h4>
                <p className="text-gray-900 font-medium">{job.experience}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">Location</h4>
                <p className="text-gray-900 font-medium">{job.location}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">Compensation</h4>
                <p className="text-gray-900 font-medium">{job.compensation}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">Application Deadline</h4>
                <p className="text-gray-900 font-medium">{job.deadline}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">Posted</h4>
                <p className="text-gray-900 font-medium">{job.posted}</p>
              </div>
            </div>

          </div>
        </section>

        {/* CALL TO ACTION - READY TO APPLY? */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-10 text-center">
          <div className="bg-white border-t border-gray-200 pt-20">
            <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">Ready to apply?</h2>
            <p className="text-xl text-gray-500 font-light mb-10 max-w-2xl mx-auto">
              Submit your application through our secure form. You can review the full data protection and privacy details on the next page.
            </p>
            
            {/* HII BUTTON NDIO INAMPELEKA KWENYE FOMU YA HII KAZI MAALUM */}
            <a 
              href={`/opportunities/${job.slug}/apply`} 
              className="inline-flex bg-gray-900 text-white px-10 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-gray-800 transition-colors duration-300 items-center justify-center"
            >
              Apply for this opportunity
              <ArrowRight className="ml-3 w-4 h-4" />
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}