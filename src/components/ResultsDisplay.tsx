import React from 'react';
import { CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react';
import { AssessmentResult } from '../types';

interface ResultsDisplayProps {
  results: AssessmentResult;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  const getRatingColor = (rating: AssessmentResult['recyclabilityRating']) => {
    switch (rating) {
      case 'Excellent': return 'bg-green-100 text-green-800 border-green-200';
      case 'Good': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Fair': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Poor': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Disqualified': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRatingIcon = (rating: AssessmentResult['recyclabilityRating']) => {
    switch (rating) {
      case 'Excellent': return <CheckCircle className="w-8 h-8 text-green-600" />;
      case 'Good': return <CheckCircle className="w-8 h-8 text-blue-600" />;
      case 'Fair': return <AlertTriangle className="w-8 h-8 text-yellow-600" />;
      case 'Poor': return <AlertTriangle className="w-8 h-8 text-orange-600" />;
      case 'Disqualified': return <XCircle className="w-8 h-8 text-red-600" />;
      default: return <Info className="w-8 h-8 text-gray-600" />;
    }
  };

  const getScoreBarWidth = () => {
    if (results.isDisqualified) return '0%';
    const maxScore = 0; // Best possible score
    const minScore = -20; // Reasonable worst case
    const normalizedScore = Math.max(0, (results.totalScore - minScore) / (maxScore - minScore) * 100);
    return `${normalizedScore}%`;
  };

  const getScoreBarColor = () => {
    if (results.isDisqualified) return 'bg-red-500';
    if (results.totalScore >= -2) return 'bg-green-500';
    if (results.totalScore >= -5) return 'bg-blue-500';
    if (results.totalScore >= -8) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Assessment Results</h2>
        
        {/* Overall Score */}
        <div className={`p-6 rounded-lg border-2 ${getRatingColor(results.recyclabilityRating)} mb-6`}>
          <div className="flex items-center space-x-4">
            {getRatingIcon(results.recyclabilityRating)}
            <div>
              <h3 className="text-xl font-bold">Recyclability Rating: {results.recyclabilityRating}</h3>
              <p className="text-lg">
                {results.isDisqualified ? 'Package is disqualified from recycling' : `Total Score: ${results.totalScore} points`}
              </p>
            </div>
          </div>
        </div>

        {/* Score Bar */}
        {!results.isDisqualified && (
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Poor (-20)</span>
              <span>Fair (-8)</span>
              <span>Good (-5)</span>
              <span>Excellent (0)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className={`h-3 rounded-full transition-all duration-500 ${getScoreBarColor()}`}
                style={{ width: getScoreBarWidth() }}
              ></div>
            </div>
            <div className="text-center mt-2 text-sm text-gray-600">
              Current Score: {results.totalScore} points
            </div>
          </div>
        )}

        {/* Disqualification Reasons */}
        {results.isDisqualified && results.disqualificationReasons.length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-red-800 mb-3 flex items-center">
              <XCircle className="w-5 h-5 mr-2" />
              Disqualification Reasons:
            </h4>
            <ul className="space-y-2">
              {results.disqualificationReasons.map((reason, index) => (
                <li key={index} className="text-red-700 flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Component Breakdown */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-800 mb-4">Component Breakdown:</h4>
          <div className="space-y-3">
            {results.componentBreakdown.map((item, index) => (
              <div key={index} className="flex items-start justify-between bg-white p-3 rounded border">
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{item.component}</div>
                  <div className="text-sm text-gray-600">{item.selection}</div>
                  {item.notes && (
                    <div className="text-xs text-blue-600 mt-1 flex items-center">
                      <Info className="w-3 h-3 mr-1" />
                      {item.notes}
                    </div>
                  )}
                </div>
                <div className={`px-3 py-1 rounded text-sm font-medium ${
                  item.deduction === 'disqualified' 
                    ? 'bg-red-100 text-red-700' 
                    : item.deduction === 0
                    ? 'bg-green-100 text-green-700'
                    : 'bg-orange-100 text-orange-700'
                }`}>
                  {item.deduction === 'disqualified' ? 'DISQUALIFIED' : `${item.deduction} pts`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scoring Methodology */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Scoring Methodology</h3>
        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <h4 className="font-semibold mb-2">How the scoring works:</h4>
            <ul className="space-y-1 ml-4">
              <li>• Each packaging component is evaluated based on its impact on recyclability</li>
              <li>• Points are deducted for materials that hinder the recycling process</li>
              <li>• Some materials completely disqualify the package from recycling</li>
              <li>• The total score determines the overall recyclability rating</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Rating Scale:</h4>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
              <div className="bg-green-100 text-green-800 p-2 rounded text-center">
                <div className="font-semibold">Excellent</div>
                <div className="text-xs">0 to -2 points</div>
              </div>
              <div className="bg-blue-100 text-blue-800 p-2 rounded text-center">
                <div className="font-semibold">Good</div>
                <div className="text-xs">-3 to -5 points</div>
              </div>
              <div className="bg-yellow-100 text-yellow-800 p-2 rounded text-center">
                <div className="font-semibold">Fair</div>
                <div className="text-xs">-6 to -8 points</div>
              </div>
              <div className="bg-orange-100 text-orange-800 p-2 rounded text-center">
                <div className="font-semibold">Poor</div>
                <div className="text-xs">Below -8 points</div>
              </div>
              <div className="bg-red-100 text-red-800 p-2 rounded text-center">
                <div className="font-semibold">Disqualified</div>
                <div className="text-xs">Not recyclable</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};