import React from 'react';
import { Clock, ArrowRight, User, Calendar } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const BlogSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const blogPosts = [
    {
      title: "The Science Behind AI-Powered Mental Health Support",
      excerpt: "Explore how artificial intelligence is revolutionizing mental health care through personalized therapy and emotional recognition.",
      author: "Dr. Alex Chen",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1541588007165-da26f41a1996",
      category: "Research",
      featured: true
    },
    {
      title: "Understanding Cognitive Behavioral Therapy in Digital Formats",
      excerpt: "Learn how traditional CBT techniques are being adapted for AI-driven platforms while maintaining clinical effectiveness.",
      author: "Dr. Sarah Martinez",
      date: "Dec 12, 2024", 
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1591228127927-67346c90add3",
      category: "Therapy"
    },
    {
      title: "Privacy and Security in AI Mental Health Applications",
      excerpt: "A comprehensive look at how mental health data is protected in AI-powered therapy platforms and HIPAA compliance.",
      author: "Dr. Michael Thompson",
      date: "Dec 10, 2024",
      readTime: "4 min read", 
      image: "https://images.unsplash.com/photo-1512291313931-d4291048e7b6",
      category: "Privacy"
    }
  ];

  return (
    <section id="blog" ref={ref} className="py-24 bg-gradient-to-br from-neutral-50 to-healing-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-bg opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Insights &
            <span className="gradient-text"> Research</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Stay informed with the latest research, insights, and developments in AI-powered mental health care 
            from our team of experts and clinical advisors.
          </p>
        </div>

        {/* Featured Post */}
        <div className={`mb-16 transition-all duration-1000 ${inView ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
          <div className="glass rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
                    {blogPosts[0].category}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4 leading-tight">
                  {blogPosts[0].title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-6 text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center space-x-6 text-sm text-neutral-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <button className="btn-primary self-start flex items-center space-x-2 group">
                  <span>Read Full Article</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <div
              key={index}
              className={`glass rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                inView ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 1) * 0.1 + 0.4}s` }}
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3 leading-tight hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-neutral-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <span>{post.date}</span>
                </div>
                <button className="mt-4 text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-2 group">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 ${inView ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.8s'}}>
          <div className="glass rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Stay Updated with Mental Health Insights
            </h3>
            <p className="text-neutral-600 mb-6">
              Subscribe to our newsletter for the latest research, AI developments, and mental health resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 border border-neutral-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-neutral-500 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;