* {
  box-sizing: border-box;
}

:root {
  --bg: #07141d;
  --bg-deep: #0d1f2b;
  --panel: rgba(13, 28, 39, 0.9);
  --panel-soft: rgba(17, 31, 43, 0.8);
  --line: rgba(159, 177, 189, 0.18);
  --text: #ecf7ff;
  --muted: #a7c0cf;
  --primary: #38d0ba;
  --primary-strong: #1bb7a3;
  --accent: #8ad7ff;
  --shadow: 0 18px 40px rgba(0, 0, 0, 0.22);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Cairo", sans-serif;
  background:
    radial-gradient(circle at 15% 20%, rgba(56, 208, 186, 0.12), transparent 20%),
    radial-gradient(circle at 82% 12%, rgba(138, 215, 255, 0.16), transparent 18%),
    var(--bg);
  color: var(--text);
  line-height: 1.8;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(7, 20, 29, 0.78);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 74px;
}

.brand {
  font-weight: 800;
  font-size: 1.4rem;
  color: var(--primary);
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 24px;
  color: var(--muted);
  font-weight: 700;
}

.main-nav a {
  transition: 0.2s ease;
}

.main-nav a:hover,
.main-nav a.active {
  color: var(--text);
}

.hero {
  padding: 72px 0 52px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 40px;
}

.pill {
  display: inline-block;
  background: rgba(56, 208, 186, 0.1);
  border: 1px solid rgba(56, 208, 186, 0.4);
  color: var(--primary);
  border-radius: 999px;
  padding: 8px 16px;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.hero-copy h1,
.page-hero h1 {
  margin: 18px 0 12px;
  font-size: clamp(2.5rem, 4vw, 4.2rem);
  line-height: 1.15;
}

.hero-copy p,
.page-hero p {
  margin: 0;
  color: var(--muted);
  max-width: 700px;
  font-size: 1.08rem;
}

.cta-row {
  display: flex;
  gap: 16px;
  margin-top: 28px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  border-radius: 12px;
  font-weight: 800;
  transition: all 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: #062b29;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  color: var(--text);
}

.stats-list {
  list-style: none;
  display: flex;
  gap: 26px;
  padding: 0;
  margin-top: 30px;
  flex-wrap: wrap;
}

.stats-list li {
  display: flex;
  flex-direction: column;
  min-width: 110px;
}

.stats-list strong {
  font-size: 1.65rem;
  color: var(--accent);
}

.stats-list span {
  color: var(--muted);
  font-size: 0.8rem;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.chart-card {
  width: min(100%, 430px);
  padding: 24px 22px;
  background: linear-gradient(180deg, rgba(18, 35, 47, 0.96), rgba(9, 20, 28, 0.96));
  border: 1px solid var(--line);
  border-radius: 24px;
  box-shadow: var(--shadow);
}

.card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--muted);
  margin-bottom: 16px;
}

.status-dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--primary);
  box-shadow: 0 0 18px rgba(56, 208, 186, 0.8);
}

.chart-lines {
  height: 220px;
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(12, 28, 37, 0.8), rgba(6, 17, 24, 0.96));
  border: 1px solid var(--line);
}

.line {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(138, 215, 255, 0.8), transparent);
}

.l1 {
  bottom: 34%;
  transform: skewY(-10deg);
}

.l2 {
  bottom: 52%;
  transform: skewY(8deg);
}

.l3 {
  bottom: 68%;
  transform: skewY(-5deg);
}

.metrics {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-top: 18px;
}

.metrics div {
  border: 1px solid var(--line);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  padding: 12px 14px;
}

.metrics small {
  display: block;
  color: var(--muted);
}

.metrics strong {
  font-size: 1.2rem;
}

.section {
  padding: 86px 0;
}

.alt-section {
  background: rgba(9, 19, 25, 0.5);
  border-block: 1px solid var(--line);
}

.section-heading {
  margin-bottom: 28px;
}

.eyebrow {
  color: var(--primary);
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 800;
}

.section-heading h2 {
  margin: 8px 0 0;
  font-size: clamp(1.9rem, 3vw, 2.9rem);
}

.cards-grid {
  display: grid;
  gap: 22px;
}

.three-col {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.four-col {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.info-card,
.mini-card,
.step-card,
.content-card,
.glossary-item {
  background: rgba(17, 30, 41, 0.8);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 24px 22px;
  box-shadow: var(--shadow);
}

.info-card h3,
.mini-card h3,
.step-card h3,
.content-card h3,
.glossary-item h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.info-card p,
.mini-card p,
.step-card p,
.content-card p,
.glossary-item p {
  margin: 0;
  color: var(--muted);
}

.mini-card span,
.step-card span {
  display: inline-flex;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  border-radius: 12px;
  background: rgba(56, 208, 186, 0.08);
  color: var(--primary);
  font-weight: 800;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.page-main {
  padding-bottom: 40px;
}

.page-hero {
  padding: 72px 0 28px;
}

.small-hero {
  border-bottom: 1px solid var(--line);
  background: rgba(8, 18, 26, 0.45);
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.glossary-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.cta-box-wrap {
  padding: 26px 0 90px;
}

.cta-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background: linear-gradient(135deg, rgba(17, 31, 43, 0.96), rgba(7, 20, 28, 0.96));
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 30px 24px;
}

.cta-box h2 {
  margin: 8px 0 0;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
}

.site-footer {
  border-top: 1px solid var(--line);
  background: rgba(7, 20, 29, 0.8);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
  color: var(--muted);
}

@media (max-width: 940px) {
  .hero-grid,
  .three-col,
  .four-col,
  .steps-grid,
  .content-grid,
  .glossary-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero-grid {
    grid-template-columns: 1fr;
  }

  .nav-wrap {
    flex-direction: column;
    padding: 16px 0;
    gap: 10px;
  }

  .main-nav {
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 620px) {
  .three-col,
  .four-col,
  .steps-grid,
  .content-grid,
  .glossary-grid,
  .cta-box,
  .footer-inner {
    grid-template-columns: 1fr;
    display: grid;
  }

  .cta-box,
  .footer-inner {
    display: grid;
    justify-items: start;
  }

  .main-nav {
    gap: 10px 18px;
    font-size: 0.92rem;
  }
}
