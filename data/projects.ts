export type Project = { title: string; category: string; year: number; description: string; tools: string[]; symbol: string };

// Replace or extend these placeholders. Keep the same fields for each project.
export const projects: Project[] = [
  { title: "Mapping Li-ion transport at grain boundaries", category: "ATOMISTIC SIMULATION", year: 2026, description: "A DFT and molecular dynamics study of defect chemistry and ion-migration pathways across model solid-electrolyte interfaces.", tools: ["VASP", "LAMMPS", "Python"], symbol: "Li⁺" },
  { title: "Predicting solid-electrolyte stability", category: "MATERIALS INFORMATICS", year: 2025, description: "A reproducible screening pipeline combining thermodynamic calculations with interpretable machine-learning models.", tools: ["Python", "scikit-learn", "Materials Project"], symbol: "ΔG" },
  { title: "Thermal safety across battery scales", category: "CONTINUUM MODELING", year: 2025, description: "A finite-element model linking cell geometry, heat generation, and boundary conditions to temperature evolution.", tools: ["COMSOL", "MATLAB", "FEM"], symbol: "∇T" },
];
