import { AssessmentComponent } from '../types';

export const assessmentComponents: AssessmentComponent[] = [
  {
    id: 'main-material',
    name: 'Main Material',
    options: [
      { value: 'pet', label: 'PET', deduction: 0 }
    ]
  },
  {
    id: 'color',
    name: 'Colour',
    options: [
      { value: 'white-opaque', label: 'white opaque (food contact only)', deduction: 0, notes: 'Follow white opaque path' },
      { value: 'transparent-clear-light-blue', label: 'transparent clear & light blue', deduction: 0, notes: 'Follow transparent clear path' },
      { value: 'transparent-coloured', label: 'transparent coloured', deduction: 0, notes: 'Follow transparent coloured path' }
    ]
  },
  {
    id: 'net-weight-packaging',
    name: 'Net weight of packaging',
    options: [
      { value: 'open', label: 'open', deduction: 0 }
    ]
  },
  {
    id: 'net-weight-pet',
    name: 'Net weight of PET',
    options: [
      { value: 'open', label: 'open', deduction: 0, notes: 'Represents recyclable plastic content: DIVIDE amount of PET by weight of packaging *100' }
    ]
  },
  {
    id: 'other-polymers',
    name: 'Are there any other polymers present',
    options: [
      { value: 'yes', label: 'Yes', deduction: 'disqualified', notes: 'End of audit' },
      { value: 'no', label: 'No', deduction: 0 }
    ]
  },
  {
    id: 'polyolefins',
    name: 'Does your bottle contain any polyolefins (PE and or PP) components?',
    options: [
      { value: 'yes', label: 'Yes', deduction: 0 },
      { value: 'no', label: 'No', deduction: 0 }
    ]
  },
  {
    id: 'body',
    name: 'Body Material',
    options: [
      { value: 'pet', label: 'PET', deduction: 0, notes: 'Open weight' }
    ]
  },
  {
    id: 'cap',
    name: 'Cap/Closure',
    options: [
      { value: 'pp', label: 'PP', deduction: 0 },
      { value: 'pet', label: 'PET', deduction: -2, notes: 'Needs to be tested' },
      { value: 'hdpe', label: 'HDPE', deduction: 0 },
      { value: 'no-closure', label: 'No closure', deduction: 0 },
      { value: 'non-detaching', label: 'Non detaching or welded closures', deduction: 'disqualified' },
      { value: 'high-density', label: 'Materials with density > 1g/cm³ (e.g highly filled PE; metals)', deduction: 'disqualified' },
      { value: 'pvc', label: 'PVC', deduction: 'disqualified' }
    ]
  },
  {
    id: 'sleeve',
    name: 'Sleeve',
    options: [
      { value: 'no-sleeve', label: 'No sleeve', deduction: 0 },
      { value: 'pe-pp-opp', label: 'PE, PP, OPP', deduction: 0 },
      { value: 'ccl-triple-s', label: "CCL Label GmbH's Triple S, Super Stretch Sleeve", deduction: 0 },
      { value: 'ccl-ecofloat', label: 'CCL Label EcoFloat TM shrink sleeve', deduction: 0 },
      { value: 'klockner-pentalabel', label: "Klöckner Pentaplast's Pentalabel shrink sleeve", deduction: 0 },
      { value: 'klockner-clearfloat', label: "Klöckner Pentaplast's Pentalabel ClearFloat shrink sleeve", deduction: 0 },
      { value: 'sleever-ldpet', label: "Sleever International's LDPET shrink sleeve", deduction: 0 },
      { value: 'fuji-alpha-lw', label: "Fuji Seal Europe's Alpha LW shrink sleeve", deduction: 0 },
      { value: 'fuji-alpha-fa', label: "Fuji Seal Europe's Alpha FA shrink sleeve", deduction: 0 },
      { value: 'low-density-materials', label: 'EPS; foamed PET; LDPET (all with density <0.95g/cm³)', deduction: -1 },
      { value: 'translucent-sleeve', label: 'Full sleeve translucent for IR detection in PE, PP, OPP, EPS, foamed PET, LDPET, all with density <1g/cm³', deduction: -1 },
      { value: 'twin-perforated', label: 'Twin-perforated for household and personal care', deduction: -1 },
      { value: 'heavily-inked', label: 'Heavily inked', deduction: -3 },
      { value: 'pet-washable', label: 'PET with washable inks', deduction: -3 },
      { value: 'metallised', label: 'Metallised materials', deduction: 'disqualified' },
      { value: 'foamed-petg', label: 'Foamed PETG (even with density less than 1g/cm³)', deduction: 'disqualified' },
      { value: 'hinder-recognition', label: 'Sleeves which hinder the recognition of the PET polymer (e.g. too large, metalised, heavily inked)', deduction: 'disqualified' },
      { value: 'high-density-sleeve', label: 'Materials with density >1g/cm³ (e.g. PS, PET, PETG)', deduction: 'disqualified' },
      { value: 'pvc-sleeve', label: 'PVC', deduction: 'disqualified' }
    ]
  },
  {
    id: 'sleeve-inks',
    name: 'Inks on Sleeve',
    options: [
      { value: 'no-inks', label: 'No inks', deduction: 0 },
      { value: 'retentive-inks', label: 'Retentive inks (follow EUPIA Guidelines)', deduction: 0 },
      { value: 'bleeding-inks', label: 'Bleeding inks and/or washable inks', deduction: 'disqualified' },
      { value: 'metallic-inks', label: 'Metallic inks', deduction: 'disqualified' },
      { value: 'toxic-inks', label: 'Toxic or hazardous inks', deduction: 'disqualified' }
    ]
  },
  {
    id: 'label',
    name: 'Label',
    options: [
      { value: 'no-label', label: 'No label', deduction: 0 },
      { value: 'pe-pp-opp-label', label: 'PE, PP, OPP', deduction: 0 },
      { value: 'low-density-label', label: 'EPS; foamed PET (all with density <0.95g/cm³)', deduction: -1 },
      { value: 'lightly-metallised', label: 'Lightly metallised (density <0.95 g/cm³)', deduction: -1 },
      { value: 'paper-no-loss', label: 'Paper without fibreloss', deduction: -1 },
      { value: 'paper-fibreloss', label: 'Paper with fibreloss', deduction: -3 },
      { value: 'pet-washable-label', label: 'PET with washable inks', deduction: -3 },
      { value: 'metallised-label', label: 'Metallised', deduction: 'disqualified' },
      { value: 'foamed-petg-label', label: 'Foamed PETG (even with density less than 1g/cm³)', deduction: 'disqualified' },
      { value: 'hinder-recognition-label', label: 'Labels which hinder the recognition of the PET polymer (e.g. too large, metalised, heavily inked)', deduction: 'disqualified' },
      { value: 'non-detaching-label', label: 'Non-detaching or welded', deduction: 'disqualified' },
      { value: 'high-density-label', label: 'Materials with density > 1g/cm³ (e.g. PS, PET, PETG, PLA)', deduction: 'disqualified' },
      { value: 'pvc-label', label: 'PVC', deduction: 'disqualified' }
    ]
  },
  {
    id: 'additives',
    name: 'Additives',
    options: [
      { value: 'no-additives', label: 'No additives', deduction: 0 },
      { value: 'colormatrix-390-1', label: 'Colormatrix Ultimate 390-1', deduction: -1 },
      { value: 'colormatrix-390-cc1', label: 'ColorMatrix Ultimate 390-CC1', deduction: -1 },
      { value: 'colormatrix-hyguard', label: 'Colormatrix HyGuard Hycat-1', deduction: -1 },
      { value: 'cesa-light-339', label: 'Cesa Light NEA0050339', deduction: -1 },
      { value: 'cesa-light-148', label: 'Cesa Light FEA0050148', deduction: -1 },
      { value: 'cesa-light-249', label: 'Cesa Light FEA0050249', deduction: -1 },
      { value: 'repi-remap', label: 'REPI REMAP UV 00394', deduction: -1 },
      { value: 'penn-colour', label: 'Penn Colour 66UV11964', deduction: -1 },
      { value: 'aa-blockers', label: 'AA blockers', deduction: -1 },
      { value: 'other-stabilizers', label: 'Other UV stabilizers', deduction: -3 },
      { value: 'optical-brighteners', label: 'Other optical brighteners', deduction: -3 },
      { value: 'oxygen-scavengers', label: 'Other oxygen scavengers', deduction: -3 },
      { value: 'biodegradable', label: 'Bio-/oxo-/photodegradable additives', deduction: 'disqualified' },
      { value: 'nanocomposites', label: 'Nanocomposites', deduction: 'disqualified' }
    ]
  },
  {
    id: 'liners',
    name: 'Liners/Seals/Valves',
    options: [
      { value: 'none', label: 'None', deduction: 0 },
      { value: 'pe-pp-tpo', label: 'PE, PE+EVA, PP, TPO (all with density <1g/cm³)', deduction: 0 },
      { value: 'tps-low-density', label: 'TPS with density < 0.95g/cm³', deduction: 0 },
      { value: 'aptar-simplicycle', label: 'APTAR Simplicycle TPS valve', deduction: 0 },
      { value: 'foamed-pet-liner', label: 'Foamed PET (density < 0.95g/cm³)', deduction: -1 },
      { value: 'floatable-silicone', label: 'Floatable silicone (with density less than 1g/cm³)', deduction: -1 },
      { value: 'high-density-liner', label: 'Materials with a density greater than 1g/cm³ (e.g silicone, metals)', deduction: 'disqualified' },
      { value: 'pvc-liner', label: 'PVC liners, seals and valves', deduction: 'disqualified' }
    ]
  },
  {
    id: 'barrier',
    name: 'Barrier',
    options: [
      { value: 'no-barrier', label: 'No barrier', deduction: 0 },
      { value: 'siox-plasma', label: 'SiOx plasma-coating', deduction: 0 },
      { value: 'futura-pet-ptn', label: "Futura Polyester's PET/PTN blend containing 10% PTN", deduction: 0 },
      { value: 'kureha-pga', label: "Kureha Corporation's Kuredux Polyglycolic Acid resin", deduction: 0 },
      { value: 'mitsubishi-mxd6', label: 'Mitsubishi Gas Chemical MXD6 co-injected', deduction: 0 },
      { value: 'sidel-actis', label: 'Sidel Actis TM', deduction: 0 },
      { value: 'sidel-actis-lite', label: 'Sidel Actis TM Lite', deduction: 0 },
      { value: 'carbon-plasma', label: 'Carbon plasma-coating', deduction: -1 },
      { value: 'pa-mxd6-low', label: 'PA-MXD6 multilayer with <5wt% PA-MXD6 and no tie layers', deduction: -1 },
      { value: 'pga-multilayer', label: 'PGA multilayer', deduction: -1 },
      { value: 'ptn-alloy', label: 'PTN alloy', deduction: -1 },
      { value: 'bindox', label: 'BindOx R <3wt%', deduction: -1 },
      { value: 'pa-mxd6-high', label: 'PA-MXD6 multilayer with more than 5wt% PA-MXD6 or with tie layers', deduction: -3 }
    ]
  },
  {
    id: 'adhesive',
    name: 'Adhesive for Label',
    options: [
      { value: 'no-adhesive', label: 'No adhesive', deduction: 0 },
      { value: 'water-alkali-releasable', label: 'Water or alkali releasable at 70-90°C', deduction: 0 },
      { value: 'avery-dennison', label: 'AVERY DENNISON CleanFlake TM', deduction: 0 },
      { value: 'ccl-ld-psl', label: 'CCL Label LD-PSL', deduction: 0 },
      { value: 'ccl-ld-psl-plus', label: 'CCL Label LD-PSL+', deduction: 0 },
      { value: 'ccl-ecostram', label: 'CCL Label Ecostram LV PSL', deduction: 0 },
      { value: 'upm-raflatac', label: 'UPM Raflatac PP Clear Top Coated / RW65C', deduction: 0 },
      { value: 'mcc-clear', label: 'MCC RecycLABEL clear 11581 LD-PSL', deduction: 0 },
      { value: 'mcc-white', label: 'MCC RecycLABEL white 11582 LD-PSL', deduction: 0 },
      { value: 'water-alkali-soluble', label: 'Water or alkali soluble at 70-90°C', deduction: -3 },
      { value: 'other-adhesives', label: 'Any other adhesives', deduction: -3 }
    ]
  },
  {
    id: 'tamper-evidence',
    name: 'Tamper Evidence Wrap',
    options: [
      { value: 'no-wrap', label: 'No tamper evidence wrap', deduction: 0 },
      { value: 'entirely-removed', label: 'All if entirely removed by the consumers', deduction: 0 },
      { value: 'pe-pp-opp-wrap', label: 'PE, PP, OPP', deduction: 0 },
      { value: 'low-density-wrap', label: 'EPS, foamed PET, LDPET (all with density <0.95 g/cm³)', deduction: -1 },
      { value: 'metallised-wrap', label: 'Metallised materials', deduction: 'disqualified' },
      { value: 'foamed-petg-wrap', label: 'Foamed PETG (even with density less than 1g/cm³)', deduction: 'disqualified' },
      { value: 'high-density-wrap', label: 'Materials with density > 1g/cm³ (e.g metal, PS, PET, PETG)', deduction: 'disqualified' },
      { value: 'cpet-washable', label: 'C-PET with washable inks', deduction: 'disqualified' },
      { value: 'pvc-wrap', label: 'PVC tamper evidence wrap', deduction: 'disqualified' }
    ]
  },
  {
    id: 'printing',
    name: 'Printing or Decoration',
    options: [
      { value: 'no-printing', label: 'No direct printing', deduction: 0 },
      { value: 'laser-marked', label: 'Laser marked for production and expiry dates', deduction: 0 },
      { value: 'date-printed', label: 'Production or expiry date (directly printed)', deduction: -1 },
      { value: 'other-printing', label: 'Any other printing', deduction: 'disqualified' }
    ]
  },
  {
    id: 'closure',
    name: 'Closure',
    options: [
      { value: 'no-closure-2', label: 'No closure', deduction: 0 },
      { value: 'pe-pp-closure', label: 'PE, PP', deduction: 0 },
      { value: 'pet-closure', label: 'PET', deduction: -3, notes: 'to be tested' },
      { value: 'non-detaching-closure', label: 'Non-detaching or welded closure', deduction: 'disqualified' },
      { value: 'high-density-closure', label: 'Materials with density > 1g/cm³ (e.g. highly filled PE, metals)', deduction: 'disqualified' },
      { value: 'pvc-closure', label: 'PVC closure', deduction: 'disqualified' }
    ]
  },
  {
    id: 'label-inks',
    name: 'Inks Used on Labels',
    options: [
      { value: 'no-inks-label', label: 'No inks', deduction: 0 },
      { value: 'retentive-inks-label', label: 'Retentive inks (follow EUPIA Guidelines)', deduction: 0 },
      { value: 'bleeding-inks-label', label: 'Bleeding inks and/or washable inks', deduction: 'disqualified' },
      { value: 'metallic-inks-label', label: 'Metallic inks', deduction: 'disqualified' },
      { value: 'toxic-inks-label', label: 'Toxic or hazardous inks', deduction: 'disqualified' }
    ]
  },
  {
    id: 'other-components',
    name: 'Other Components',
    options: [
      { value: 'no-other', label: 'No other components', deduction: 0 },
      { value: 'pe-pp-separable', label: 'PE, PP (separable)', deduction: 0 },
      { value: 'non-po-separable', label: 'Non-PO material (separable and all with density < 1g/cm³)', deduction: -1 },
      { value: 'coloured-pet', label: 'Coloured PET', deduction: -3 },
      { value: 'non-detaching-other', label: 'Non-detaching or welded materials', deduction: 'disqualified' },
      { value: 'high-density-other', label: 'Materials with density > 1g/cm³ (e.g highly filled PE; metals)', deduction: 'disqualified' }
    ]
  }
];

export const packagingFormats = {
  "Plastics": ["Bottle", "Jar", "Tray", "Pouch", "Can"],
  "Aluminium": ["Can", "Tube", "Tray", "Aerosol", "Box"],
  "Steel & Tin": ["Small", "Large"],
  "Paper & Carton": ["(Available soon)"],
  "Glass": ["Bottle", "Jar", "Tray"],
  "Beverage Cartons": ["(Available soon)"]
};

export const featuresChecklist = [
  "Size: <4 cm or >5L",
  "Large labels",
  "Full body sleeves",
  "Perforated sleeves",
  "Multi-layer structures",
  "Metallisation",
  "Non-NIR detectable colours",
  "Printing >50% or dark colours",
  "Different plastics on front/back",
  "Rigid/flexible mix",
  "Hard to compact shape"
];