import React from 'react';
import { assessmentComponents } from '../data/assessmentRules';
import { DetailedAttributes as DetailedAttributesType } from '../types';

interface DetailedAttributesProps {
  attributes: DetailedAttributesType;
  onAttributeChange: (attributes: DetailedAttributesType) => void;
  willBeFilled: boolean;
  productViscosity: string;
  onFilledChange: (filled: boolean) => void;
  onViscosityChange: (viscosity: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export const DetailedAttributes: React.FC<DetailedAttributesProps> = ({
  attributes,
  onAttributeChange,
  willBeFilled,
  productViscosity,
  onFilledChange,
  onViscosityChange,
  onNext,
  onBack
}) => {
  const [expandedSections, setExpandedSections] = React.useState<Record<string, boolean>>({});
  const [weights, setWeights] = React.useState({
    body: 8.00,
    cap: 2.00,
    sleeve: 1.00,
    label: 1.00
  });

  const handleAttributeChange = (componentId: string, value: string) => {
    onAttributeChange({
      ...attributes,
      [componentId]: value
    });
  };

  const handleWeightChange = (componentId: string, weight: number) => {
    setWeights(prev => ({
      ...prev,
      [componentId]: weight
    }));
  };

  const toggleSection = (componentId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [componentId]: !prev[componentId]
    }));
  };

  const loadDemoAttributes = () => {
    const demoAttributes = {
      body: 'pet',
      cap: 'pp',
      sleeve: 'no-sleeve',
      'sleeve-inks': 'no-inks',
      label: 'pe-pp-opp-label',
      additives: 'no-additives',
      liners: 'none',
      barrier: 'no-barrier',
      adhesive: 'water-alkali-releasable',
      'tamper-evidence': 'no-wrap',
      printing: 'laser-marked',
      closure: 'pe-pp-closure',
      'label-inks': 'retentive-inks-label',
      'other-components': 'no-other'
    };
    onAttributeChange(demoAttributes);
  };


  // Group components by category for better organization
  const componentGroups = {
    'Basic Information': ['main-material', 'color', 'net-weight-packaging', 'net-weight-pet', 'other-polymers', 'polyolefins', 'body'],
    'Primary Components': ['cap', 'sleeve', 'sleeve-inks', 'label', 'label-inks'],
    'Advanced Features': ['additives', 'liners', 'barrier', 'adhesive', 'tamper-evidence', 'printing', 'closure', 'other-components']
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Step Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
          STEP 2 (2/2)
        </h1>
        <p className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
          Define your packaging composition 2/2:
        </p>
      </div>

      {/* Interim Result */}
      <div className="mb-6">
        <h2 className="text-lg font-black text-gray-900 mb-2" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
          Interim result:
        </h2>
        <div className="bg-gray-100 p-4 border border-gray-300">
          <p className="text-sm font-bold text-gray-900 mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>
            Your packaging:
          </p>
          <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>
            Information that has previously been added
          </p>
          <p className="text-sm font-bold text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>
            PET
          </p>
        </div>
      </div>

      {/* Main Component Section */}
      <div className="mb-6">
        <h2 className="text-xl font-black text-red-600 mb-4" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
          Adjust Component Weights & Attributes
        </h2>
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Body */}
            <div className="flex items-center">
              <label className="w-40 text-sm font-bold text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>
                Body*:
              </label>
              <select
                value={attributes.body || 'pet'}
                onChange={(e) => handleAttributeChange('body', e.target.value)}
                className="w-48 px-3 py-2 bg-cyan-500 text-white border border-cyan-500 text-sm ml-4"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                {assessmentComponents.find(c => c.id === 'body')?.options.map(option => (
                  <option key={option.value} value={option.value} className="bg-white text-gray-900">
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="flex items-center space-x-1 ml-4">
                <input
                  type="number"
                  value={weights.body}
                  onChange={(e) => handleWeightChange('body', parseFloat(e.target.value) || 0)}
                  step="0.01"
                  className="w-16 px-2 py-1 text-sm border border-gray-300 text-center"
                  style={{ fontFamily: 'Arial, sans-serif' }}
                />
                <span className="text-xs text-gray-600" style={{ fontFamily: 'Arial, sans-serif' }}>
                  grams
                </span>
              </div>
            </div>

            {/* Cap */}
            <div className="flex items-center">
              <label className="w-40 text-sm font-bold text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>
                Cap*:
              </label>
              <select
                value={attributes.cap || 'pp'}
                onChange={(e) => handleAttributeChange('cap', e.target.value)}
                className="w-48 px-3 py-2 bg-cyan-500 text-white border border-cyan-500 text-sm ml-4"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                {assessmentComponents.find(c => c.id === 'cap')?.options.map(option => (
                  <option key={option.value} value={option.value} className="bg-white text-gray-900">
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="flex items-center space-x-1 ml-4">
                <input
                  type="number"
                  value={weights.cap}
                  onChange={(e) => handleWeightChange('cap', parseFloat(e.target.value) || 0)}
                  step="0.01"
                  className="w-16 px-2 py-1 text-sm border border-gray-300 text-center"
                  style={{ fontFamily: 'Arial, sans-serif' }}
                />
                <span className="text-xs text-gray-600" style={{ fontFamily: 'Arial, sans-serif' }}>
                  grams
                </span>
              </div>
            </div>

            {/* Sleeve */}
            <div className="flex items-center">
              <label className="w-40 text-sm font-bold text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>
                Sleeve*:
              </label>
              <select
                value={attributes.sleeve || 'pe-pp-opp'}
                onChange={(e) => handleAttributeChange('sleeve', e.target.value)}
                className="w-48 px-3 py-2 bg-cyan-500 text-white border border-cyan-500 text-sm ml-4"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                {assessmentComponents.find(c => c.id === 'sleeve')?.options.map(option => (
                  <option key={option.value} value={option.value} className="bg-white text-gray-900">
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="flex items-center space-x-1 ml-4">
                <input
                  type="number"
                  value={weights.sleeve}
                  onChange={(e) => handleWeightChange('sleeve', parseFloat(e.target.value) || 0)}
                  step="0.01"
                  className="w-16 px-2 py-1 text-sm border border-gray-300 text-center"
                  style={{ fontFamily: 'Arial, sans-serif' }}
                />
                <span className="text-xs text-gray-600" style={{ fontFamily: 'Arial, sans-serif' }}>
                  grams
                </span>
              </div>
            </div>

            {/* Label */}
            <div className="flex items-center">
              <label className="w-40 text-sm font-bold text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>
                Label*:
              </label>
              <select
                value={attributes.label || 'pe-pp-opp-label'}
                onChange={(e) => handleAttributeChange('label', e.target.value)}
                className="w-48 px-3 py-2 bg-cyan-500 text-white border border-cyan-500 text-sm ml-4"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                {assessmentComponents.find(c => c.id === 'label')?.options.map(option => (
                  <option key={option.value} value={option.value} className="bg-white text-gray-900">
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="flex items-center space-x-1 ml-4">
                <input
                  type="number"
                  value={weights.label}
                  onChange={(e) => handleWeightChange('label', parseFloat(e.target.value) || 0)}
                  step="0.01"
                  className="w-16 px-2 py-1 text-sm border border-gray-300 text-center"
                  style={{ fontFamily: 'Arial, sans-serif' }}
                />
                <span className="text-xs text-gray-600" style={{ fontFamily: 'Arial, sans-serif' }}>
                  grams
                </span>
              </div>
            </div>

            {/* Additives */}
            <div className="flex items-center">
              <label className="w-40 text-sm font-bold text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>
                Additives:
              </label>
              <select
                value={attributes.additives || 'aa-blockers'}
                onChange={(e) => handleAttributeChange('additives', e.target.value)}
                className="w-48 px-3 py-2 bg-cyan-500 text-white border border-cyan-500 text-sm ml-4"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                {assessmentComponents.find(c => c.id === 'additives')?.options.map(option => (
                  <option key={option.value} value={option.value} className="bg-white text-gray-900">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Liners, Seals Valves */}
            <div className="flex items-center">
              <label className="w-40 text-sm font-bold text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>
                Liners, Seals Valves?:
              </label>
              <select
                value={attributes.liners || 'none'}
                onChange={(e) => handleAttributeChange('liners', e.target.value)}
                className="w-48 px-3 py-2 bg-cyan-500 text-white border border-cyan-500 text-sm ml-4"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                {assessmentComponents.find(c => c.id === 'liners')?.options.map(option => (
                  <option key={option.value} value={option.value} className="bg-white text-gray-900">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Adhesive for label */}
            <div className="flex items-center">
              <label className="w-40 text-sm font-bold text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>
                Adhesive for label:
              </label>
              <select
                value={attributes.adhesive || 'no-adhesive'}
                onChange={(e) => handleAttributeChange('adhesive', e.target.value)}
                className="w-48 px-3 py-2 bg-cyan-500 text-white border border-cyan-500 text-sm ml-4"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                {assessmentComponents.find(c => c.id === 'adhesive')?.options.map(option => (
                  <option key={option.value} value={option.value} className="bg-white text-gray-900">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Barrier */}
            <div className="flex items-center">
              <label className="w-40 text-sm font-bold text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>
                Barrier:
              </label>
              <select
                value={attributes.barrier || 'siox-plasma'}
                onChange={(e) => handleAttributeChange('barrier', e.target.value)}
                className="w-48 px-3 py-2 bg-cyan-500 text-white border border-cyan-500 text-sm ml-4"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                {assessmentComponents.find(c => c.id === 'barrier')?.options.map(option => (
                  <option key={option.value} value={option.value} className="bg-white text-gray-900">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Tamper Evidence wrap */}
            <div className="flex items-center">
              <label className="w-40 text-sm font-bold text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>
                Tamper Evidence wrap?:
              </label>
              <select
                value={attributes['tamper-evidence'] || 'no-wrap'}
                onChange={(e) => handleAttributeChange('tamper-evidence', e.target.value)}
                className="w-48 px-3 py-2 bg-cyan-500 text-white border border-cyan-500 text-sm ml-4"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                {assessmentComponents.find(c => c.id === 'tamper-evidence')?.options.map(option => (
                  <option key={option.value} value={option.value} className="bg-white text-gray-900">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Printing or decoration */}
            <div className="flex items-center">
              <label className="w-40 text-sm font-bold text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>
                Printing or decoration:
              </label>
              <select
                value={attributes.printing || 'laser-marked'}
                onChange={(e) => handleAttributeChange('printing', e.target.value)}
                className="w-48 px-3 py-2 bg-cyan-500 text-white border border-cyan-500 text-sm ml-4"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                {assessmentComponents.find(c => c.id === 'printing')?.options.map(option => (
                  <option key={option.value} value={option.value} className="bg-white text-gray-900">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Inks used on label */}
            <div className="flex items-center">
              <label className="w-40 text-sm font-bold text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>
                Inks used on label?:
              </label>
              <select
                value={attributes['label-inks'] || 'retentive-inks-label'}
                onChange={(e) => handleAttributeChange('label-inks', e.target.value)}
                className="w-48 px-3 py-2 bg-cyan-500 text-white border border-cyan-500 text-sm ml-4"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                {assessmentComponents.find(c => c.id === 'label-inks')?.options.map(option => (
                  <option key={option.value} value={option.value} className="bg-white text-gray-900">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Inks used on sleeve */}
            <div className="flex items-center">
              <label className="w-40 text-sm font-bold text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>
                Inks used on sleeve?:
              </label>
              <select
                value={attributes['sleeve-inks'] || 'retentive-inks'}
                onChange={(e) => handleAttributeChange('sleeve-inks', e.target.value)}
                className="w-48 px-3 py-2 bg-cyan-500 text-white border border-cyan-500 text-sm ml-4"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                {assessmentComponents.find(c => c.id === 'sleeve-inks')?.options.map(option => (
                  <option key={option.value} value={option.value} className="bg-white text-gray-900">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Other components */}
            <div className="flex items-center">
              <label className="w-40 text-sm font-bold text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>
                Other components:
              </label>
              <select
                value={attributes['other-components'] || 'no-other'}
                onChange={(e) => handleAttributeChange('other-components', e.target.value)}
                className="w-48 px-3 py-2 bg-cyan-500 text-white border border-cyan-500 text-sm ml-4"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                {assessmentComponents.find(c => c.id === 'other-components')?.options.map(option => (
                  <option key={option.value} value={option.value} className="bg-white text-gray-900">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Closure */}
            <div className="flex items-center">
              <label className="w-40 text-sm font-bold text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>
                Closure:
              </label>
              <select
                value={attributes.closure || 'no-closure-2'}
                onChange={(e) => handleAttributeChange('closure', e.target.value)}
                className="w-48 px-3 py-2 bg-cyan-500 text-white border border-cyan-500 text-sm ml-4"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                {assessmentComponents.find(c => c.id === 'closure')?.options.map(option => (
                  <option key={option.value} value={option.value} className="bg-white text-gray-900">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Footnotes */}
      <div className="text-center mb-6">
        <p className="text-xs text-gray-600 mb-1" style={{ fontFamily: 'Arial, sans-serif' }}>
          Standard weights based on our expertise ?
        </p>
        <p className="text-xs text-gray-600" style={{ fontFamily: 'Arial, sans-serif' }}>
          * information used in EPR calculator
        </p>
      </div>

      {/* Warning Popup for Medium/High Viscosity */}
      {willBeFilled && (productViscosity === 'Medium' || productViscosity === 'High') && (
        <div className="bg-yellow-100 border border-yellow-300 p-4 mb-6">
          <p className="text-sm font-bold text-yellow-800 mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>
            If yes and medium or high is selected the following test should appear as a warning - POP up:
          </p>
          <p className="text-sm text-yellow-800" style={{ fontFamily: 'Arial, sans-serif' }}>
            Residues in packaging can negatively affect the sortability and the reprocessing of the packaging. Thus, a packaging that contains liquids, gels, creams etc. require an East to Empty test for a certification.
          </p>
        </div>
      )}

      {/* Additional Information */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center space-x-4">
          <label className="w-48 text-sm font-bold text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>
            Will your packaging be filled?
          </label>
          <select
            value={willBeFilled ? 'yes' : 'no'}
            onChange={(e) => onFilledChange(e.target.value === 'yes')}
            className="px-3 py-2 bg-cyan-500 text-white border border-cyan-500 text-sm"
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            <option value="no" className="bg-white text-gray-900">No</option>
            <option value="yes" className="bg-white text-gray-900">Yes</option>
          </select>
        </div>

        {willBeFilled && (
          <div className="flex items-center space-x-4">
            <label className="w-48 text-sm font-bold text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>
              If yes, what viscosity does the product have?
            </label>
            <select
              value={productViscosity}
              onChange={(e) => onViscosityChange(e.target.value)}
              className="px-3 py-2 bg-cyan-500 text-white border border-cyan-500 text-sm"
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              <option value="" className="bg-white text-gray-900">Select viscosity</option>
              {['Low', 'Medium', 'High'].map((viscosity) => (
                <option key={viscosity} value={viscosity} className="bg-white text-gray-900">
                  {viscosity}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-4 py-2 border border-gray-300 text-gray-700 bg-white text-sm"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          Back
        </button>
        <div className="space-x-2">
          <button
            className="px-4 py-2 border border-gray-300 text-gray-700 bg-white text-sm"
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            Add another component
          </button>
          <button
            onClick={onNext}
            className="px-4 py-2 bg-blue-600 text-white border border-blue-600 text-sm"
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            Result
          </button>
        </div>
      </div>
    </div>
  );
};