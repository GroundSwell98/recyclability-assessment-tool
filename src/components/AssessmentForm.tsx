import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Info, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { assessmentComponents } from '../data/assessmentRules';
import { AssessmentResult } from '../types';

interface AssessmentFormProps {
  onResultsChange: (results: AssessmentResult) => void;
}

export const AssessmentForm: React.FC<AssessmentFormProps> = ({ onResultsChange }) => {
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  // Demo PET bottle configuration
  const loadDemoCase = () => {
    const demoSelections = {
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
    setSelections(demoSelections);
  };

  const calculateResults = (): AssessmentResult => {
    let totalScore = 0;
    let isDisqualified = false;
    const disqualificationReasons: string[] = [];
    const componentBreakdown: AssessmentResult['componentBreakdown'] = [];

    assessmentComponents.forEach(component => {
      const selectedValue = selections[component.id];
      if (selectedValue) {
        const option = component.options.find(opt => opt.value === selectedValue);
        if (option) {
          if (option.deduction === 'disqualified') {
            isDisqualified = true;
            disqualificationReasons.push(`${component.name}: ${option.label}`);
          } else {
            totalScore += option.deduction;
          }
          
          componentBreakdown.push({
            component: component.name,
            selection: option.label,
            deduction: option.deduction,
            notes: option.notes
          });
        }
      }
    });

    let recyclabilityRating: AssessmentResult['recyclabilityRating'];
    if (isDisqualified) {
      recyclabilityRating = 'Disqualified';
    } else if (totalScore >= -2) {
      recyclabilityRating = 'Excellent';
    } else if (totalScore >= -5) {
      recyclabilityRating = 'Good';
    } else if (totalScore >= -8) {
      recyclabilityRating = 'Fair';
    } else {
      recyclabilityRating = 'Poor';
    }

    return {
      totalScore,
      isDisqualified,
      disqualificationReasons,
      componentBreakdown,
      recyclabilityRating
    };
  };

  useEffect(() => {
    const results = calculateResults();
    onResultsChange(results);
  }, [selections, onResultsChange]);

  const handleSelectionChange = (componentId: string, value: string) => {
    setSelections(prev => ({
      ...prev,
      [componentId]: value
    }));
  };

  const toggleSection = (componentId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [componentId]: !prev[componentId]
    }));
  };

  const getOptionIcon = (deduction: number | 'disqualified') => {
    if (deduction === 'disqualified') return <XCircle className="w-4 h-4 text-red-500" />;
    if (deduction === 0) return <CheckCircle className="w-4 h-4 text-green-500" />;
    if (deduction >= -1) return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
    return <XCircle className="w-4 h-4 text-orange-500" />;
  };

  const getOptionColor = (deduction: number | 'disqualified') => {
    if (deduction === 'disqualified') return 'text-red-700 bg-red-50';
    if (deduction === 0) return 'text-green-700 bg-green-50';
    if (deduction >= -1) return 'text-yellow-700 bg-yellow-50';
    return 'text-orange-700 bg-orange-50';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Package Assessment</h2>
        <button
          onClick={loadDemoCase}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Load PET Bottle Demo
        </button>
      </div>

      <div className="space-y-4">
        {assessmentComponents.map(component => {
          const isExpanded = expandedSections[component.id] || selections[component.id];
          const selectedOption = component.options.find(opt => opt.value === selections[component.id]);
          
          return (
            <div key={component.id} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleSection(component.id)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="font-medium text-gray-900">{component.name}</span>
                  {selectedOption && (
                    <div className="flex items-center space-x-2">
                      {getOptionIcon(selectedOption.deduction)}
                      <span className={`text-sm px-2 py-1 rounded ${getOptionColor(selectedOption.deduction)}`}>
                        {selectedOption.label}
                      </span>
                    </div>
                  )}
                </div>
                {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              {isExpanded && (
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                  <div className="space-y-2">
                    {component.options.map(option => (
                      <label
                        key={option.value}
                        className={`flex items-start space-x-3 p-3 rounded-lg border cursor-pointer hover:bg-white transition-colors ${
                          selections[component.id] === option.value
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 bg-white'
                        }`}
                      >
                        <input
                          type="radio"
                          name={component.id}
                          value={option.value}
                          checked={selections[component.id] === option.value}
                          onChange={(e) => handleSelectionChange(component.id, e.target.value)}
                          className="mt-1 text-blue-600"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            {getOptionIcon(option.deduction)}
                            <span className="font-medium">{option.label}</span>
                            <span className={`text-sm px-2 py-1 rounded font-medium ${
                              option.deduction === 'disqualified' 
                                ? 'bg-red-100 text-red-700' 
                                : option.deduction === 0
                                ? 'bg-green-100 text-green-700'
                                : 'bg-orange-100 text-orange-700'
                            }`}>
                              {option.deduction === 'disqualified' ? 'DISQUALIFIED' : `${option.deduction} points`}
                            </span>
                          </div>
                          {option.notes && (
                            <div className="flex items-start space-x-2 mt-2 text-sm text-gray-600">
                              <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                              <span>{option.notes}</span>
                            </div>
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};