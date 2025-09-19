import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Globe, Users, Award, CheckCircle, Target, Mail, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Independence',
      description: 'Providing unbiased, expert advice free from conflicts of interest, ensuring our recommendations are always in your best interests.'
    },
    {
      icon: Globe,
      title: 'Global Expertise',
      description: 'Leveraging worldwide knowledge and experience across 71 countries to deliver comprehensive recycling solutions.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Maintaining the highest standards in testing, certification, and consulting services through continuous innovation and improvement.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Focusing on practical, actionable solutions that deliver measurable improvements in recyclability and sustainability performance.'
    }
  ];

  const capabilities = [
    'Material-agnostic testing and assessment capabilities',
    'Recognized certification authority for multiple schemes',
    'Real-time global regulatory intelligence platform',
    'Expert training and education programs',
    'Custom consulting services for complex challenges',
    'Strategic partnership with Veolia Group resources'
  ];

  const milestones = [
    { year: '2018', event: 'CIRCPACK founded as independent consultancy' },
    { year: '2019', event: 'Partnership with Veolia Group established' },
    { year: '2020', event: 'Global platform launched covering 50+ countries' },
    { year: '2021', event: 'Recycling Academy training programs introduced' },
    { year: '2022', event: 'Expanded coverage to 71 countries worldwide' },
    { year: '2023', event: 'Advanced AI-powered intelligence platform deployed' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About CIRCPACK
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Your trusted independent partner in navigating the complex world of packaging recyclability, 
              regulatory compliance, and sustainable packaging solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Independence */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Independent by Design
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                CIRCPACK was founded on the principle that the most valuable advice comes from 
                complete independence. As a material-agnostic consultancy, we provide unbiased 
                recommendations based solely on scientific evidence and regulatory requirements.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our independence allows us to serve as honest brokers between stakeholders, 
                providing trusted guidance to packaging manufacturers, brand owners, and 
                regulatory bodies worldwide.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Shield size={32} className="text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Our Independence Guarantee</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">No conflicts of interest with material suppliers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Unbiased testing and assessment protocols</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Transparent methodology and reporting</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Science-based recommendations only</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Veolia Partnership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Powered by Veolia Group
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              While maintaining complete independence, we benefit from the global reach and 
              technical expertise of the Veolia Group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Network</h3>
              <p className="text-gray-600">Access to Veolia's worldwide operations and market intelligence</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Expertise</h3>
              <p className="text-gray-600">Leveraging decades of recycling and waste management experience</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Leadership</h3>
              <p className="text-gray-600">Backed by a leader in environmental services and circular economy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <IconComponent size={24} className="text-gray-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Our Unique Capabilities
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                CIRCPACK combines independence with unmatched technical capabilities and 
                global reach, making us the ideal partner for complex recycling challenges.
              </p>
            </div>

            <div className="space-y-4">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg">
                  <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in CIRCPACK's evolution as a leading recycling consultancy
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-8 bg-gray-50 p-6 rounded-xl">
                <div className="w-20 h-20 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {milestone.year}
                </div>
                <p className="text-lg text-gray-700">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Navigate Your Recycling Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
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

export default About;