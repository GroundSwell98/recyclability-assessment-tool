import React, { useState } from 'react';
import { Download, Award, FileText, Edit, ChevronDown, Check } from 'lucide-react';
import { AssessmentResult, AssessmentData } from '../types';

interface ResultsStepProps {
  results: AssessmentResult;
  assessmentData: AssessmentData;
  onBack: () => void;
  onRestart: () => void;
  onEdit?: () => void;
}

export const ResultsStep: React.FC<ResultsStepProps> = ({
  results,
  assessmentData,
  onBack,
  onRestart,
  onEdit
}) => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const countries = [
    { code: 'CN', name: 'China' },
    { code: 'IN', name: 'India' },
    { code: 'CA', name: 'California' },
    { code: 'DE', name: 'Germany' },
    { code: 'FR', name: 'France' },
    { code: 'UK', name: 'United Kingdom' },
    { code: 'JP', name: 'Japan' },
    { code: 'AU', name: 'Australia' }
  ];

  const suggestedCountries = ['CN', 'IN', 'CA'];

  const toggleCountry = (countryCode: string) => {
    setSelectedCountries(prev => 
      prev.includes(countryCode) 
        ? prev.filter(code => code !== countryCode)
        : [...prev, countryCode]
    );
  };

  const downloadAnalysis = () => {
    // Simulate analysis download
    alert('Analysis report would be generated and downloaded in a real implementation');
  };

  const getCertification = () => {
    // Simulate certification process
    alert('Recyclass B certification process would be initiated in a real implementation');
  };

  const viewEPRFees = () => {
    // Simulate EPR fees comparison
    alert('EPR fees comparison would be displayed in a real implementation');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* STEP 3 Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">STEP 3</h1>
        <h2 className="text-2xl font-semibold text-gray-800">Your Recyclability Self-Assessment-Results:</h2>
      </div>



      {/* Your packaging section */}
      <div className="bg-white border border-gray-300 p-6 mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Your packaging:</h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium text-gray-900">{assessmentData.composition.name || 'Soft drink Utopia v3'}</span>
            <button
              onClick={onEdit}
              className="flex items-center space-x-1 px-3 py-1 text-blue-600 hover:text-blue-800 text-sm"
            >
              <Edit className="w-4 h-4" />
              <span>Edit</span>
            </button>
          </div>
          
          <div className="text-gray-700">
            <p><strong>Format:</strong> {assessmentData.packagingFormat.material} {assessmentData.packagingFormat.type}</p>
            <p><strong>Main Material:</strong> {assessmentData.composition.mainMaterial}</p>
            <p><strong>Assessment through:</strong> PET bottle white transparent guidelines</p>
          </div>
        </div>
      </div>

      {/* Your results section */}
      <div className="bg-white border border-gray-300 p-6 mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Your results:</h3>
        
        <div className="text-center mb-6">
          <p className="text-lg text-gray-700 mb-6">Thank you for using CIRCPACKs Self-assessment-tool!</p>
        </div>

        {/* Action buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <button
            onClick={downloadAnalysis}
            className="flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <Download className="w-5 h-5" />
            <span>Download the Analysis</span>
          </button>
          
          <button
            onClick={onRestart}
            className="flex items-center justify-center space-x-2 px-4 py-3 bg-gray-600 text-white hover:bg-gray-700 transition-colors"
          >
            <FileText className="w-5 h-5" />
            <span>Start a new analysis</span>
          </button>
          
          <button
            onClick={getCertification}
            className="flex items-center justify-center space-x-2 px-4 py-3 bg-green-600 text-white hover:bg-green-700 transition-colors"
          >
            <Award className="w-5 h-5" />
            <span>Get certified</span>
          </button>
        </div>

        {/* Recyclass B certification */}
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
          <div className="flex items-center space-x-3">
            <Award className="w-8 h-8 text-blue-600" />
            <div>
              <h4 className="text-lg font-semibold text-blue-900">Recyclass B certiciation</h4>
              <p className="text-blue-800">Recyclable Content: 91%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Country specific Analysis */}
      <div className="bg-white border border-gray-300 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Country specific Analysis:</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">EPR fees:</h4>
            <p className="text-gray-600 mb-3">Select the countries you wish to compare fees for:</p>
            
            <div className="relative">
              <button
                onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                className="w-full md:w-80 px-4 py-3 border border-gray-300 rounded-lg bg-white text-left flex items-center justify-between hover:border-gray-400 transition-colors"
              >
                <span className="text-gray-700">
                  {selectedCountries.length === 0 
                    ? 'Select one or more countries' 
                    : `${selectedCountries.length} countr${selectedCountries.length === 1 ? 'y' : 'ies'} selected`
                  }
                </span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${showCountryDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showCountryDropdown && (
                <div className="absolute top-full left-0 right-0 md:right-auto md:w-80 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                  <div className="p-2">
                    <div className="text-sm font-medium text-gray-700 mb-2">Suggestions:</div>
                    <div className="space-y-1">
                      {suggestedCountries.map(countryCode => {
                        const country = countries.find(c => c.code === countryCode);
                        return country ? (
                          <button
                            key={countryCode}
                            onClick={() => toggleCountry(countryCode)}
                            className="w-full flex items-center space-x-2 px-3 py-2 text-left hover:bg-gray-100 rounded"
                          >
                            <div className={`w-4 h-4 border border-gray-300 rounded flex items-center justify-center ${
                              selectedCountries.includes(countryCode) ? 'bg-blue-600 border-blue-600' : ''
                            }`}>
                              {selectedCountries.includes(countryCode) && <Check className="w-3 h-3 text-white" />}
                            </div>
                            <span className="text-gray-700">{country.name}</span>
                          </button>
                        ) : null;
                      })}
                    </div>
                    
                    <div className="border-t border-gray-200 my-2"></div>
                    
                    <div className="space-y-1">
                      {countries.filter(country => !suggestedCountries.includes(country.code)).map(country => (
                        <button
                          key={country.code}
                          onClick={() => toggleCountry(country.code)}
                          className="w-full flex items-center space-x-2 px-3 py-2 text-left hover:bg-gray-100 rounded"
                        >
                          <div className={`w-4 h-4 border border-gray-300 rounded flex items-center justify-center ${
                            selectedCountries.includes(country.code) ? 'bg-blue-600 border-blue-600' : ''
                          }`}>
                            {selectedCountries.includes(country.code) && <Check className="w-3 h-3 text-white" />}
                          </div>
                          <span className="text-gray-700">{country.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {selectedCountries.length > 0 && (
            <div className="mt-4">
              <button
                onClick={viewEPRFees}
                className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-lg"
              >
                Compare EPR Fees for Selected Countries
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="px-6 py-3 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-colors rounded-lg"
        >
          Back
        </button>
        <button
          onClick={onRestart}
          className="px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-lg"
        >
          Start New Analysis
        </button>
      </div>
    </div>
  );
};