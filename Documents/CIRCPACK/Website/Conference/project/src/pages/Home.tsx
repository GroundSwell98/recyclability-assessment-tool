import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Globe, Users, Calendar, Mail } from 'lucide-react';

const Home: React.FC = () => {
  // FMCG Brands for carousel
  const fmcgBrands = [
    'Nestlé', 'Unilever', 'P&G', 'Coca-Cola', 'PepsiCo', 
    'Mars', 'Kraft Heinz', 'General Mills', 'Kellogg\'s', 'Danone',
    'Mondelez', 'Ferrero', 'L\'Oréal', 'Johnson & Johnson', 'Reckitt',
    'Colgate-Palmolive', 'Kimberly-Clark', 'Henkel', 'SC Johnson', 'Church & Dwight'
  ];


  const keyFacts = [
    {
      icon: Globe,
      number: '71',
      label: 'Countries Covered'
    },
    {
      icon: CheckCircle,
      number: '100%',
      label: 'Independent'
    },
    {
      icon: Users,
      number: 'Veolia',
      label: 'Group Backing'
    }
  ];

  const expertiseAreas = [
    {
      title: 'Recyclability Assessments',
      description: 'Test, certify, and ensure compliance with international standards',
      color: 'bg-[#78B94C]',
      hoverColor: 'hover:bg-[#6BA83F]',
      path: '/recyclability-assessments',
      icon: CheckCircle
    },
    {
      title: 'Recycling Intelligence',
      subtitle: 'Systems, EPR & legislation',
      description: 'Global platform covering 71 countries with daily updated data',
      color: 'bg-[#00A6D6]',
      hoverColor: 'hover:bg-[#0095C1]',
      path: '/recycling-intelligence',
      icon: Globe
    },
    {
      title: 'Recycling Academy',
      description: 'Masterclasses and courses for recycling education',
      color: 'bg-[#9E4F9E]',
      hoverColor: 'hover:bg-[#8D458D]',
      path: '/recycling-academy',
      icon: Users
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Logo Section - Optimized for iPad */}
      <section className="pt-8 pb-4 px-8">
        <div className="text-center">
          <img 
            src="/Logo Circpack - RGB.png" 
            alt="CIRCPACK by Veolia" 
            className="h-16 md:h-20 lg:h-24 w-auto mx-auto"
          />
        </div>
      </section>

      {/* Hero Text Section */}
      <section className="px-8 pb-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] mb-4 leading-tight">
            Your compass in the world of recycling
          </h1>
        </div>
      </section>

      {/* Sub Text Section */}
      <section className="px-8 pb-8">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg md:text-xl lg:text-2xl text-[#000000] leading-relaxed">
            CIRCPACK is an independent, global, material-agnostic consultancy specializing in 
            recyclability, recycling intelligence, and training. As part of the Veolia Group, 
            we serve as trusted advisors to major global brands on packaging sustainability.
          </p>
        </div>
      </section>

      {/* Service Areas - Triangle Layout */}
      <section className="px-8 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Inverse Pyramid Layout: Two buttons on top, one centered below */}
          <div className="space-y-8">
            {/* Top Row - Assessments (left) and Intelligence (right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Assessments Button */}
              <Link
                to="/recyclability-assessments"
                className="bg-[#78B94C] hover:bg-[#6BA83F] text-white p-8 md:p-10 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group block"
              >
                <div className="flex items-center justify-between mb-6">
                  <CheckCircle size={40} className="text-white/90" />
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight uppercase">
                    RECYCLABILITY ASSESSMENTS
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Test, certify, and ensure compliance with international standards
                  </p>
                </div>
              </Link>
              
              {/* Intelligence Button */}
              <Link
                to="/recycling-intelligence"
                className="bg-[#00A6D6] hover:bg-[#0095C1] text-white p-8 md:p-10 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group block"
              >
                <div className="flex items-center justify-between mb-6">
                  <Globe size={40} className="text-white/90" />
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight uppercase">
                    RECYCLING INTELLIGENCE
                  </h3>
                  <p className="text-white/90 text-lg font-medium">
                    Systems, EPR & legislation
                  </p>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Global platform covering 71 countries with daily updated data
                  </p>
                </div>
              </Link>
            </div>
            
            {/* Bottom Row - Academy Button Centered */}
            <div className="flex justify-center">
              <div className="w-full lg:w-1/2 lg:max-w-lg">
                <Link
                  to="/recycling-academy"
                  className="bg-[#9E4F9E] hover:bg-[#8D458D] text-white p-8 md:p-10 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group block"
                >
                  <div className="flex items-center justify-between mb-6">
                    <Users size={40} className="text-white/90" />
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight uppercase">
                      RECYCLING ACADEMY
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      Masterclasses and courses for recycling education
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FMCG Brands Carousel */}
      <section className="px-8 py-16 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Horizontal Scrolling Brand Names */}
          <div className="relative">
            <div className="flex space-x-12 animate-scroll">
              {[...fmcgBrands, ...fmcgBrands].map((brand, index) => (
                <div
                  key={`${brand}-${index}`}
                  className="flex-shrink-0 text-2xl md:text-3xl lg:text-4xl font-bold text-[#00A6B2] whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Large CTA Buttons - iPad Optimized */}
      <footer className="bg-gray-900 text-white px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Navigate Your Recycling Journey?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Contact our experts today to discuss how we can help optimize 
              your packaging sustainability strategy.
            </p>
          </div>

          {/* Large CTA Button - Optimized for Touch */}
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="bg-[#FF6600] text-white px-12 py-8 rounded-2xl font-bold text-2xl text-center hover:bg-[#E55A00] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-4 min-h-[100px]"
            >
              <Mail size={32} />
              <span>Get in Touch</span>
            </Link>
          </div>

          {/* Company Info */}
          <div className="text-center mt-12 pt-8 border-t border-gray-700">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=200" 
              alt="CIRCPACK by Veolia" 
              className="h-12 w-auto mx-auto mb-4 opacity-80"
            />
            <p className="text-gray-400 text-sm">
              © 2025 CIRCPACK by Veolia. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;