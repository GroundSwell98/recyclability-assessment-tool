import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=200" 
              alt="CIRCPACK by Veolia" 
              className="h-10 w-auto"
            />
            <p className="text-gray-600 text-sm leading-relaxed">
              Independent, global, material-agnostic consultancy specializing in recyclability, 
              recycling intelligence, and training. Part of the Veolia Group.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Recyclability Assessments</li>
              <li>Recycling Intelligence</li>
              <li>Recycling Academy</li>
              <li>Test & Advice</li>
              <li>Certification</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Contact</h4>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>circpack@veolia.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Global Coverage - 71 Countries</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 CIRCPACK by Veolia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;