import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, FileCheck, Users, Mail, Calendar, ArrowLeft } from 'lucide-react';

const RecyclabilityAssessments: React.FC = () => {
  const certifications = [
    {
      name: 'RecyClass',
      description: 'European standard for plastic packaging recyclability',
      icon: Award
    },
    {
      name: 'CERTIFY',
      description: 'Global certification for recyclable packaging design',
      icon: CheckCircle
    },
    {
      name: 'RECY:CHECK',
      description: 'Comprehensive recyclability verification system',
      icon: FileCheck
    }
  ];

  const benefits = [
    'Compliance with international recycling standards',
    'Third-party validation of recyclability claims',
    'Market access through recognized certifications',
    'Reduced regulatory risk and liability',
    'Enhanced brand reputation and sustainability credentials',
    'Cost optimization through design improvements'
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
      <section className="py-20 bg-[#6aa84f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              RECYCLABILITY ASSESSMENTS
            </h1>
            <p className="text-xl lg:text-2xl text-green-50 leading-relaxed">
              Comprehensive testing, certification, and compliance services to validate 
              your packaging's recyclability and ensure adherence to international standards.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Test & Advice */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Test & Advice</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our comprehensive testing services evaluate your packaging's recyclability 
                  potential and provide actionable recommendations for optimization.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Test</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-[#6aa84f] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Material compatibility and sorting efficiency</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-[#6aa84f] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Contamination levels and quality impact</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-[#6aa84f] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Processing compatibility across recycling facilities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-[#6aa84f] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">End-product quality and market acceptance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Certification */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Certification</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Achieve recognized certifications that validate your packaging's recyclability 
                  and support your sustainability claims with third-party verification.
                </p>
              </div>

              <div className="space-y-6">
                {certifications.map((cert, index) => {
                  const IconComponent = cert.icon;
                  return (
                    <div key={index} className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#6aa84f]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent size={24} className="text-[#6aa84f]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-gray-900">{cert.name}</h3>
                          <p className="text-gray-600">{cert.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Recyclability Assessment
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Gain confidence in your packaging decisions with comprehensive validation and certification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-[#6aa84f] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Assessment Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to evaluating and certifying your packaging's recyclability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#6aa84f] text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Initial Assessment</h3>
              <p className="text-gray-600">Review packaging design and material composition</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#6aa84f] text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Laboratory Testing</h3>
              <p className="text-gray-600">Comprehensive testing in certified facilities</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#6aa84f] text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Results Analysis</h3>
              <p className="text-gray-600">Detailed analysis and improvement recommendations</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#6aa84f] text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Certification</h3>
              <p className="text-gray-600">Official certification and documentation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#6aa84f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Navigate Your Recycling Journey?
          </h2>
          <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
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

export default RecyclabilityAssessments;