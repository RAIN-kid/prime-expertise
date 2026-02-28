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
        
        {/* LINK YA KURUDI NYUMA - text-sm font-bold */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-12">
          <a href="/opportunities" className="inline-flex items-center text-sm font-bold tracking-widest text-primary uppercase hover:text-gray-900 transition-colors">
            <ArrowLeft className="mr-3 w-4 h-4" />
            Back to all vacancies
          </a>
        </section>

        {/* HEADER YA KAZI - Sharp corners, bold title */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-16 max-w-4xl mx-0">
          <span className="text-sm font-bold tracking-widest text-primary uppercase mb-6 block border-2 border-primary/20 bg-primary/5 px-3 py-1 w-fit rounded-none">
            Opportunity · {job.type}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            {job.title}
          </h1>
          <p className="text-sm font-bold tracking-widest text-gray-500 uppercase flex flex-wrap gap-4 items-center">
            <span>{job.location}</span>
            <span className="w-2 h-2 bg-primary"></span>
            <span>{job.experience}</span>
            <span className="w-2 h-2 bg-primary"></span>
            <span>{job.compensation}</span>
          </p>
        </section>

        {/* ROLE OVERVIEW & DETAILS GRID */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-24 max-w-5xl mx-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Maelezo Kushoto - font-normal text-lg */}
            <div className="lg:col-span-7">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-primary/10">Role overview</h3>
              <p className="text-lg text-gray-700 font-normal leading-relaxed mb-8">
                {job.desc}
              </p>
            </div>

            {/* Sidebar ya Taarifa - Sharp border, no shadows */}
            <div className="lg:col-span-5 bg-white border-2 border-primary/10 p-8 grid grid-cols-2 gap-8 rounded-none">
              <div>
                <h4 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Type</h4>
                <p className="text-gray-900 font-bold text-lg capitalize">{job.type}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Experience</h4>
                <p className="text-gray-900 font-bold text-lg">{job.experience}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Location</h4>
                <p className="text-gray-900 font-bold text-lg">{job.location}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Compensation</h4>
                <p className="text-gray-900 font-bold text-lg">{job.compensation}</p>
              </div>
              <div className="col-span-2">
                <h4 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Application Deadline</h4>
                <p className="text-gray-900 font-bold text-lg">{job.deadline}</p>
              </div>
              <div className="col-span-2">
                <h4 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Posted</h4>
                <p className="text-gray-900 font-bold text-lg">{job.posted}</p>
              </div>
            </div>

          </div>
        </section>

        {/* CALL TO ACTION - Sharp button, no shadows */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-10 text-center">
          <div className="bg-gray-50 border-t-2 border-primary/10 pt-20 pb-12 px-6 rounded-none">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Ready to apply?</h2>
            <p className="text-xl text-gray-700 font-normal mb-10 max-w-2xl mx-auto">
              Submit your application through our secure form. You can review the full data protection and privacy details on the next page.
            </p>
            
            <a 
              href={`/opportunities/${job.slug}/apply`} 
              className="inline-flex bg-primary border-2 border-primary text-white px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-transparent hover:text-primary transition-colors duration-300 items-center justify-center rounded-none"
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