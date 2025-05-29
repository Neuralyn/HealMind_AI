import React from 'react';
import { Brain, Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Github } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Demo', href: '#demo' },
      { name: 'API Access', href: '#' },
      { name: 'Mobile Apps', href: '#' }
    ],
    Company: [
      { name: 'About Us', href: '#founder' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Partners', href: '#' },
      { name: 'Contact', href: '#' }
    ],
    Resources: [
      { name: 'Blog', href: '#blog' },
      { name: 'Help Center', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Clinical Studies', href: '#' },
      { name: 'Webinars', href: '#' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'HIPAA Compliance', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Cookies', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' }
  ];

  return (
    <footer className="bg-neutral-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-bg opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pre-footer CTA */}
        <div className="py-16 border-b border-neutral-800">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your 
              <span className="gradient-text text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400"> Mental Health Journey?</span>
            </h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
              Join thousands who are already experiencing the benefits of AI-powered emotional support and personalized therapy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-glow">
                Start Your Free Trial
              </button>
              <button className="border-2 border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:border-white/40 hover:bg-white/5">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <span className="text-2xl font-bold">HealMind AI</span>
              </div>
              <p className="text-neutral-300 leading-relaxed mb-6 max-w-md">
                Making emotional healing accessible, intelligent, and deeply human through the power of AI. 
                Clinically validated therapy support available 24/7.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-neutral-300">
                  <Mail className="h-5 w-5 text-primary-400" />
                  <span>hello@healmind.ai</span>
                </div>
                <div className="flex items-center space-x-3 text-neutral-300">
                  <Phone className="h-5 w-5 text-primary-400" />
                  <span>1-800-HEALAI-1</span>
                </div>
                <div className="flex items-center space-x-3 text-neutral-300">
                  <MapPin className="h-5 w-5 text-primary-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-3 rounded-xl bg-neutral-800 hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500 transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg mb-6 text-white">
                  {category}
                </h3>
                <ul className="space-y-4">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-neutral-300 hover:text-primary-400 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-neutral-400 mb-4 md:mb-0">
              <p>&copy; 2024 Neuralyn LLC. All rights reserved.</p>
            </div>
            
            <div className="flex flex-wrap items-center space-x-6 text-sm text-neutral-400">
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>All systems operational</span>
              </span>
              <span>HIPAA Compliant</span>
              <span>SOC 2 Certified</span>
              <span>ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;