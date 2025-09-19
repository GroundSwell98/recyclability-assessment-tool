import React from 'react';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
  layout?: 'horizontal' | 'sidebar';
  currentStepDisplay?: number; // For handling sub-steps like 3.5
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ 
  currentStep, 
  totalSteps, 
  stepTitles, 
  layout = 'horizontal',
  currentStepDisplay
}) => {
  // Use currentStepDisplay if provided, otherwise use currentStep
  const displayStep = currentStepDisplay ?? currentStep;
  if (layout === 'sidebar') {
    return (
      <div className="w-64 bg-gray-50 border-r border-gray-300 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">STEPS</h2>
        <div className="space-y-4">
          {Array.from({ length: totalSteps }, (_, index) => {
            const stepNumber = index + 1;
            const isCompleted = stepNumber < displayStep;
            const isCurrent = stepNumber === displayStep;
            
            return (
              <div
                key={stepNumber}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  isCurrent
                    ? 'bg-teal-600 text-white'
                    : isCompleted
                    ? 'bg-teal-100 text-teal-800'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                <div
                  className={`w-6 h-6 border border-gray-300 flex items-center justify-center text-xs rounded-full ${
                    isCompleted
                      ? 'bg-teal-600 text-white border-teal-600'
                      : isCurrent
                      ? 'bg-white text-teal-600 border-white'
                      : 'bg-gray-200 text-gray-500 border-gray-300'
                  }`}
                >
                  {isCompleted ? <Check className="w-3 h-3" /> : stepNumber}
                </div>
                <span className="text-sm font-medium">
                  {stepTitles[index]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Horizontal layout (original)
  return (
    <div className="w-full bg-white border-b border-gray-300 px-4 py-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          {Array.from({ length: totalSteps }, (_, index) => {
            const stepNumber = index + 1;
            const isCompleted = stepNumber < displayStep;
            const isCurrent = stepNumber === displayStep;
            
            return (
              <React.Fragment key={stepNumber}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 border border-gray-300 flex items-center justify-center text-sm ${
                      isCompleted
                        ? 'bg-blue-600 text-white border-blue-600'
                        : isCurrent
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-500'
                    }`}
                  >
                    {isCompleted ? <Check className="w-4 h-4" /> : stepNumber}
                  </div>
                  <span
                    className={`mt-1 text-xs text-center max-w-24 ${
                      isCurrent ? 'text-blue-600' : 'text-gray-600'
                    }`}
                  >
                    {stepTitles[index]}
                  </span>
                </div>
                {index < totalSteps - 1 && (
                  <div
                    className={`flex-1 h-px mx-4 ${
                      isCompleted ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  ></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};