# Midterm
/* ============================================
   MONTEFIORE SQUARE — COMMUNITY MARKET PROPOSAL
   Warm, Community-Focused Design System
   ============================================ */

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Nunito:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');

:root {
  --sand:        #f7f0e4;
  --sand-deep:   #ede4d3;
  --parchment:   #faf6ef;
  --terracotta:  #c05a34;
  --terra-light: #d97a54;
  --terra-pale:  #f0c4b0;
  --amber:       #d4892a;
  --amber-light: #e8aa50;
  --amber-pale:  #f5dba8;
  --forest:      #3d6147;
  --forest-light:#5c8a66;
  --forest-pale: #c2d9c8;
  --ink:         #2a1f14;
  --ink-mid:     #4a3728;
  --warm-gray:   #8a7a6a;
  --mist:        #c8bfb2;
  --white:       #fffdf9;

  --font-display: 'Playfair Display', serif;
  --font-body:    'Nunito', sans-serif;
  --font-mono:    'DM Mono', monospace;

  --nav-h:       72px;
  --section-pad: 96px;
  --max-w:       1200px;
  --radius:      12px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background: var(--parchment);
  color: var(--ink);
  font-family: var(--font-body);
  font-weight: 400;
  line-height: 1.75;
  overflow-x: hidden;
}

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--sand-deep); }
::-webkit-scrollbar-thumb { background: var(--terracotta); border-radius: 3px; }
::selection { background: var(--terra-pale); color: var(--ink); }

/* ── UTILITY ── */
.container { max-width: var(--max-w); margin: 0 auto; padding: 0 40px; }

.tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 99px;
  margin-bottom: 18px;
  font-weight: 500;
}
.tag--terra  { background: var(--terra-pale);  color: var(--terracotta); }
.tag--amber  { background: var(--amber-pale);  color: var(--amber); }
.tag--forest { background: var(--forest-pale); color: var(--forest); }
.tag--ink    { background: var(--sand-deep);   color: var(--ink-mid); }

.section-number {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--mist);
  letter-spacing: 0.1em;
  display: block;
  margin-bottom: 6px;
}

/* ── NAVIGATION ── */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: var(--nav-h);
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  z-index: 1000;
  border-bottom: 1px solid var(--sand-deep);
  box-shadow: 0 2px 20px rgba(42,31,20,0.06);
}

.nav-logo {
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: var(--ink);
  text-decoration: none;
  font-style: italic;
  line-height: 1;
}
.nav-logo span { color: var(--terracotta); font-style: normal; font-weight: 900; }

.nav-links { display: flex; gap: 28px; list-style: none; align-items: center; }
.nav-links a {
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--ink-mid);
  text-decoration: none;
  transition: color 0.2s;
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;
  letter-spacing: 0.01em;
}
.nav-links a:hover,
.nav-links a.active { color: var(--terracotta); border-bottom-color: var(--terracotta); }

.nav-burger { display:none; flex-direction:column; gap:5px; background:none; border:none; cursor:pointer; padding:4px; }
.nav-burger span { display:block; width:26px; height:2px; background:var(--ink); transition:all 0.3s; border-radius:2px; }

/* ── HERO ── */
#home {
  min-height: 100vh;
  padding-top: var(--nav-h);
  background: var(--sand);
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  overflow: hidden;
}

#home::before {
  content: '';
  position: absolute;
  top: -200px; right: -200px;
  width: 700px; height: 700px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--terra-pale) 0%, transparent 70%);
  opacity: 0.4;
  pointer-events: none;
}

.hero-content {
  padding: 80px 60px 80px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.hero-eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--terracotta);
  margin-bottom: 24px;
}
.hero-eyebrow::before {
  content: '';
  display: block;
  width: 32px; height: 2px;
  background: var(--terracotta);
  border-radius: 2px;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(44px, 5.5vw, 80px);
  line-height: 1.05;
  color: var(--ink);
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}
.hero-title em {
  color: var(--terracotta);
  font-style: italic;
  display: block;
}

.hero-subtitle {
  font-family: var(--font-body);
  font-size: clamp(13px, 1.2vw, 16px);
  font-weight: 700;
  color: var(--forest);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 28px;
}

.hero-desc {
  color: var(--ink-mid);
  font-size: 1rem;
  max-width: 440px;
  margin-bottom: 44px;
  line-height: 1.85;
}

.hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; }

.btn {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-decoration: none;
  padding: 14px 28px;
  border-radius: 99px;
  cursor: pointer;
  transition: all 0.25s;
  border: 2px solid transparent;
}
.btn--terra  { background: var(--terracotta); color: var(--white); border-color: var(--terracotta); }
.btn--terra:hover  { background: transparent; color: var(--terracotta); }
.btn--outline { background: transparent; color: var(--ink-mid); border-color: var(--mist); }
.btn--outline:hover { border-color: var(--ink); color: var(--ink); }

.hero-image {
  position: relative;
  overflow: hidden;
  min-height: 60vh;
}
.hero-image .img-placeholder {
  width: 100%; height: 100%;
  background: linear-gradient(145deg, var(--terra-pale) 0%, var(--amber-pale) 50%, var(--forest-pale) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  text-align: center;
  padding: 60px 40px;
}
.img-placeholder .ph-icon { font-size: 3.5rem; }
.img-placeholder p {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--warm-gray);
  line-height: 1.7;
}
.img-placeholder .ph-label {
  background: rgba(255,255,255,0.7);
  padding: 6px 14px;
  border-radius: 99px;
  font-size: 0.62rem;
  color: var(--ink-mid);
  font-family: var(--font-mono);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-stats {
  position: absolute;
  bottom: 32px; left: 32px;
  display: flex;
  flex-wrap: wrap;
  background: var(--white);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(42,31,20,0.12);
  z-index: 3;
}
.stat {
  padding: 18px 24px;
  border-right: 1px solid var(--sand-deep);
  min-width: 100px;
}
.stat:last-child { border-right: none; }
.stat-num {
  font-family: var(--font-display);
  font-size: 1.8rem;
  color: var(--terracotta);
  line-height: 1;
  display: block;
  font-weight: 900;
}
.stat-label {
  font-family: var(--font-mono);
  font-size: 0.58rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--warm-gray);
  margin-top: 4px;
  display: block;
}

/* ── SECTIONS ── */
section { padding: var(--section-pad) 0; }
section:nth-child(even) { background: var(--sand); }

.section-header { margin-bottom: 56px; }
.section-header h2 {
  font-family: var(--font-display);
  font-size: clamp(34px, 4vw, 58px);
  line-height: 1.1;
  color: var(--ink);
  margin-top: 8px;
  letter-spacing: -0.01em;
}
.section-header p {
  font-size: 1rem;
  color: var(--ink-mid);
  max-width: 580px;
  margin-top: 14px;
  line-height: 1.8;
}

/* ── ABOUT ── */
.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
.about-text h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--terracotta);
  margin-bottom: 16px;
  font-style: italic;
}
.about-text p { color: var(--ink-mid); margin-bottom: 16px; font-size: 0.96rem; }
.about-text strong { color: var(--ink); font-weight: 700; }

.info-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 32px;
  border: 1px solid var(--sand-deep);
  box-shadow: 0 4px 24px rgba(42,31,20,0.06);
}
.info-card h4 {
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: var(--amber);
  margin-bottom: 20px;
  font-style: italic;
}
.info-card ul { list-style: none; }
.info-card ul li {
  padding: 10px 0;
  border-bottom: 1px solid var(--sand-deep);
  font-size: 0.88rem;
  display: flex;
  gap: 10px;
  color: var(--ink-mid);
  align-items: flex-start;
}
.info-card ul li:last-child { border-bottom: none; }
.info-card ul li::before { content: '🌿'; flex-shrink: 0; }

/* ── PROBLEM ── */
#problem { background: var(--ink); }
#problem .section-header h2 { color: var(--white); }
#problem .section-header p  { color: var(--mist); }

.problem-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.problem-card {
  background: var(--ink-mid);
  border-radius: var(--radius);
  padding: 36px 28px;
  border-top: 4px solid var(--terracotta);
  transition: transform 0.3s;
}
.problem-card:hover { transform: translateY(-4px); }
.problem-card .prob-icon { font-size: 2.2rem; display: block; margin-bottom: 16px; }
.problem-card h3 {
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: var(--terra-light);
  margin-bottom: 12px;
  font-style: italic;
}
.problem-card p { font-size: 0.88rem; color: var(--mist); line-height: 1.75; }

/* ── SITE ── */
.site-layout { display: grid; grid-template-columns: 5fr 4fr; gap: 56px; align-items: start; }

.map-placeholder {
  aspect-ratio: 4/3;
  background: var(--forest-pale);
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
  padding: 40px;
  border: 2px dashed var(--forest-light);
}
.map-placeholder .map-icon { font-size: 3rem; }
.map-placeholder p {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--forest);
  line-height: 1.7;
}

.site-facts { display: flex; flex-direction: column; }
.fact-row {
  padding: 18px 0;
  border-bottom: 1px solid var(--sand-deep);
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.fact-row:last-child { border-bottom: none; }
.fact-label {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--terracotta);
  font-weight: 500;
}
.fact-value { font-size: 0.95rem; font-weight: 700; color: var(--ink); }
.fact-note  { font-size: 0.82rem; color: var(--warm-gray); }

/* ── OPTIONS ── */
#options { background: var(--sand); }
.options-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }

.option-card {
  background: var(--white);
  border-radius: var(--radius);
  overflow: hidden;
  border: 2px solid transparent;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  box-shadow: 0 2px 12px rgba(42,31,20,0.06);
}
.option-card:hover { transform: translateY(-5px); box-shadow: 0 16px 48px rgba(42,31,20,0.12); }
.option-card.selected { border-color: var(--terracotta); }

.option-img {
  aspect-ratio: 4/3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  position: relative;
}
.option-img.opt1 { background: linear-gradient(135deg, var(--amber-pale), var(--terra-pale)); }
.option-img.opt2 { background: linear-gradient(135deg, var(--forest-pale), var(--amber-pale)); }
.option-img.opt3 { background: linear-gradient(135deg, var(--terra-pale), var(--forest-pale)); }
.option-img .img-label {
  position: absolute; bottom: 10px; left: 10px; right: 10px;
  font-family: var(--font-mono);
  font-size: 0.58rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(255,255,255,0.85);
  color: var(--ink-mid);
  padding: 4px 8px;
  border-radius: 6px;
  text-align: center;
}
.option-body { padding: 22px; }
.option-body h3 {
  font-family: var(--font-display);
  font-size: 1.15rem;
  margin-bottom: 8px;
  color: var(--ink);
  font-style: italic;
}
.option-body p { font-size: 0.84rem; color: var(--ink-mid); line-height: 1.65; }
.option-verdict {
  margin-top: 14px; padding-top: 14px;
  border-top: 1px solid var(--sand-deep);
  display: flex; align-items: flex-start; gap: 8px;
}
.verdict-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; margin-top: 5px; }
.verdict-dot.yes { background: var(--forest); }
.verdict-dot.no  { background: var(--mist); }
.option-verdict span { font-size: 0.78rem; color: var(--warm-gray); line-height: 1.5; }

/* ── PROPOSAL ── */
#proposal { background: var(--parchment); }

.before-after {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3px;
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 36px;
  min-height: 360px;
  box-shadow: 0 8px 40px rgba(42,31,20,0.1);
}
.ba-img {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  text-align: center;
  padding: 50px 32px;
  position: relative;
}
.ba-img.before { background: linear-gradient(145deg, #ddd8d0, #c8c0b4); }
.ba-img.after  { background: linear-gradient(145deg, var(--forest-pale), var(--amber-pale)); }
.ba-img .ba-icon { font-size: 3rem; }
.ba-img p {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--warm-gray);
  line-height: 1.7;
}
.ba-badge {
  position: absolute; bottom: 16px; left: 16px;
  padding: 6px 14px;
  border-radius: 99px;
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 500;
}
.ba-badge.b { background: rgba(0,0,0,0.1); color: var(--ink-mid); }
.ba-badge.a { background: var(--terracotta); color: var(--white); }

.proposal-body {
  background: var(--white);
  border-radius: var(--radius);
  padding: 40px;
  margin-bottom: 32px;
  border: 1px solid var(--sand-deep);
}
.proposal-body h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--terracotta);
  margin-bottom: 16px;
  font-style: italic;
}
.proposal-body p { color: var(--ink-mid); font-size: 0.96rem; line-height: 1.85; margin-bottom: 14px; }
.proposal-body p:last-child { margin-bottom: 0; }

.feat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.feat {
  background: var(--white);
  border-radius: var(--radius);
  padding: 28px 22px;
  border: 1px solid var(--sand-deep);
  border-top: 4px solid var(--amber);
  transition: transform 0.3s, box-shadow 0.3s;
}
.feat:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(42,31,20,0.1); }
.feat-icon { font-size: 2rem; display: block; margin-bottom: 14px; }
.feat h4 { font-family: var(--font-display); font-size: 1rem; color: var(--ink); margin-bottom: 8px; font-style: italic; }
.feat p  { font-size: 0.82rem; color: var(--ink-mid); line-height: 1.65; }

.extra-imgs { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 32px; }
.extra-ph {
  aspect-ratio: 3/2;
  background: var(--amber-pale);
  border-radius: var(--radius);
  border: 2px dashed var(--amber);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 10px; text-align: center; padding: 32px;
}
.extra-ph .ph-icon { font-size: 2.5rem; }
.extra-ph p {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--amber);
  line-height: 1.7;
}

/* ── REFLECTION ── */
#reflection { background: var(--sand); }
.reflection-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }

.ai-log {
  background: var(--white);
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--sand-deep);
  box-shadow: 0 4px 24px rgba(42,31,20,0.07);
}
.ai-log-header {
  background: var(--sand-deep);
  padding: 14px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid var(--mist);
}
.ai-log-header .dots { display: flex; gap: 6px; }
.ai-log-header .dot { width: 11px; height: 11px; border-radius: 50%; }
.dot.r { background: #ff6b5b; } .dot.y { background: #ffd060; } .dot.g { background: #5bd15b; }
.ai-log-header .log-title {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  color: var(--warm-gray);
  margin-left: 6px;
}
.ai-log-body { padding: 24px; }
.log-entry { margin-bottom: 18px; }
.log-role {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 6px;
  font-weight: 500;
  display: block;
}
.log-role.user { color: var(--terracotta); }
.log-role.ai   { color: var(--forest); }
.log-entry p {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--ink-mid);
  line-height: 1.65;
  background: var(--sand);
  padding: 10px 14px;
  border-radius: 8px;
}

.reflection-text h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--terracotta);
  margin-bottom: 14px;
  font-style: italic;
}
.reflection-text p { color: var(--ink-mid); margin-bottom: 16px; font-size: 0.95rem; line-height: 1.85; }

.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 28px; }
.two-col-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 22px;
  border: 1px solid var(--sand-deep);
  border-top: 4px solid var(--forest);
}
.two-col-card.human { border-top-color: var(--terracotta); }
.two-col-card h4 {
  font-family: var(--font-display);
  font-size: 0.95rem;
  color: var(--forest);
  margin-bottom: 10px;
  font-style: italic;
}
.two-col-card.human h4 { color: var(--terracotta); }
.two-col-card ul { list-style: none; }
.two-col-card ul li {
  font-size: 0.82rem;
  color: var(--ink-mid);
  padding: 6px 0;
  border-bottom: 1px solid var(--sand-deep);
  display: flex; gap: 8px; align-items: flex-start;
}
.two-col-card ul li:last-child { border-bottom: none; }
.two-col-card ul li::before { content: '✓'; color: var(--forest); flex-shrink: 0; font-weight: 700; }
.two-col-card.human ul li::before { content: '✦'; color: var(--terracotta); }

.prompt-log-strip {
  background: var(--ink);
  border-radius: var(--radius);
  padding: 32px 36px;
  margin-top: 48px;
}
.prompt-log-strip h4 {
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: var(--amber-light);
  margin-bottom: 20px;
  font-style: italic;
}
.prompt-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 40px; }
.prompt-item {
  display: flex; gap: 12px; align-items: flex-start;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255,255,255,0.07);
}
.prompt-item:nth-last-child(-n+2) { border-bottom: none; }
.prompt-num {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  color: var(--terracotta);
  flex-shrink: 0;
  padding-top: 2px;
  letter-spacing: 0.08em;
}
.prompt-text {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: #aaa;
  line-height: 1.6;
}
.prompt-text em { color: var(--amber-light); font-style: normal; }

.conclusion-box {
  margin-top: 56px;
  background: var(--terracotta);
  color: var(--white);
  border-radius: var(--radius);
  padding: 40px 44px;
}
.conclusion-box .tag { background: rgba(255,255,255,0.2); color: var(--white); }
.conclusion-box p { font-size: 1rem; line-height: 1.85; opacity: 0.95; max-width: 800px; margin-top: 16px; }

/* ── FOOTER ── */
footer {
  background: var(--ink);
  color: var(--mist);
  padding: 60px 0 36px;
}
.footer-inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 60px;
  margin-bottom: 40px;
}
.footer-brand h3 {
  font-family: var(--font-display);
  font-size: 1.4rem;
  color: var(--white);
  margin-bottom: 12px;
  font-style: italic;
}
.footer-brand h3 span { color: var(--terracotta); font-style: normal; }
.footer-brand p { font-size: 0.85rem; color: #666; line-height: 1.7; max-width: 260px; }
.footer-col h4 {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--terracotta);
  margin-bottom: 16px;
}
.footer-col ul { list-style: none; }
.footer-col ul li { margin-bottom: 10px; }
.footer-col ul li a {
  color: #666; text-decoration: none;
  font-size: 0.85rem; transition: color 0.2s;
}
.footer-col ul li a:hover { color: var(--white); }
.footer-bottom {
  border-top: 1px solid #222;
  padding-top: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #444;
}

/* ── ANIMATIONS ── */
.fade-up {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.fade-up.visible { opacity: 1; transform: translateY(0); }

/* ── MOBILE ── */
@media (max-width: 900px) {
  :root { --section-pad: 64px; }
  .container { padding: 0 20px; }
  nav { padding: 0 20px; }
  .nav-links {
    display: none; flex-direction: column;
    position: fixed; top: var(--nav-h); left: 0; right: 0;
    background: var(--white); padding: 20px; gap: 18px;
    border-bottom: 1px solid var(--sand-deep);
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  }
  .nav-links.open { display: flex; }
  .nav-burger { display: flex; }
  #home { grid-template-columns: 1fr; }
  .hero-content { padding: 50px 20px 40px; }
  .hero-image { display: none; }
  .hero-stats { position: static; margin: 0 20px 40px; }
  .about-grid, .site-layout, .before-after, .reflection-layout { grid-template-columns: 1fr; }
  .problem-grid, .options-grid, .feat-grid, .extra-imgs { grid-template-columns: 1fr; }
  .two-col, .prompt-grid { grid-template-columns: 1fr; }
  .footer-inner { grid-template-columns: 1fr; gap: 32px; }
  .footer-bottom { flex-direction: column; gap: 8px; text-align: center; }
}
