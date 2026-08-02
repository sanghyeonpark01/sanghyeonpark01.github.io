export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  status: string;
  href: string;
  image: string;
  imageAlt: string;
};

export const publications: Publication[] = [
  {
    title: "Data-driven design strategies for chemically stabilizing cathode–coating interfaces employing interpretable machine learning",
    authors: "Sang-Hyeon Park, Donghee Kang, Hyun-Ki Yoon, Yusong Choi, and Jongseo Lee",
    venue: "J. Mater. Chem. A (2026) 14 (39): 26011–26025.",
    year: 2026,
    status: "Paper",
    href: "https://doi.org/10.1039/D6TA02648F",
    image: "/publications/jmca-cathode-coating-ml.png",
    imageAlt: "Workflow for data-driven cathode–coating interface screening and interpretable machine learning",
  },
  {
    title: "First-Principles Insights into the Role of 3d Transition-Metal Substituents in Intercalating LiₓFeF₃ Cathode Materials for Lithium-Ion Batteries",
    authors: "Sang-Hyeon Park, June-Ho Lim, Tae-Young Ahn, Hyun-Ki Yoon, Jongseo Lee, and Heesook Roh",
    venue: "ACS Applied Energy Materials, 8, 14712–14724",
    year: 2025,
    status: "Article",
    href: "https://doi.org/10.1021/acsaem.5c02473",
    image: "/publications/acs-lixfef3-substituents.png",
    imageAlt: "Graphical summary of 3d transition-metal substitution in lithium-intercalated iron fluoride",
  },
];
