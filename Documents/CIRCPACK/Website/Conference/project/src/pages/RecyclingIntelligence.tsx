import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Database, TrendingUp, Users, CheckCircle, BarChart3, Mail, Calendar, ArrowLeft } from 'lucide-react';

const RecyclingIntelligence: React.FC = () => {
  const platformFeatures = [
    {
      icon: Globe,
      title: '71 Countries Coverage',
      description: 'Comprehensive global database spanning all major markets'
    },
    {
      icon: Database,
      title: 'Daily Updates',
      description: 'Real-time data on EPR systems, legislation, and recycling rates'
    },
    {
      icon: TrendingUp,
      title: 'Market Trends',
      description: 'Latest developments in recycling markets and regulations'
    },
    {
      icon: BarChart3,
      title: 'Performance Metrics',
      description: 'Detailed recycling rates and system performance data'
    }
  ];

  const consultingServices = [
    'Strategic compliance planning across multiple jurisdictions',
    'EPR system navigation and optimization strategies',
    'Regulatory impact assessment and risk analysis',
    'Market entry strategies for new regions',
    'Custom reporting and data analysis',
    'Training on regional recycling requirements'
  ];

  const regions = [
    { name: 'Europe', countries: 27, description: 'Complete EU coverage with detailed EPR data' },
    { name: 'North America', countries: 3, description: 'USA, Canada, and Mexico comprehensive data' },
    { name: 'Asia-Pacific', countries: 23, description: 'Key markets including China, Japan, Australia' },
    { name: 'Latin America', countries: 12, description: 'Growing markets with emerging EPR systems' },
    { name: 'Middle East & Africa', countries: 6, description: 'Strategic markets with developing frameworks' }
  ];

  return (
    <div className="bg-white">
      {/* Back Button */}
      <div className="px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-[#3d85c6] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              INTELLIGENCE
            </h1>
            <p className="text-lg lg:text-xl text-blue-50 mb-4">
              Systems, EPR & Legislation
            </p>
            <p className="text-xl lg:text-2xl text-blue-50 leading-relaxed">
              Navigate the complex landscape of global recycling systems with our comprehensive 
              intelligence platform with daily updated data.
            </p>
          </div>
        </div>
      </section>

      {/* Global Coverage Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#3d85c6]">71</div>
              <div className="text-gray-600">Countries Covered</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#3d85c6]">Daily</div>
              <div className="text-gray-600">Data Updates</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#3d85c6]">100+</div>
              <div className="text-gray-600">EPR Systems</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#3d85c6]">24/7</div>
              <div className="text-gray-600">Platform Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Platform */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Intelligence Platform</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Access comprehensive data and insights through our advanced intelligence platform, 
                  designed to keep you informed of the latest developments in recycling systems worldwide.
                </p>
              </div>

              <div className="space-y-6">
                {platformFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#3d85c6]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent size={24} className="text-[#3d85c6]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Consulting */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Consulting Services</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Beyond data access, our expert consultants provide tailored guidance to help 
                  you navigate complex regulatory landscapes and optimize your recycling strategies.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Consulting Expertise</h3>
                <div className="space-y-4">
                  {consultingServices.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-[#3d85c6] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Global Regional Coverage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive coverage across all major markets with detailed insights into regional recycling systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">{region.name}</h3>
                    <div className="text-2xl font-bold text-[#3d85c6]">{region.countries}</div>
                  </div>
                  <p className="text-gray-600">{region.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What We Track
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive data coverage across all aspects of recycling systems and legislation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'EPR System Requirements',
              'Recycling Rate Data',
              'Legislative Updates',
              'Market Pricing Information',
              'Collection System Details',
              'Processing Capabilities',
              'Compliance Requirements',
              'Industry Best Practices'
            ].map((item, index) => (
              <div key={index} className="bg-[#3d85c6]/5 p-6 rounded-xl text-center">
                <p className="font-medium text-gray-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3d85c6] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Navigate Your Recycling Journey?
          </h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Contact our experts today to discuss how we can help optimize 
            your packaging sustainability strategy.
          </p>
          
          {/* Large CTA Buttons - Optimized for Touch */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <a
              href="mailto:circpack@veolia.com?subject=Contact Request from CIRCPACK Website"
              className="bg-white text-gray-900 px-8 py-6 rounded-2xl font-bold text-xl text-center hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-3 min-h-[80px]"
            >
              <Mail size={28} />
              <span>Be Contacted by Us</span>
            </a>
            
            <Link
              to="/contact"
              className="bg-[#6aa84f] text-white px-8 py-6 rounded-2xl font-bold text-xl text-center hover:bg-[#5d9643] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-3 min-h-[80px]"
            >
              <Calendar size={28} />
              <span>Schedule an Appointment</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecyclingIntelligence;