export interface ComponentOption {
  value: string;
  label: string;
  deduction: number | 'disqualified';
  notes?: string;
}

export interface AssessmentComponent {
  id: string;
  name: string;
  options: ComponentOption[];
}

export interface AssessmentResult {
  totalScore: number;
  isDisqualified: boolean;
  disqualificationReasons: string[];
  componentBreakdown: Array<{
    component: string;
    selection: string;
    deduction: number | 'disqualified';
    notes?: string;
  }>;
  recyclabilityRating: 'A' | 'B' | 'C' | 'Not Recyclable';
  recyclabilityPercentage: number;
}

export interface PackagingComposition {
  name: string;
  mainMaterial: string;
  color: string;
  netWeightPackaging: number;
  netWeightPET: number;
  otherPolymersPresent: boolean;
  polyolefinComponents: boolean;
  polyolefinWeight: number;
  features: string[];
}

export interface DetailedAttributes {
  [key: string]: string;
}

export interface AssessmentData {
  accountType: string;
  packagingFormat: { material: string; type: string };
  composition: PackagingComposition;
  detailedAttributes: DetailedAttributes;
  willBeFilled: boolean;
  productViscosity: string;
}