import React, { useState, useEffect } from 'react';
import { Recycle, Package } from 'lucide-react';
import { StepIndicator } from './components/StepIndicator';
import { AccountSetup } from './components/AccountSetup';
import { PackagingFormat } from './components/PackagingFormat';
import { CompositionStep } from './components/CompositionStep';
import { DetailedAttributes } from './components/DetailedAttributes';
import { ResultsStep } from './components/ResultsStep';
import { AssessmentResult, AssessmentData, PackagingComposition, DetailedAttributes as DetailedAttributesType } from './types';
import { assessmentComponents } from './data/assessmentRules';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
    accountType: 'Brand Owner',
    packagingFormat: { material: 'Plastic', type: 'bottle' },
    composition: {
      name: 'Soft drink Utopia v3',
      mainMaterial: 'PET',
      color: 'white transparent',
      netWeightPackaging: 25,
      netWeightPET: 23,
      otherPolymersPresent: false,
      polyolefinComponents: false,
      polyolefinWeight: 0,
      features: []
    },
    detailedAttributes: {
      'main-material': 'pet',
      'color': 'transparent-clear-light-blue',
      'net-weight-packaging': 'open',
      'net-weight-pet': 'open',
      'other-polymers': 'no',
      'polyolefins': 'no',
      'body': 'pet',
      'cap': 'hdpe',
      'sleeve': 'no-sleeve',
      'sleeve-inks': 'no-inks',
      'label': 'pe-pp-opp-label',
      'additives': 'no-additives',
      'liners': 'none',
      'barrier': 'no-barrier',
      'adhesive': 'water-alkali-releasable',
      'tamper-evidence': 'no-wrap',
      'printing': 'no-printing',
      'closure': 'pe-pp-closure',
      'label-inks': 'no-inks-label',
      'other-components': 'no-other'
    },
    willBeFilled: true,
    productViscosity: 'low'
  });

  const [results, setResults] = useState<AssessmentResult>({
    totalScore: 0,
    isDisqualified: false,
    disqualificationReasons: [],
    componentBreakdown: [],
    recyclabilityRating: 'A',
    recyclabilityPercentage: 100
  });

  const stepTitles = ['Before you start', 'Step 1 - Choose your packaging format', 'Step 2 - Define your packaging composition', 'Step 3 - Result'];

  const calculateResults = (): AssessmentResult => {
    let totalScore = 0;
    let isDisqualified = false;
    const disqualificationReasons: string[] = [];
    const componentBreakdown: AssessmentResult['componentBreakdown'] = [];

    assessmentComponents.forEach(component => {
      const selectedValue = assessmentData.detailedAttributes[component.id];
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

    // Calculate recyclability percentage based on score
    let recyclabilityPercentage = 100;
    if (isDisqualified) {
      recyclabilityPercentage = 0;
    } else {
      // Convert score to percentage (0 = 100%, negative scores reduce percentage)
      recyclabilityPercentage = Math.max(0, Math.min(100, 100 + (totalScore * 2)));
    }

    let recyclabilityRating: AssessmentResult['recyclabilityRating'];
    if (isDisqualified || recyclabilityPercentage < 70) {
      recyclabilityRating = 'Not Recyclable';
    } else if (recyclabilityPercentage >= 95) {
      recyclabilityRating = 'A';
    } else if (recyclabilityPercentage >= 80) {
      recyclabilityRating = 'B';
    } else {
      recyclabilityRating = 'C';
    }

    return {
      totalScore,
      isDisqualified,
      disqualificationReasons,
      componentBreakdown,
      recyclabilityRating,
      recyclabilityPercentage
    };
  };

  useEffect(() => {
    if (currentStep === 4) {
      const newResults = calculateResults();
      setResults(newResults);
    }
  }, [currentStep, assessmentData]);

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const restart = () => {
    setCurrentStep(1);
    setAssessmentData({
      accountType: '',
      packagingFormat: { material: '', type: '' },
      composition: {
        name: '',
        mainMaterial: '',
        color: '',
        netWeightPackaging: 0,
        netWeightPET: 0,
        otherPolymersPresent: false,
        polyolefinComponents: false,
        polyolefinWeight: 0,
        features: []
      },
      detailedAttributes: {},
      willBeFilled: false,
      productViscosity: ''
    });
  };

  const updateAssessmentData = (updates: Partial<AssessmentData>) => {
    setAssessmentData(prev => ({ ...prev, ...updates }));
  };

  const updateComposition = (composition: PackagingComposition) => {
    updateAssessmentData({ composition });
  };

  const updateDetailedAttributes = (detailedAttributes: DetailedAttributesType) => {
    updateAssessmentData({ detailedAttributes });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div>
              <h1 className="text-xl font-medium text-gray-900">
                Recyclability Assessment Tool
              </h1>
              <p className="text-gray-600 text-sm">
                Evaluate packaging recyclability with industry-standard classification
              </p>
          </div>
        </div>
      </header>

      {/* Main Layout with Sidebar */}
      <div className="flex">
        {/* Step Indicator Sidebar */}
        <StepIndicator
          currentStep={currentStep}
          totalSteps={4}
          stepTitles={stepTitles}
          layout="sidebar"
          currentStepDisplay={currentStep === 3.5 ? 3 : currentStep}
        />

        {/* Main Content */}
        <main className="flex-1 py-6">
        
        
        {currentStep === 1 && (
          <AccountSetup
            selectedOption={assessmentData.accountType}
            onOptionSelect={(option) => updateAssessmentData({ accountType: option })}
            onNext={nextStep}
          />
        )}

        {currentStep === 2 && (
          <PackagingFormat
            selectedFormat={assessmentData.packagingFormat.material ? assessmentData.packagingFormat : null}
            onFormatSelect={(material, type) => updateAssessmentData({ packagingFormat: { material, type } })}
            onNext={nextStep}
            onBack={prevStep}
          />
        )}

        {currentStep === 3 && (
          <div>
            <CompositionStep
              composition={assessmentData.composition}
              onCompositionChange={updateComposition}
              onNext={() => setCurrentStep(3.5)}
              onBack={prevStep}
            />
          </div>
        )}

        {currentStep === 3.5 && (
          <DetailedAttributes
            attributes={assessmentData.detailedAttributes}
            onAttributeChange={updateDetailedAttributes}
            willBeFilled={assessmentData.willBeFilled}
            productViscosity={assessmentData.productViscosity}
            onFilledChange={(filled) => updateAssessmentData({ willBeFilled: filled })}
            onViscosityChange={(viscosity) => updateAssessmentData({ productViscosity: viscosity })}
            onNext={() => setCurrentStep(4)}
            onBack={() => setCurrentStep(3)}
          />
        )}

        {currentStep === 4 && (
          <ResultsStep
            results={results}
            assessmentData={assessmentData}
            onBack={() => setCurrentStep(3.5)}
            onRestart={restart}
            onEdit={() => setCurrentStep(3)}
          />
        )}
        </main>
      </div>
    </div>
  );
}

export default App;