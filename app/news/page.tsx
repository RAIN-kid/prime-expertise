"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";
import { allPosts } from "../data/posts"; 

export default function NewsPage() {
  const heroPost = allPosts[0];
  const featuredPosts = allPosts.slice(1, 6); 
  const recentPosts = allPosts.slice(6, 10); 

  return (
    <>
      <Navbar />

      <main className="bg-white pt-32 pb-20">
        
        {/* HEADER */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-16">
          <div className="max-w-4xl">
            {/* font-semibold kama kwenye ServicesPage */}
            <h1 className="text-sm font-semibold tracking-widest text-primary uppercase mb-6">
              Insights & Updates
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              News & Resources
            </h2>
            <div className="h-[3px] w-24 bg-primary mb-8 rounded-full"></div>
            <p className="text-xl text-gray-700 font-normal leading-relaxed max-w-2xl">
              Latest publications, reports, and updates from our research and M&E work across East Africa.
            </p>
          </div>
        </section>

        {/* FEATURED POSTS (Jarida Layout) - Imesukwa kufuata border & shadow za ServicesPage */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-32">
          {/* Boksi kuu linabeba border-primary/10 na shadow-sm */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-primary/10 shadow-sm">
            
            {/* Post Kubwa (Hero Article) */}
            <a href={`/news/${heroPost.slug}`} className="lg:col-span-7 group border-b lg:border-b-0 lg:border-r border-primary/10 bg-white hover:bg-gray-50 transition-colors duration-500 cursor-pointer flex flex-col">
              <div className="w-full h-80 md:h-[32rem] overflow-hidden relative bg-gray-100">
                <img 
                  src={`/images/${heroPost.image}`} 
                  alt={heroPost.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-10 md:p-12 flex flex-col flex-grow justify-center">
                <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 block border-2 border-primary/20 bg-primary/5 px-3 py-1 w-fit">
                  {heroPost.category}
                </span>
                <h3 className="text-3xl font-bold text-primary mb-6 leading-tight">
                  {heroPost.title}
                </h3>
                {/* Text imewekwa text-lg ili isomeke vizuri */}
                <p className="text-gray-700 font-normal line-clamp-3 leading-relaxed mb-6 text-lg">
                  {heroPost.shortDesc}
                </p>
                <div className="mt-auto flex items-center text-sm font-semibold uppercase tracking-widest text-primary">
                  Read Publication
                  <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-3 transition-transform duration-300" />
                </div>
              </div>
            </a>

            {/* List ya Post Nyingine */}
            <div className="lg:col-span-5 flex flex-col bg-white">
              <div className="p-8 border-b border-primary/10 bg-gray-50">
                <h4 className="text-sm font-semibold tracking-widest text-primary uppercase">
                  Other Featured Posts
                </h4>
              </div>

              <div className="flex flex-col h-full">
                {featuredPosts.map((post) => (
                  <a key={post.id} href={`/news/${post.slug}`} className="group p-6 border-b border-primary/10 last:border-b-0 hover:bg-gray-50 transition-colors duration-300 flex items-center gap-6 flex-grow">
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden bg-gray-100 border border-primary/10">
                      <img 
                        src={`/images/${post.image}`} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h5 className="text-base md:text-lg font-bold text-primary mb-2 line-clamp-2 leading-snug">
                        {post.title}
                      </h5>
                      {/* Text ilikuwa text-xs hapa, nimeikuza kuwa text-sm ili isomeke fresh */}
                      <p className="text-gray-700 font-normal text-sm line-clamp-2">
                        {post.shortDesc}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* RECENT POSTS GRID */}
        <section className="bg-gray-50 py-24 border-y border-gray-100">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            
            <div className="flex justify-between items-end mb-16 border-b border-primary/10 pb-6">
              <h3 className="text-3xl font-light text-gray-900">Recent Posts</h3>
              <a href="#all-posts" className="group flex items-center text-sm font-semibold uppercase tracking-widest text-primary hover:text-gray-500 transition-colors">
                All Posts
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentPosts.map((post) => (
                <a key={post.id} href={`/news/${post.slug}`} className="group bg-white border-2 border-primary/10 hover:border-primary/50 transition-colors duration-500 cursor-pointer flex flex-col shadow-sm">
                  <div className="w-full h-56 overflow-hidden bg-gray-100 border-b border-primary/10 relative">
                    <img 
                      src={`/images/${post.image}`} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold text-primary mb-4 leading-snug">
                      {post.title}
                    </h4>
                    {/* Text ilikuwa text-sm hapa, nimeikuza kidogo kuwa text-base ili i-balance na title */}
                    <p className="text-gray-700 font-normal text-base leading-relaxed mb-8 line-clamp-3 flex-grow">
                      {post.shortDesc}
                    </p>
                    <div className="mt-auto pt-6 border-t border-primary/10 flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary text-white flex items-center justify-center text-xs font-bold rounded-sm">
                          PE
                        </div>
                        <span className="text-xs font-semibold tracking-widest text-gray-900 uppercase">
                          Prime Expertise
                        </span>
                      </div>
                      <span className="text-xs text-primary font-semibold tracking-widest">{post.readTime}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}