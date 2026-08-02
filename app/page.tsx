import { manuscriptsInPreparation, preprints, publications, type Publication } from "@/data/publications";

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
    period: "2025 — Present",
    role: "Undergraduate Researcher",
    group: "Computational Materials Laboratory · University Placeholder",
    copy: "Investigating ion transport and interfacial stability in solid electrolytes using first-principles calculations and molecular dynamics.",
    tags: ["DFT", "Solid electrolytes", "Python"],
  },
  {
    period: "2024 — 2025",
    role: "Research Intern",
    group: "Energy Materials Group · Institute Placeholder",
    copy: "Developed a finite-element workflow to study coupled heat transfer and electrochemical behavior in next-generation battery cells.",
    tags: ["COMSOL", "Thermal analysis", "Batteries"],
  },
];

const skills = [
  ["Simulation", "VASP · Quantum ESPRESSO · LAMMPS · COMSOL"],
  ["Programming", "Python · MATLAB · Bash · TypeScript"],
  ["Data & ML", "NumPy · pandas · scikit-learn · PyTorch"],
  ["Methods", "DFT · MD · FEM · Statistical analysis"],
  ["Tools", "Git · Linux · HPC · LaTeX"],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function HighlightedAuthors({ authors }: { authors: string }) {
  const parts = authors.split("Sang-Hyeon Park");
  return <>{parts.map((part, index) => <span key={`${part}-${index}`}>{part}{index < parts.length - 1 && <mark className="author-highlight">Sang-Hyeon Park</mark>}</span>)}</>;
}

function PublicationList({ items }: { items: Publication[] }) {
  return <div className="publication-list">{items.map((pub, index) => <article key={pub.title}><span>{String(index + 1).padStart(2, "0")}</span><div className="publication-image"><img src={pub.image} alt={pub.imageAlt} /></div><div><p className="pub-meta">{pub.status} · {pub.year}</p><h3>{pub.title}</h3><p><HighlightedAuthors authors={pub.authors} /></p>{pub.venue && <p className="venue">{pub.venue}</p>}</div>{pub.href ? <a href={pub.href} target="_blank" rel="noreferrer" aria-label={`View ${pub.title}`}><Arrow /></a> : <span className="publication-action-placeholder" aria-hidden="true" />}</article>)}</div>;
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
        <div><p className="section-index">01 / ABOUT</p><h2>Curious about<br />what happens <em>between<br />the atoms.</em></h2></div>
        <div className="about-copy">
          <p className="lead">My work lives at the intersection of physics, chemistry, and computation.</p>
          <p>I use multiscale modeling to reveal how microscopic mechanisms govern macroscopic behavior in energy materials. I’m especially interested in solid-state batteries and the complex interfaces that determine their performance.</p>
          <p>Currently preparing for PhD study in the United States, I hope to develop predictive tools that make materials discovery faster, more interpretable, and more sustainable.</p>
          <dl><div><dt>Current focus</dt><dd>Solid-state battery interfaces</dd></div><div><dt>Based in</dt><dd>Seoul, South Korea</dd></div><div><dt>Open to</dt><dd>PhD opportunities · Fall 2027</dd></div></dl>
        </div>
      </section>

      <section className="section publication-section" id="publications">
        <div className="shell">
          <div className="section-heading light"><div><p className="section-index">02 / SELECTED WORK</p><h2>Selected <em>work.</em></h2></div><div className="publication-intro"><p>Published work and ongoing research on computational materials design and next-generation battery materials.</p><p className="author-legend"><span>† Equal contribution</span><span>* Corresponding author</span></p></div></div>
          <section className="publication-group" aria-labelledby="published-heading"><h3 id="published-heading">2.1. Publications</h3><PublicationList items={publications} /></section>
          <section className="publication-group" aria-labelledby="preprints-heading"><h3 id="preprints-heading">2.2. Preprints under review</h3><PublicationList items={preprints} /></section>
          <section className="publication-group" aria-labelledby="manuscripts-heading"><h3 id="manuscripts-heading">2.3. Manuscript in preparation</h3>{manuscriptsInPreparation.length > 0 ? <PublicationList items={manuscriptsInPreparation} /> : <p className="publication-empty">Details forthcoming.</p>}</section>
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

      <section className="cv-band"><div className="shell"><p className="section-index">05 / CURRICULUM VITAE</p><div><h2>Education, experience,<br />and the <em>full story.</em></h2><a className="button button-light" href="/cv-sang-hyeon-park.pdf" download>Download CV <span aria-hidden="true">↓</span></a></div><p className="cv-note">PDF · 3 pages<br />Last updated July 2026</p></div></section>

      <section className="section section-tint" id="skills"><div className="shell skills-layout"><div><p className="section-index">06 / TECHNICAL SKILLS</p><h2>The tools behind<br /><em>the questions.</em></h2><p>Comfortable moving between theory, code, high-performance computing, and scientific communication.</p></div><div className="skill-list">{skills.map(([label, values]) => <div key={label}><h3>{label}</h3><p>{values}</p></div>)}</div></div></section>

      <footer id="contact"><div className="shell footer-main"><p className="section-index">08 / CONTACT</p><div><h2>Let’s explore what<br />we can <em>discover.</em></h2><p>I’m always glad to discuss research ideas, potential collaborations, and PhD opportunities.</p><a className="email" href="mailto:ghbond010126@gmail.com">ghbond010126@gmail.com <Arrow /></a></div><div className="socials"><a href="https://scholar.google.com/citations?user=5et0cHcAAAAJ&hl=ko" target="_blank" rel="noreferrer">Google Scholar <Arrow /></a><a href="https://github.com" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href="/cv-sang-hyeon-park.pdf" download>Download CV <span aria-hidden="true">↓</span></a></div></div><div className="shell footer-bottom"><p>© 2026 Sang-Hyeon Park</p><p>Computational materials science · Seoul, KR</p><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
