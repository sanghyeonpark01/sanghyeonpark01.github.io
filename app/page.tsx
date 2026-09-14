import { conferencePresentations, manuscriptsInPreparation, preprints, publications, type Publication } from "@/data/publications";

const interests = [
  ["01", "Computational materials science", "Connecting atomistic mechanisms with continuum-scale performance."],
  ["02", "Solid-state batteries", "Designing safer, high-energy storage through predictive simulation."],
  ["03", "Electrochemical interfaces", "Understanding transport, stability, and reaction pathways at buried interfaces."],
  ["04", "Machine learning for materials", "Accelerating screening and extracting physical insight from complex data."],
  ["05", "Density functional theory", "Resolving electronic structure and thermodynamic stability from first principles."],
  ["06", "Molecular dynamics", "Following dynamical processes across time and temperature scales."],
  ["07", "Finite-element thermal analysis", "Modeling heat generation and transport in electrochemical devices."],
];

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

function PublicationList({ items }: { items: Publication[] }) {
  return <div className="publication-list">{items.map((pub, index) => <article key={pub.title}><span>{String(index + 1).padStart(2, "0")}</span><div className="publication-image"><img src={pub.image} alt={pub.imageAlt} /></div><div><p className="pub-meta">{pub.status} · {pub.year}</p><h3>{pub.title}</h3><p><HighlightedAuthors authors={pub.authors} /></p>{pub.venue && <p className="venue">{pub.venue}</p>}{pub.abstract && <details className="publication-abstract"><summary><span className="summary-open">See abstract</span><span className="summary-close">Close abstract</span></summary><p>{pub.abstract}</p></details>}</div>{pub.href ? <a href={pub.href} target="_blank" rel="noreferrer" aria-label={`View ${pub.title}`}><Arrow /></a> : <span className="publication-action-placeholder" aria-hidden="true" />}</article>)}</div>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Sang-Hyeon Park, home">SHP<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#publications">Selected Work</a>
          <a href="#research">Interests</a>
          <a href="#experience">Experience</a>
        </nav>
        <a className="contact-link" href="#contact">Get in touch <Arrow /></a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-heading">
          <p className="eyebrow"><span /> <a href="mailto:ghbond010126@gmail.com">ghbond010126@gmail.com</a></p>
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
              <a href="mailto:ghbond010126@gmail.com">Email <Arrow /></a>
              <a href="/cv-sang-hyeon-park.pdf" download>CV <span aria-hidden="true">↓</span></a>
            </div>
          </aside>
        </div>
        <div className="scroll-cue"><span /> Scroll to discover</div>
      </section>

      <section className="section shell about-grid" id="about">
        <div><p className="section-index">01 / ABOUT</p><h2>From atomic-scale insight<br />to materials that<br /><em>work in practice.</em></h2></div>
        <div className="about-copy">
          <p className="lead">My research connects computational materials science with experimentally relevant materials design.</p>
          <p>I investigate how atomic-scale chemistry, interfacial reactions, and ion transport govern the performance of electrochemical energy-storage systems. Using first-principles calculations, molecular simulation, machine learning, and finite-element analysis, I study materials across scales—from solid–solid interfaces to full battery architectures.</p>
          <p>At the Agency for Defense Development, I apply these approaches to the design of electrodes and solid electrolytes for high-voltage all-solid-state batteries and reserve thermal batteries. I am particularly interested in advancing computational methods while using their insights to guide experiments and establish quantitative agreement between prediction and observation.</p>
          <p>As a prospective Ph.D. student, I hope to develop interpretable, physics-grounded computational frameworks that accelerate materials discovery and translate fundamental understanding into experimentally validated solutions.</p>
          <dl><div><dt>Current questions</dt><dd>Interfacial stability · Ion transport · Computation-guided experiments</dd></div><div><dt>Methods</dt><dd>DFT · Machine learning · FEM · Solid-state synthesis · Electrochemical characterizations</dd></div><div><dt>Current position</dt><dd>Research Officer for National Defense · Republic of Korea Army First Lieutenant · Agency for Defense Development, Daejeon, South Korea</dd></div><div><dt>Seeking</dt><dd>Ph.D. opportunities · Fall 2027</dd></div></dl>
        </div>
      </section>

      <section className="section publication-section" id="publications">
        <div className="shell">
          <div className="section-heading light"><div><p className="section-index">02 / SELECTED WORK</p><h2>Selected <em>work.</em></h2></div><div className="publication-intro"><p>Published work and ongoing research on computational materials design and next-generation battery materials.</p><p className="author-legend"><span>† Equal contribution</span><span>* Corresponding author</span></p></div></div>
          <section className="publication-group" aria-labelledby="published-heading"><h3 id="published-heading">2.1. Publications</h3><PublicationList items={publications} /></section>
          <section className="publication-group" aria-labelledby="preprints-heading"><h3 id="preprints-heading">2.2. Preprints under review</h3><PublicationList items={preprints} /></section>
          <section className="publication-group" aria-labelledby="manuscripts-heading"><h3 id="manuscripts-heading">2.3. Manuscript in preparation</h3>{manuscriptsInPreparation.length > 0 ? <PublicationList items={manuscriptsInPreparation} /> : <p className="publication-empty">Details forthcoming.</p>}</section>
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

      <section className="section section-tint" id="research">
        <div className="shell">
          <div className="section-heading"><div><p className="section-index">03 / RESEARCH INTERESTS</p><h2>Questions I’m<br /><em>driven to answer.</em></h2></div><p>From electrons to engineered systems, I combine physics-based simulation with data-driven methods.</p></div>
          <div className="interest-grid">
            {interests.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section shell" id="experience">
        <p className="section-index">04 / RESEARCH EXPERIENCE</p>
        <div className="experience-layout"><h2>Learning by<br /><em>doing the work.</em></h2><div className="timeline">
          {experience.map((item) => <article key={item.period}><time>{item.period}</time><div><h3>{item.role}</h3><h4>{item.group}</h4><p>{item.copy}</p><ul>{item.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div></article>)}
        </div></div>
      </section>

      <section className="cv-band"><div className="shell"><p className="section-index">05 / CURRICULUM VITAE</p><div><h2>Education, experience,<br />and the <em>full story.</em></h2><a className="button button-light" href="/cv-sang-hyeon-park.pdf" download>Download CV <span aria-hidden="true">↓</span></a></div><p className="cv-note">PDF · 3 pages<br />Last updated September 2026</p></div></section>

      <section className="section section-tint" id="activities"><div className="shell"><p className="section-index">06 / OTHER ACTIVITIES</p><h2>Life beyond<br /><em>research.</em></h2></div></section>

      <footer id="contact"><div className="shell footer-main"><p className="section-index">08 / CONTACT</p><div><h2>Let’s explore what<br />we can <em>discover.</em></h2><p>I’m always glad to discuss research ideas, potential collaborations, and PhD opportunities.</p><a className="email" href="mailto:ghbond010126@gmail.com">ghbond010126@gmail.com <Arrow /></a></div><div className="socials"><a href="https://scholar.google.com/citations?user=5et0cHcAAAAJ&hl=ko" target="_blank" rel="noreferrer">Google Scholar <Arrow /></a><a href="https://github.com" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href="/cv-sang-hyeon-park.pdf" download>Download CV <span aria-hidden="true">↓</span></a></div></div><div className="shell footer-bottom"><p>© 2026 Sang-Hyeon Park</p><p>Computational materials science · Seoul, KR</p><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
