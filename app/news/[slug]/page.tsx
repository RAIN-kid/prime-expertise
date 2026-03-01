import { notFound } from "next/navigation";
import { allPosts } from "../../data/posts";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";

// 1. WEKA NENO 'async' NA 'Promise'
export default async function SinglePostPage({ params }: { params: Promise<{ slug: string }> }) {
  
  // 2. FUNGUA KIFURUSHI CHA PARAMS KWA KUTUMIA 'await'
  const resolvedParams = await params;

  // 3. SASA TAFUTA POST YETU (Itasoma vizuri bila kukosa)
  const post = allPosts.find((p) => p.slug === resolvedParams.slug);

  // KAMA HAIPO, LETA 404
  if (!post) {
    notFound();
  }

  // TAFUTA POST 3 NYINGINE
  const relatedPosts = allPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <Navbar />

      <main className="bg-white pt-32 pb-20">
        
        {/* LINK YA KURUDI NYUMA */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-12">
          <a href="/news" className="inline-flex items-center text-xs font-semibold tracking-widest text-primary uppercase hover:text-gray-900 transition-colors">
            <ArrowLeft className="mr-3 w-4 h-4" />
            Back to News & Resources
          </a>
        </section>

        {/* HEADER YA POST */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-12 max-w-4xl mx-0">
          <span className="text-xs font-semibold tracking-widest text-gray-900 uppercase mb-6 block border border-gray-900 px-3 py-1 w-fit">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-8">
            {post.title}
          </h1>
          
          {/* Mwandishi na Muda */}
          <div className="flex items-center space-x-6 border-b border-gray-200 pb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary text-white flex items-center justify-center text-sm font-bold">
                PE
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-widest text-primary uppercase">Prime Expertise Team</span>
                <span className="text-xs text-primary font-light mt-1">{post.date}</span>
              </div>
            </div>
            <div className="h-8 w-[1px] bg-primary"></div>
            <span className="text-sm text-primary font-light tracking-widest uppercase">{post.readTime}</span>
          </div>
        </section>

        {/* PICHA KUBWA YA POST */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-16">
          <div className="w-full h-[50vh] md:h-[70vh] bg-gray-100 border border-gray-200 overflow-hidden">
            <img 
              src={`/images/${post.image}`} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* MAELEZO KAMILI YA POST (Full Content) */}
         {/* MAELEZO KAMILI YA POST (Full Content) */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-32 max-w-4xl mx-0">
          <div className="text-xl text-gray-600 font-light leading-relaxed mb-10">
            {post.shortDesc}
          </div>
          
          {/* Hapa 'whitespace-pre-wrap' inasaidia paragraph zishuke chini zikikuta mstari mpya (\n) */}
          <div className="text-lg text-gray-700 font-light leading-loose whitespace-pre-wrap">
            {post.fullContent}
          </div>
        </section>

        {/* RELATED POSTS (You might also be interested) */}
        <section className="bg-gray-50 py-24 border-y border-gray-100">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            
            <div className="mb-16 border-b border-gray-200 pb-6">
              <h3 className="text-2xl font-light text-gray-900">You might also be interested</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {relatedPosts.map((related) => (
                <a key={related.id} href={`/news/${related.slug}`} className="group bg-white border border-gray-200 hover:border-gray-900 transition-colors duration-500 cursor-pointer flex flex-col">
                  
                  {/* PICHA TUMEIONGEZA HAPA (Grayscale na Hover Effect) */}
                  <div className="w-full h-48 overflow-hidden bg-gray-100 border-b border-gray-100 relative">
                    <img 
                      src={`/images/${related.image}`} 
                      alt={related.title} 
                      className="w-full h-full object-cover group-hover:scale-105"
                    />
                  </div>

                  {/* MAELEZO YA KADI */}
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4 block">
                      {related.category}
                    </span>
                    <h4 className="text-xl font-medium text-gray-900 mb-4 leading-snug group-hover:text-gray-600 transition-colors line-clamp-3">
                      {related.title}
                    </h4>
                    <p className="text-gray-600 font-light text-sm leading-relaxed mb-8 line-clamp-3 flex-grow">
                      {related.shortDesc}
                    </p>
                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center text-xs font-semibold uppercase tracking-widest text-gray-900">
                      {related.readTime}
                      <ArrowRight className="ml-auto w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Link ya kurudi kwenye News zote */}
            <div className="text-center mt-12">
              <a href="/news" className="inline-flex items-center text-sm font-semibold tracking-widest text-primary uppercase hover:text-gray-500 transition-colors">
                <ArrowLeft className="mr-3 w-4 h-4" />
                All News & Resources
              </a>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
  