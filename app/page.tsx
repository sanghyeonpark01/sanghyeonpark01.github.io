import { conferencePresentations, manuscriptsInPreparation, preprints, publications, type Publication } from "@/data/publications";

const experience = [
  {
    period: "June 2024 — Present",
    role: "Research Officer for National Defense",
    group: "Agency for Defense Development (ADD) · Daejeon, South Korea",
    copy: "Selected as a Research Officer for National Defense after graduation, I have fulfilled my military service by contributing to the development of defense energy materials. My primary work supports the research and development of reserve thermal batteries for military energy storage and power systems, including the conceptual design and experimental validation of high-voltage, low-melting-point thermal batteries. In parallel, I have independently expanded my expertise beyond energy-materials experiments by developing proficiency in DFT, molecular dynamics, machine learning, and finite-element modeling, with a continuing focus on reconciling computational predictions with experimental observations. Participation in Korea’s highest-level defense research planning has also given me a broader perspective on the relationship between scientific progress and international security, shaping my commitment to pursue research that creates meaningful value for society.",
    tags: ["Thermal batteries", "DFT", "MD", "Machine learning", "FEM", "Experiment–simulation integration"],
  },
  {
    period: "September 2023 — February 2024",
    role: "Undergraduate Research Intern",
    group: "Korea Institute of Science and Technology (KIST) · Advised by Dr. Seungho Yu",
    copy: "Used first-principles calculations to evaluate the stability of sulfide solid electrolytes and design new compositions. Starting from the Li₆PS₅Cl parent composition, I systematically mapped changes in phase stability arising from isovalent substitution and site disorder, and identified the relationship between ionic radius and thermodynamic phase stability.",
    tags: ["First-principles calculations", "Sulfide solid electrolytes", "Phase stability", "Materials design"],
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function HighlightedAuthors({ authors }: { authors: string }) {
  const parts = authors.split("Sang-Hyeon Park");
  return <>{parts.map((part, index) => <span key={`${part}-${index}`}>{part}{index < parts.length - 1 && <mark className="author-highlight">Sang-Hyeon Park</mark>}</span>)}</>;
}

function PublicationList({ items, startIndex, showAbstracts = false }: { items: Publication[]; startIndex: number; showAbstracts?: boolean }) {
  return <div className="publication-list">{items.map((pub, index) => <article key={pub.title}>
    <span className="publication-number">J{startIndex + index}</span>
    <div className="publication-copy">
      <p className="pub-meta">{pub.status} · {pub.year}</p>
      <h3>{pub.href ? <a className="publication-title-link" href={pub.href} target="_blank" rel="noreferrer">{pub.title} <Arrow /></a> : pub.title}</h3>
      <p className="publication-authors"><HighlightedAuthors authors={pub.authors} /></p>
      {pub.venue && <p className="venue">{pub.venue} ({pub.year}).</p>}
      {pub.note && <p className="publication-note">{pub.note}</p>}
      {showAbstracts && pub.abstract && <details className="publication-abstract"><summary><span className="summary-open">See abstract</span><span className="summary-close">Close abstract</span></summary><p>{pub.abstract}</p></details>}
    </div>
  </article>)}</div>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Sang-Hyeon Park, home">Sang-Hyeon Park</a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#publications">Publications</a>
          <a href="#experience">Experience</a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-heading">
          <p className="eyebrow"><span /> <a href="mailto:sanghyeonpark0126@gmail.com">sanghyeonpark0126@gmail.com</a></p>
          <h1>Sang-Hyeon Park</h1>
          <p>Prospective Ph.D. Applicant · Research Officer at Agency for Defense Development</p>
        </div>
        <div className="hero-profile-grid">
          <div className="hero-bio">
            <p>Sang-Hyeon is a <strong>prospective Ph.D. applicant</strong> and a computational materials science researcher at the <strong><a className="inline-academic-link" href="https://add.re.kr/eps" target="_blank" rel="noreferrer">Agency for Defense Development (ADD)</a></strong>. He is broadly interested in:</p>
            <ol>
              <li>Advancing computational methods for materials science.</li>
              <li>Conducting computation-guided experiments and rigorously integrating and validating computational and experimental results.</li>
            </ol>
            <p>Sang-Hyeon received his <strong>B.S. in <a className="inline-academic-link" href="http://energy.hanyang.ac.kr/en_main/" target="_blank" rel="noreferrer">Energy Engineering</a> (<em>summa cum laude</em>; ranked 1st in his department)</strong> from <a className="inline-academic-link" href="https://www.hanyang.ac.kr/web/eng" target="_blank" rel="noreferrer">Hanyang University</a> in 2024. During his undergraduate studies, he completed a six-month research internship at the <a className="inline-academic-link" href="https://kist.re.kr/eng" target="_blank" rel="noreferrer">Korea Institute of Science and Technology (KIST)</a>, where he developed expertise in computational materials modeling and design grounded in computational science. Following graduation, he has served as a <strong><a className="inline-academic-link" href="https://www.rond.or.kr/" target="_blank" rel="noreferrer">Research Officer for National Defense (ROND; First Lieutenant, Republic of Korea Army)</a></strong> and a researcher at the Defense Materials and Energy Technology Center at <a className="inline-academic-link" href="https://add.re.kr/eps" target="_blank" rel="noreferrer">ADD</a>. His work focuses on uncovering structure–property relationships in energy-storage materials through atomistic simulation and materials informatics, and on translating those insights into the design of electrodes and electrolytes for high-voltage all-solid-state batteries and reserve thermal batteries.</p>
            <p>He expects to complete his military service in <strong>May 2027</strong> and plans to begin a Ph.D. program in <strong>Fall 2027</strong>.</p>
          </div>
          <aside className="profile-aside">
            <div className="profile-photo-wrap"><img src="/sang-hyeon-park-profile.jpeg" alt="Portrait of Sang-Hyeon Park" /></div>
            <div className="profile-links">
              <a href="https://scholar.google.com/citations?user=5et0cHcAAAAJ&hl=ko" target="_blank" rel="noreferrer">Google Scholar <Arrow /></a>
              <a href="mailto:sanghyeonpark0126@gmail.com">Email <Arrow /></a>
              <a href="/cv-sang-hyeon-park.pdf" download>CV <span aria-hidden="true">↓</span></a>
            </div>
          </aside>
        </div>
        <div className="scroll-cue"><span /> Scroll to discover</div>
      </section>

      <section className="section shell about-section" id="about">
        <div className="about-grid">
          <div><p className="section-index">01 / ABOUT</p><h2>From atomic-scale insight<br />to materials that<br /><em>work in practice.</em></h2></div>
          <div className="about-copy">
            <p className="lead">My research connects computational materials science with experimentally relevant materials design.</p>
            <p>I investigate how atomic-scale chemistry, interfacial reactions, and ion transport govern the performance of electrochemical energy-storage systems. Using first-principles calculations, molecular simulation, machine learning, and finite-element analysis, I study materials across scales—from solid–solid interfaces to full battery architectures.</p>
            <p>At the Agency for Defense Development, I apply these approaches to the design of electrodes and solid electrolytes for high-voltage all-solid-state batteries and reserve thermal batteries. I am particularly interested in advancing computational methods while using their insights to guide experiments and establish quantitative agreement between prediction and observation.</p>
            <p>As a prospective Ph.D. student, I hope to develop interpretable, physics-grounded computational frameworks that accelerate materials discovery and translate fundamental understanding into experimentally validated solutions.</p>
            <dl><div><dt>Current questions</dt><dd>Interfacial stability · Ion transport · Computation-guided experiments</dd></div><div><dt>Methods</dt><dd>DFT · Machine learning · FEM · Solid-state synthesis · Electrochemical characterizations</dd></div><div><dt>Current position</dt><dd>Research Officer for National Defense · Republic of Korea Army First Lieutenant · Agency for Defense Development, Daejeon, South Korea</dd></div><div><dt>Seeking</dt><dd>Ph.D. opportunities · Fall 2027</dd></div></dl>
          </div>
        </div>
        <figure className="research-map">
          <figcaption className="research-map-heading">
            <div><p>Research trajectory · 2023–2027</p><h3>From atomistic insight to experimentally grounded materials design.</h3></div>
            <p>This map connects my research training, current work, and doctoral vision across atomistic modeling, data-driven discovery, electrochemical experiments, and device-scale analysis.</p>
          </figcaption>
          <a className="research-map-preview" href="/research-trajectory.svg" target="_blank" rel="noreferrer" aria-label="Open the full-resolution research trajectory figure in a new tab">
            <img src="/research-trajectory.webp" alt="Research trajectory from a KIST internship in sulfide solid electrolytes through computational and experimental battery research at ADD toward doctoral study in Fall 2027" />
            <span>Open full-resolution figure <Arrow /></span>
          </a>
        </figure>
        <figure className="research-map research-vision">
          <figcaption className="research-map-heading">
            <div><p>Research vision · Ph.D. and beyond</p><h3>Computational foundations that connect mechanism, prediction, and materials design.</h3></div>
            <p>My long-term vision is to combine electronic-structure theory, atomistic dynamics, statistical mechanics, and data-driven methods to explain functional materials and translate that understanding into predictive synthesis, stable interfaces, and inverse design.</p>
          </figcaption>
          <a className="research-map-preview" href="/research-vision.svg" target="_blank" rel="noreferrer" aria-label="Open the full-resolution research vision figure in a new tab">
            <img src="/research-vision.webp" alt="Research vision connecting electronic-level calculations, atomistic dynamics, and machine learning with finite-temperature and charge-transport questions and materials design outcomes" />
            <span>Open full-resolution figure <Arrow /></span>
          </a>
        </figure>
      </section>

      <section className="section publication-section" id="publications">
        <div className="shell">
          <div className="section-heading light"><div><p className="section-index">02 / PUBLICATIONS</p><h2>Publications<em>.</em></h2></div><div className="publication-intro"><p>Peer-reviewed publications and ongoing manuscripts in computational materials science, battery interfaces, and thermal-energy systems.</p><p className="abstract-legend">Abstracts are available for peer-reviewed publications.</p><p className="author-legend"><span>† Equal contribution</span><span>* Corresponding author</span></p></div></div>
          <section className="publication-group" aria-labelledby="published-heading"><h3 id="published-heading">2.1. Peer-reviewed publications <span>({publications.length})</span></h3><PublicationList items={publications} startIndex={1} showAbstracts /></section>
          <section className="publication-group" aria-labelledby="preprints-heading"><h3 id="preprints-heading">2.2. Preprints under review <span>({preprints.length})</span></h3><PublicationList items={preprints} startIndex={publications.length + 1} /></section>
          <section className="publication-group" aria-labelledby="manuscripts-heading"><h3 id="manuscripts-heading">2.3. Manuscripts in preparation <span>({manuscriptsInPreparation.length})</span></h3>{manuscriptsInPreparation.length > 0 ? <PublicationList items={manuscriptsInPreparation} startIndex={publications.length + preprints.length + 1} /> : <p className="publication-empty">Details forthcoming.</p>}</section>
          <section className="publication-group" aria-labelledby="conference-heading">
            <h3 id="conference-heading">2.4. Conference presentations</h3>
            <div className="conference-list">
              {conferencePresentations.map((presentation, index) => <article key={presentation.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="conference-kind">({presentation.type})</p>
                  <h4>{presentation.title}</h4>
                  <p>{presentation.conference} · {presentation.year}</p>
                </div>
              </article>)}
            </div>
          </section>
        </div>
      </section>

      <section className="section shell" id="experience">
        <p className="section-index">03 / RESEARCH EXPERIENCE</p>
        <div className="experience-layout"><h2>Learning by<br /><em>doing the work.</em></h2><div className="timeline">
          {experience.map((item) => <article key={item.period}><time>{item.period}</time><div><h3>{item.role}</h3><h4>{item.group}</h4><p>{item.copy}</p><ul>{item.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div></article>)}
        </div></div>
      </section>

      <section className="cv-band"><div className="shell"><p className="section-index">04 / CURRICULUM VITAE</p><div><h2>Education, experience,<br />and the <em>full story.</em></h2><a className="button button-light" href="/cv-sang-hyeon-park.pdf" download>Download CV <span aria-hidden="true">↓</span></a></div><p className="cv-note">PDF · 2 pages<br />Last updated October 2026</p></div></section>

      <footer className="minimal-footer"><div className="shell"><p>© 2026 Sang-Hyeon Park</p><p>Computational materials science · Seoul, KR</p><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
