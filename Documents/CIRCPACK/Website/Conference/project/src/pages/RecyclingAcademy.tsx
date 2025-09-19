import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Monitor, Calendar, CheckCircle, Award, Mail, ArrowLeft } from 'lucide-react';

const RecyclingAcademy: React.FC = () => {
  const masterclassTopics = [
    'Fundamentals of Packaging Recyclability',
    'Global EPR Systems and Compliance',
    'Material Science for Recycling',
    'Circular Economy Principles',
    'Recycling Technology Innovation',
    'Sustainability Reporting and Claims'
  ];

  const courseFormats = [
    {
      icon: Users,
      title: 'In-Person Workshops',
      description: 'Hands-on learning experiences at our training facilities or your location',
      features: ['Interactive demonstrations', 'Group exercises', 'Networking opportunities', 'Certificate of completion']
    },
    {
      icon: Monitor,
      title: 'Online Learning',
      description: 'Flexible e-learning modules accessible anywhere, anytime',
      features: ['Self-paced learning', '24/7 access', 'Interactive content', 'Progress tracking']
    }
  ];

  const targetAudiences = [
    { title: 'Packaging Engineers', description: 'Design for recyclability best practices' },
    { title: 'Sustainability Managers', description: 'Strategic sustainability planning and reporting' },
    { title: 'Compliance Officers', description: 'Regulatory requirements and risk management' },
    { title: 'Procurement Teams', description: 'Sustainable sourcing and supplier evaluation' },
    { title: 'Marketing Teams', description: 'Sustainability claims and consumer communication' },
    { title: 'Executive Leadership', description: 'Strategic sustainability leadership and decision-making' }
  ];

  const learningOutcomes = [
    'Master the principles of packaging recyclability and design optimization',
    'Navigate complex global EPR systems and regulatory requirements',
    'Understand recycling technologies and their impact on material design',
    'Develop comprehensive sustainability strategies for packaging',
    'Create accurate and compliant sustainability claims',
    'Build internal capabilities for continuous improvement'
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
      <section className="py-20 bg-[#824084] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              ACADEMY
            </h1>
            <p className="text-xl lg:text-2xl text-purple-50 leading-relaxed">
              Comprehensive training and education programs designed to build recycling expertise 
              across your organization through masterclasses and specialized courses.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Formats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Flexible Learning Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from in-person or online learning formats designed to fit your schedule and learning preferences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {courseFormats.map((format, index) => {
              const IconComponent = format.icon;
              return (
                <div key={index} className="space-y-8">
                  <div className="text-center lg:text-left space-y-4">
                    <div className="w-16 h-16 bg-[#824084]/10 rounded-full flex items-center justify-center mx-auto lg:mx-0">
                      <IconComponent size={32} className="text-[#824084]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{format.title}</h3>
                    <p className="text-lg text-gray-600">{format.description}</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                    <div className="space-y-3">
                      {format.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle size={18} className="text-[#824084] flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Masterclass Recycling */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award size={32} className="text-[#824084]" />
                  <h2 className="text-3xl font-bold text-gray-900">Masterclass Recycling</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Intensive, expert-led masterclasses covering advanced topics in recyclability, 
                  regulatory compliance, and sustainable packaging design.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Core Topics</h3>
                <div className="space-y-3">
                  {masterclassTopics.map((topic, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <BookOpen size={18} className="text-[#824084] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recycling Courses */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar size={32} className="text-[#824084]" />
                  <h2 className="text-3xl font-bold text-gray-900">Recycling Courses</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Structured course series designed for different experience levels and roles, 
                  from fundamental concepts to advanced strategic implementation.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Course Levels</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Foundation Level</h4>
                    <p className="text-sm text-gray-600">Basic principles and industry overview</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Intermediate Level</h4>
                    <p className="text-sm text-gray-600">Technical applications and system understanding</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Advanced Level</h4>
                    <p className="text-sm text-gray-600">Strategic planning and leadership</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Who Should Attend
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our training programs are designed for professionals across various roles and industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetAudiences.map((audience, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900">{audience.title}</h3>
                  <p className="text-gray-600">{audience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Learning Outcomes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What you'll achieve through our comprehensive training programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#824084] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#824084]/5 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Build Your Recycling Expertise?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join professionals from leading global brands who trust CIRCPACK Academy 
              for their sustainability education needs.
            </p>
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>Custom Training:</strong> We also offer tailored training programs 
                designed specifically for your organization's needs.
              </p>
              <p className="text-gray-700">
                <strong>Group Discounts:</strong> Special pricing available for teams and 
                multiple registrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#824084] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Navigate Your Recycling Journey?
          </h2>
          <p className="text-xl text-purple-50 mb-8 max-w-2xl mx-auto">
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

export default RecyclingAcademy;