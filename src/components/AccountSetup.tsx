import React from 'react';
import { User, UserPlus, Play } from 'lucide-react';

interface AccountSetupProps {
  selectedOption: string;
  onOptionSelect: (option: string) => void;
  onNext: () => void;
}

export const AccountSetup: React.FC<AccountSetupProps> = ({ selectedOption, onOptionSelect, onNext }) => {
  const options = [
    {
      id: 'subscription',
      title: 'I have a platform subscription',
      description: 'Use existing subscription account to access the tool.',
    },
    {
      id: 'self-assessment',
      title: 'Create a Self-Assessment Account',
      description: 'Assessments will be saved and editable.',
    },
    {
      id: 'no-account',
      title: 'Proceed without an account',
      description: 'Perform one assessment, but it will not be saved.',
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-medium text-gray-900 mb-2">Before you start</h2>
        <p className="text-gray-600">Set up account access options</p>
      </div>

      <div className="space-y-3 mb-6">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onOptionSelect(option.id)}
            className={`w-full p-4 border border-gray-300 text-left ${
              selectedOption === option.id
                ? 'border-blue-600 bg-blue-50'
                : 'bg-white'
            }`}
          >
            <div>
              <h3 className={`text-base font-medium mb-1 ${
                  selectedOption === option.id ? 'text-blue-900' : 'text-gray-900'
                }`}>
                  {option.title}
                </h3>
                <p className={`text-sm ${
                  selectedOption === option.id ? 'text-blue-700' : 'text-gray-600'
                }`}>
                  {option.description}
                </p>
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          onClick={onNext}
          disabled={!selectedOption}
          className="px-4 py-2 bg-blue-600 text-white border border-blue-600 text-sm disabled:bg-gray-300 disabled:border-gray-300 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );
};