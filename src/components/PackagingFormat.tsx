import React from 'react';
import { Package } from 'lucide-react';
import { packagingFormats } from '../data/assessmentRules';

interface PackagingFormatProps {
  selectedFormat: { material: string; type: string } | null;
  onFormatSelect: (material: string, type: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export const PackagingFormat: React.FC<PackagingFormatProps> = ({
  selectedFormat,
  onFormatSelect,
  onNext,
  onBack
}) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-medium text-gray-900 mb-2">Step 1 - Choose your packaging format</h2>
        <p className="text-gray-600">For what kind of packaging format would you like to assess its recyclability?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {Object.entries(packagingFormats).map(([material, types]) => (
          <div key={material} className="bg-white border border-gray-300 p-3">
            <h3 className="text-base font-medium text-gray-900 mb-2">
              {material}
            </h3>
            <div className="space-y-1">
              {types.map((type) => (
                <button
                  key={`${material}-${type}`}
                  onClick={() => type !== '(Available soon)' ? onFormatSelect(material, type) : null}
                  disabled={type === '(Available soon)'}
                  className={`w-full p-2 text-left border text-sm ${
                    selectedFormat?.material === material && selectedFormat?.type === type
                      ? 'border-blue-600 bg-blue-50 text-blue-900'
                      : type === '(Available soon)'
                      ? 'border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'border-gray-300 bg-white'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-4 py-2 border border-gray-300 text-gray-700 bg-white text-sm"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!selectedFormat}
          className="px-4 py-2 bg-blue-600 text-white border border-blue-600 text-sm disabled:bg-gray-300 disabled:border-gray-300 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );
};