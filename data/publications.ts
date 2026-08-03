export type Publication = {
  title: string;
  authors: string;
  venue?: string;
  year: number;
  status: string;
  href?: string;
  image: string;
  imageAlt: string;
  abstract?: string;
};

export const publications: Publication[] = [
  {
    title: "Data-driven design strategies for chemically stabilizing cathode–coating interfaces employing interpretable machine learning",
    authors: "Sang-Hyeon Park, Donghee Kang, Hyun-Ki Yoon, Yusong Choi, and Jongseo Lee*",
    venue: "J. Mater. Chem. A (2026) 14 (39): 26011–26025.",
    year: 2026,
    status: "Paper",
    href: "https://doi.org/10.1039/D6TA02648F",
    image: "/publications/jmca-cathode-coating-ml.png",
    imageAlt: "Workflow for data-driven cathode–coating interface screening and interpretable machine learning",
    abstract: "The chemical stability of cathode–coating interfaces plays a critical role in enabling high-energy, high-voltage battery systems; however, the key descriptors governing interfacial compatibility remain poorly understood. In this study, we construct a large-scale thermodynamic reactivity landscape comprising 41,372 cathode–coating pairs and systematically map their solid–solid interfacial reaction energies. Statistical analysis reveals distinct chemistry-dependent trends, highlighting the dominant role of anion compatibility in determining interfacial stability. In particular, cross-anion mismatches, including oxide–fluoride pairings, significantly increase the thermodynamic driving force for interfacial phase reconstruction, whereas fluorine-based coating chemistries, especially the MF₂-type alkaline-earth metal fluorides, generally suppress reactivity relative to oxide counterparts. Oxide coatings further exhibit nonlinear, descriptor-coupled behavior, in which high-valence cations tend to enhance interfacial stability, albeit with increased sensitivity to the cathode state of charge. To interrogate the high-dimensional descriptor space, we develop a hierarchical feature framework and train interpretable machine-learning models that achieve strong predictive and reliable performance in the considered chemical domain. These results suggest that interfacial reactivity is largely governed by specific physicochemical descriptors as quantitatively elucidated using SHAP analysis. Collectively, this work establishes a descriptor-driven compatibility framework for the rational design of cathode–coating interfaces in next-generation high-voltage energy storage systems.",
  },
  {
    title: "Impact reliability of multilayer stacked-cell thermal batteries using 3D FEM simulation and gas gun test validation",
    authors: "Jaehun Kim†, Hyungu Kang†, Tae-Young Ahn, Sang-Hyeon Park, Minu Kim, Seung-Ho Kang, Heesook Roh, Sunghak Lee, and Hyoung Seop Kim*",
    venue: "Journal of Materials Research and Technology, 42, 5060–5072",
    year: 2026,
    status: "Article",
    href: "https://doi.org/10.1016/j.jmrt.2026.04.157",
    image: "/publications/jmrt-impact-fem-gas-gun.png",
    imageAlt: "Gas gun impact configuration and multilayer stacked-cell thermal battery model",
    abstract: "Thermal batteries in guided projectiles must withstand extreme mechanical loading, yet most modeling approaches neglect their multilayered cell architecture. In this study, we developed a 3D finite element framework incorporating actual donut-shaped unit cells, casing, epoxy molding, and terminal pins to analyze internal stress evolution during high-velocity impact. Gas gun experiments at approximately 145 m/s against Pb targets were performed for direct validation. The FEM predictions showed strong agreement with experimental deceleration–time curves and penetration depths, confirming the framework's reliability. Mechanistic analysis revealed stress concentration in the lower stacked cells, particularly at the inner rims, but peak values remained below the reference compressive limit derived from the compaction load and validated by additional compression tests. Though localized stress values varied between simplified and detailed models depending on the inclusion of terminal pins and epoxy molding, the overall deceleration response and penetration behavior remained consistent. These results demonstrate a validated FEM–experiment methodology for evaluating and improving the impact reliability of thermal batteries, offering guidance for material-level design of resilient stacked-cell architectures in defense applications.",
  },
  {
    title: "First-Principles Insights into the Role of 3d Transition-Metal Substituents in Intercalating LiₓFeF₃ Cathode Materials for Lithium-Ion Batteries",
    authors: "Sang-Hyeon Park, June-Ho Lim, Tae-Young Ahn, Hyun-Ki Yoon, Jongseo Lee*, and Heesook Roh*",
    venue: "ACS Applied Energy Materials, 8, 14712–14724",
    year: 2025,
    status: "Article",
    href: "https://doi.org/10.1021/acsaem.5c02473",
    image: "/publications/acs-lixfef3-substituents.png",
    imageAlt: "Graphical summary of 3d transition-metal substitution in lithium-intercalated iron fluoride",
    abstract: "Despite the high theoretical capacity and operating voltage of FeF₃ cathode materials, their widespread application is impeded mainly by low electronic conductivity, resulting in substantial ohmic polarization. Although numerous studies have explored composite engineering using conductive agents, studies on atomic substitutions aimed at tuning the intrinsic properties of FeF₃ remain relatively scarce. Hence, this study systematically investigates the role of transition-metal substituents (Ti, V, Mn, Cr, Co, and Ni) on the crystallographic and electronic properties of lithiated LiₓFeF₃, as well as the intercalation voltages and thermodynamic stabilities. Based on first-principles calculations, the V, Mn, and Co substituents are predicted to effectively reduce the band gap. However, the Cr substituent is responsible for unstable cyclability owing to Jahn–Teller distortion in the lithiated phase. Moreover, Ti and V significantly decrease the discharge potential, whereas Ni thermodynamically facilitates the formation of fluorine vacancies in the lattice. Based on the screening factors and results, Mn and Co are identified as the most promising substituents for enhancing the electrochemical performance of LiₓFeF₃. The findings provide theoretical guidelines for the rational design of high-performance trirutile LiₓFeF₃ cathode materials.",
  },
  {
    title: "Comparative study of Ta and Ga doping effects on Li₇La₃Zr₂O₁₂ garnet electrolytes for advanced thermal battery applications",
    authors: "Hyungu Kang, Heesook Roh, Jongseo Lee, Sang-Hyeon Park, Joohyeon Park, Heonjae Jeong, Hyun-Ki Yoon, Tae-Young Ahn*, and Yusong Choi*",
    venue: "RSC Advances, 15, 27345–27355",
    year: 2025,
    status: "Paper",
    href: "https://doi.org/10.1039/D5RA03917G",
    image: "/publications/rsc-llzo-thermal-battery.png",
    imageAlt: "High-temperature discharge performance comparison of tantalum- and gallium-doped LLZO thermal batteries",
    abstract: "The paradigm shift from conventional molten-salt electrolytes to solid-state garnet-type Li₇La₃Zr₂O₁₂ (LLZO) electrolytes in thermal batteries represents a critical advancement in high-temperature energy-storage systems. This study evaluated Ta- and Ga-doped LLZO electrolytes for FeS₂/Li–Si thermal batteries, focusing on their structural stability and electrochemical performance at 500 °C. While Ga-doped LLZO exhibited superior ionic conductivity at 25 °C, Ta-doped LLZO demonstrated exceptional high-temperature stability. Ta-doped LLZO cells achieved longer discharge durations and higher energy densities than Ga-doped LLZO cells, which is attributed to the retained cubic phase and minimised interfacial degradation. Conversely, Ga-doped LLZO exhibited cubic-to-tetragonal phase transitions, Ga precipitation, and formation of impurities such as Ga₂O₃ and Li–Ga alloys, leading to 54% loss of ionic conductivity post-discharge. These results contribute valuable insights for the optimisation of solid-state electrolytes in thermal battery systems, suggesting that conventional room-temperature performance metrics may not translate directly to elevated-temperature operations.",
  },
];

export const preprints: Publication[] = [
  {
    title: "Stabilizing Interfaces in Magnesium Solid-State Batteries via High-throughput Coating Design",
    authors: "Sang-Hyeon Park*, Changseong Youn, June-Ho Lim, Gyeongbeom Kim, Yusong Choi, Hyun-Ki Yoon, and Jongseo Lee*",
    year: 2026,
    status: "Under review",
    image: "/publications/preprint-park-magnesium-interfaces.png",
    imageAlt: "Electrochemical stability windows of representative magnesium solid electrolytes",
    abstract: "To meet the growing demand for affordable and safe electrochemical energy storage systems with high energy density, all-solid-state magnesium-ion batteries (ASSMBs) have emerged as promising candidates, because magnesium is naturally abundant and offers high volumetric capacity. However, the electrochemical stability of magnesium solid electrolytes (SEs), as well as their chemical compatibility with magnesium cathode materials, remains insufficiently investigated. Herein, we assess the electrochemical stability window (ESW) of magnesium SEs and evaluate their interfacial reactivity with magnesium cathodes by calculating the decomposition energy for SE–cathode pairs. The results show that the mismatch between the ESW of magnesium SEs and cathode requirements should be addressed, underscoring the need for protective strategies. Accordingly, a high-throughput screening for relevant coating materials is conducted, identifying 14 experimentally observed materials from 19,098 magnesium-containing inorganic compounds. These coating materials are further evaluated by computing their migration barriers for magnesium-ion hopping, excluding an additional seven compounds with exceptionally high vacancy-diffusion barriers. This work provides fundamental insights into magnesium solid electrolytes and their interfacial stability and establishes a rational design framework to enhance overall cell performance in ASSMBs.",
  },
  {
    title: "Transferable descriptor-guided interfacial thermodynamics and electrochemical stability for stable solid-state alkali battery interfaces",
    authors: "Sang-Hyeon Park, Hyunjin Won, Sanghwi Han, Hyun-Ki Yoon, and Jongseo Lee*",
    year: 2026,
    status: "Under review",
    image: "/publications/preprint-park-transferable-interfaces.png",
    imageAlt: "Workflow and screening map for stable solid-state alkali battery interfaces",
    abstract: "Stable solid–solid interfaces among cathodes, solid electrolytes, and even protective coatings are essential for achieving durable high-voltage all-solid-state batteries (HVASSBs). Yet, rational interface design remains hindered by the lack of transferable descriptors governing chemical compatibility and database-dependent candidate sampling. Here, an interpretable and transferable machine learning framework is established that elucidates the thermodynamic origins of interfacial stability across Li-, Na-, and K-based all-solid-state battery chemistries. High-throughput phase diagram calculations reveal distinct thermodynamical reactivity evolutions arising from the interplay between anion frameworks of contacting solids. Composition-based descriptors derived from elemental properties and designed interactive features enable accurate prediction of interfacial reaction energies while providing physicochemically interpretable insights into the reaction landscapes. Qualitative and quantitative feature contribution analysis identifies differences in valence-electron characteristics and weight-averaged electronegativity as key descriptors controlling interfacial thermodynamics. Beyond interpolation within existing materials databases, the pretrained models exhibit satisfactory generalization capability to previously unexplored alkali-metal oxides and polyanionic oxides, substantially expanding the searchable compositional space for protective coatings. Furthermore, the same composition-based learning strategy is successfully extended to electrochemical stability prediction. Collectively, this work transforms data-driven screening into a descriptor-guided materials design framework, enabling reverse design and accelerated discovery of chemically compatible interfaces for next-generation HVASSBs.",
  },
  {
    title: "Reaction-Controlled Fluorination of FeS₂ Cathodes via FeF₃ Surface Layer Formation for High-Voltage Thermal Batteries",
    authors: "Hye-Ryeon Yu, In Woo Lee, Tae-Young Ahn, Wonjun Ahn, Sang-Hyeon Park, Chae Nam Im, Hyun-Ki Yoon, Yusong Choi, and Youngseak Lee*",
    year: 2026,
    status: "Under review",
    image: "/publications/preprint-yu-fluorinated-fes2.png",
    imageAlt: "Microscopy and diffraction images of a fluorinated iron disulfide cathode surface layer",
    abstract: "FeF₃-rich surface-layer-engineered FeS₂ cathodes were fabricated via reaction-controlled fluorination for high-voltage thermal batteries. FeS₂ was fluorinated at 300 °C for different reaction times, with additional treatments at 400 and 500 °C to investigate the effects of fluorination severity on phase evolution, surface chemistry, microstructure, and discharge behavior. Structural and surface analyses revealed that fluorination at 300 °C produced FeF₃-rich surface phases while preserving the pyrite FeS₂ structure, whereas excessive fluorination at 400 and 500 °C promoted FeS₂ decomposition and FeF₂/FeFₓ formation. Microstructural observations confirmed the formation of a surface-confined FeF₃-rich FeFₓ layer rather than complete bulk conversion. First-principles calculations showed that fluorine substitution in pyrite FeS₂ is thermodynamically unfavorable, whereas phase separation into FeS₂ and iron fluoride phases is energetically preferred. Among the prepared samples, F300-4h exhibited the best electrochemical performance, delivering a discharge capacity of 353 mAh g⁻¹ at 50 mA cm⁻² with an internal resistance of 0.17 Ω. The FeF₃-rich FeFₓ surface layer increased the initial discharge voltage, suppressed interfacial reactions with the molten-salt electrolyte, and improved charge-transfer kinetics. These results demonstrate that reaction-controlled fluorination is an effective surface-engineering strategy for enhancing the voltage output and interfacial stability of FeS₂-based thermal battery cathodes.",
  },
  {
    title: "Approaching Intrinsic High-Temperature Performance in Garnet-Type Solid Electrolyte (LLZTO): Microstructure and Surface-Chemistry Engineering for Advanced Salt-free Thermal Batteries",
    authors: "June-Ho Lim, Sang-Hyeon Park, Changseong Youn, Tae-Young Ahn, Heesook Roh, Hyun-Ki Yoon, and Jongseo Lee*",
    year: 2026,
    status: "Under review",
    image: "/publications/preprint-lim-llzto.png",
    imageAlt: "Conceptual comparison of molten-salt, solid-electrolyte, and optimized solid-electrolyte thermal batteries",
    abstract: "Salt-free solid electrolyte is a promising alternative to conventional molten-salt electrolytes for mitigating short-circuit risk associated with molten-salt overflow under harsh operating conditions of thermal batteries. Among various solid electrolytes, garnet-type Li₆.₄La₃Zr₁.₄Ta₀.₆O₁₂ (LLZTO) is one of the most investigated candidates in all-solid-state lithium batteries because of its high ionic conductivity and chemical stability. Despite this potential, salt-free LLZTO has been insufficiently explored for thermal batteries, and key processing strategies employed in all-solid-state lithium battery research remain overlooked. Here, we demonstrate that the high-temperature discharge performance of salt-free LLZTO can be substantially improved through two essential processes: microstructure and surface-chemistry engineering. High-temperature sintering raised the relative density of LLZTO to approximately 95%, thereby reducing conduction resistance, while acid treatment effectively removed the surface degradation layer, reducing interfacial resistance. As a result, the optimized LLZTO exhibited an ionic conductivity of 0.33 S cm⁻¹ at 500 °C and delivered a specific capacity of 321.2 mAh g⁻¹ at 500 mA cm⁻². These findings highlight that properly processed LLZTO is a compelling alternative to conventional molten-salt systems.",
  },
];

export const manuscriptsInPreparation: Publication[] = [
  {
    title: "Finite Element Investigation of Thermal Stability for Thermal Batteries based on Low-Melting Electrolytes",
    authors: "Sang-Hyeon Park, Hyunjin Won, Chae-Nam Im, Hye-Ryeon Yu, Jang-Hyeon Cho, and Jae-Seong Yeo*",
    year: 2026,
    status: "Manuscript in preparation",
    image: "/publications/manuscript-thermal-stability-fem.png",
    imageAlt: "Finite-element thermal model and simulated temperature distribution of a multilayer thermal battery",
  },
  {
    title: "Theoretically investigated phase evolution of AFeF₃ (A = Li, Na) polymorphs demonstrated by simple mechanochemical synthesis",
    authors: "Hyunjin Won†, and Sang-Hyeon Park†*",
    year: 2026,
    status: "Manuscript in preparation",
    image: "/publications/manuscript-afef3-phase-evolution.png",
    imageAlt: "Calculated formation energies of AFeF₃ polymorphs and comparison with a NaFeF₃ diffraction pattern",
  },
  {
    title: "Collision Integrity Evaluation of Stacked Thermal Battery Cells: Pellet Compression Behavior and FEM Analysis",
    authors: "Jaehun Kim†, Sang-Hyeon Park†, Heesook Roh, Sunghak Lee, Hyeong Seop Kim, and Tae-Young Ahn*",
    year: 2026,
    status: "Manuscript in preparation",
    image: "/publications/manuscript-collision-integrity-fem.png",
    imageAlt: "Finite-element impact simulation and deceleration response of stacked thermal battery cells",
  },
];
