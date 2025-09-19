import React from 'react';
import { featuresChecklist } from '../data/assessmentRules';
import { PackagingComposition } from '../types';

interface CompositionStepProps {
  composition: PackagingComposition;
  onCompositionChange: (composition: PackagingComposition) => void;
  onNext: () => void;
  onBack: () => void;
}

export const CompositionStep: React.FC<CompositionStepProps> = ({
  composition,
  onCompositionChange,
  onNext,
  onBack
}) => {
  const handleInputChange = (field: keyof PackagingComposition, value: any) => {
    onCompositionChange({
      ...composition,
      [field]: value
    });
  };

  const handleFeatureToggle = (feature: string) => {
    const newFeatures = composition.features.includes(feature)
      ? composition.features.filter(f => f !== feature)
      : [...composition.features, feature];
    
    handleInputChange('features', newFeatures);
  };

  const loadDemoData = () => {
    onCompositionChange({
      name: 'Clear PET Water Bottle',
      mainMaterial: 'PET',
      color: 'Transparent Clear',
      netWeightPackaging: 25,
      netWeightPET: 23,
      otherPolymersPresent: false,
      polyolefinComponents: true,
      polyolefinWeight: 2,
      features: []
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-medium text-gray-900 mb-2">Step 2.1 - Define packaging composition</h2>
        <p className="text-gray-600">Provide basic information about your packaging</p>
      </div>

      <div className="bg-white border border-gray-300 p-4 mb-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-medium text-gray-900">Basic Information</h3>
          <button
            onClick={loadDemoData}
            className="px-3 py-1 bg-blue-600 text-white border border-blue-600 text-xs"
          >
            Load Demo Data
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Name your packaging *
            </label>
            <input
              type="text"
              value={composition.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full px-2 py-2 border border-gray-300 text-sm focus:border-blue-600 focus:outline-none"
              placeholder="e.g., Clear PET Water Bottle"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Main material *
            </label>
            <select
              value={composition.mainMaterial}
              onChange={(e) => handleInputChange('mainMaterial', e.target.value)}
              className="w-full px-2 py-2 border border-gray-300 text-sm focus:border-blue-600 focus:outline-none"
            >
              <option value="">Select material</option>
              <option value="PET">PET</option>
              <option value="HDPE">HDPE</option>
              <option value="PP">PP</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Color *
            </label>
            <select
              value={composition.color}
              onChange={(e) => handleInputChange('color', e.target.value)}
              className="w-full px-2 py-2 border border-gray-300 text-sm focus:border-blue-600 focus:outline-none"
            >
              <option value="">Select color</option>
              <option value="Transparent Clear">Transparent Clear</option>
              <option value="Light Blue">Light Blue</option>
              <option value="White Opaque">White Opaque</option>
              <option value="Transparent Colored">Transparent Colored</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Net weight of packaging (g) *
            </label>
            <input
              type="number"
              value={composition.netWeightPackaging}
              onChange={(e) => handleInputChange('netWeightPackaging', parseFloat(e.target.value) || 0)}
              className="w-full px-2 py-2 border border-gray-300 text-sm focus:border-blue-600 focus:outline-none"
              placeholder="25"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Net weight of PET (g) *
            </label>
            <input
              type="number"
              value={composition.netWeightPET}
              onChange={(e) => handleInputChange('netWeightPET', parseFloat(e.target.value) || 0)}
              className="w-full px-2 py-2 border border-gray-300 text-sm focus:border-blue-600 focus:outline-none"
              placeholder="23"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Other polymers present?
            </label>
            <div className="flex space-x-2">
              <button
                onClick={() => handleInputChange('otherPolymersPresent', true)}
                className={`px-3 py-1 border text-sm ${
                  composition.otherPolymersPresent
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300'
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => handleInputChange('otherPolymersPresent', false)}
                className={`px-3 py-1 border text-sm ${
                  !composition.otherPolymersPresent
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300'
                }`}
              >
                No
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Polyolefin components present?
            </label>
            <div className="flex space-x-2">
              <button
                onClick={() => handleInputChange('polyolefinComponents', true)}
                className={`px-3 py-1 border text-sm ${
                  composition.polyolefinComponents
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300'
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => handleInputChange('polyolefinComponents', false)}
                className={`px-3 py-1 border text-sm ${
                  !composition.polyolefinComponents
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300'
                }`}
              >
                No
              </button>
            </div>
          </div>

          {composition.polyolefinComponents && (
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Polyolefin weight (g)
              </label>
              <input
                type="number"
                value={composition.polyolefinWeight}
                onChange={(e) => handleInputChange('polyolefinWeight', parseFloat(e.target.value) || 0)}
                className="w-full px-2 py-2 border border-gray-300 text-sm focus:border-blue-600 focus:outline-none"
                placeholder="2"
              />
            </div>
          )}
        </div>
      </div>

      <div className="bg-white border border-gray-300 p-4 mb-4">
        <h3 className="text-base font-medium text-gray-900 mb-2">Features Checklist</h3>
        <p className="text-gray-600 mb-3 text-sm">Select any features that apply to your packaging:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {featuresChecklist.map((feature) => (
            <label key={feature} className="flex items-center space-x-2 cursor-pointer text-sm">
              <input
                type="checkbox"
                checked={composition.features.includes(feature)}
                onChange={() => handleFeatureToggle(feature)}
                className="w-4 h-4 text-blue-600 border-gray-300"
              />
              <span className="text-gray-700">{feature}</span>
            </label>
          ))}
        </div>
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
          disabled={!composition.name || !composition.mainMaterial || !composition.color}
          className="px-4 py-2 bg-blue-600 text-white border border-blue-600 text-sm disabled:bg-gray-300 disabled:border-gray-300 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );
};