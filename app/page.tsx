import type { CSSProperties } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Effects from "@/components/Effects";
import JoinForm from "@/components/JoinForm";
import { Split } from "@/components/Split";
import { LogoFull } from "@/components/Logo";

const d = (n: number) => ({ "--d": n }) as CSSProperties;
const Check = () => (
  <svg width="9" height="9" viewBox="0 0 10 10" fill="none" stroke="#fff" strokeWidth="1.6">
    <path d="m2 5 2 2 4-4" />
  </svg>
);

const centres = [
  {
    tag: "Postpartum",
    title: "Mama Circle",
    text: "Recovery guidance, bleeding and mood check-ins, gentle nutrition and a circle of mothers and experts for the weeks after birth.",
    cls: "p1",
  },
  {
    tag: "Menopause",
    title: "Menopausal Centre",
    text: "Understand hot flashes, sleep and mood shifts early, with simple remedies, tracking and doctors who listen.",
    cls: "p2",
  },
  {
    tag: "Intimate wellbeing",
    title: "Sexual Health Centre",
    text: "Private, shame-free answers and expert support on comfort, desire and intimate health through every phase.",
    cls: "p3",
  },
];

const journey = [
  ["Pregnancy & planning", "Preparing, tracking and understanding each trimester."],
  ["Mama Circle", "Postpartum care, recovery and community."],
  ["Baby Circle", "Gentle guidance for the early months with your little one."],
  ["Diet plans", "Nourishing plans for every stage of life."],
  ["Consultations", "Talk to doctors and dietitians."],
  ["Blog", "Articles written by doctors and dietitians."],
  ["Products & essentials", "Pads, care and everyday essentials."],
];

const faqs = [
  [
    "What is SheVanta?",
    "SheVanta is a platform that stays with women from pregnancy through postpartum, menstruation and menopause — bringing information, prevention tips, tracking and expert access into one friendly place.",
  ],
  [
    "How does the colour-change pad work?",
    "The idea is a small chip built into a pad that changes colour when it detects certain markers, so changes are easy to notice early. It is a concept under development and will be validated before launch.",
  ],
  [
    "Does SheVanta replace my doctor?",
    "No. SheVanta helps you notice patterns and prepare questions. It is not a diagnosis, and anything that worries you should be discussed with a qualified healthcare professional.",
  ],
  [
    "Who is the Menopausal Centre for?",
    "Anyone approaching or going through perimenopause and menopause who wants clear, early information about symptoms and what can help.",
  ],
  [
    "Is my health information private?",
    "Privacy is a core principle for the platform. The details of data handling will be published before launch.",
  ],
  [
    "When will SheVanta be available?",
    "We are building in the open. Join the early circle and we will let you know as each centre opens.",
  ],
];

export default function Page() {
  return (
    <>
      <Effects />
      <Nav />
      <main>
        <Hero />

        {/* ---------- Three centres ---------- */}
        <section className="sec" id="centres">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow rv">Three places to begin</span>
              <Split className="h2" lines={["Care that meets you", "where you are"]} lt={1} />
              <p className="lead rv" style={d(3)}>
                Each centre brings answers, remedies and experts together, so you never have to piece it all together alone.
              </p>
            </div>
            <div className="centres">
              {centres.map((c, i) => (
                <article key={c.title} className={`centre rv ${c.cls}`} style={d(i + 1)}>
                  <div className="centre-art" aria-hidden>
                    <i />
                    <i />
                    <i />
                  </div>
                  <span className="tag">{c.tag}</span>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  <a href="#start" className="arrow-link">
                    Join the waitlist <span>→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- The gap ---------- */}
        <section className="sec gap">
          <div className="wrap">
            <div className="stats">
              <div className="stat rv" style={d(1)}>
                <b>
                  <span data-count="71.6">0</span>%
                </b>
                <p>of women in a 2025 central India study did not receive adequate postnatal care.</p>
              </div>
              <div className="stat rv" style={d(2)}>
                <b>
                  <span data-count="50">0</span>%
                </b>
                <p>of 32,518 women in India were unaware of the side effects of menopause.</p>
              </div>
              <div className="stat-text rv" style={d(3)}>
                <Split as="h3" className="h3" lines={["There is no single place", "to catch it early."]} lt={1} />
                <p>
                  SheVanta closes that gap: immediate information and remedies, plus a way to notice symptoms before they
                  become a major challenge.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Features bento ---------- */}
        <section className="sec s-bento" id="features">
          <div className="wrap">
            <div className="bento-shell">
              <div className="media bento-bg" aria-hidden>
                <i className="blob b1" />
                <i className="blob b2" />
              </div>
              <div className="sec-head">
                <span className="eyebrow rv">What&apos;s inside</span>
                <Split className="h2" lines={["Everything she needs,", "gently in one place"]} lt={1} />
                <p className="lead rv" style={d(3)}>
                  Tools that understand her phase of life, designed to be simple, private and kind.
                </p>
              </div>

              <div className="bento">
                <div className="card c-big rv" style={d(1)} id="gauge-card">
                  <div className="big-top">
                    <h3>
                      Postpartum
                      <br />
                      <span>Wellness Aura.</span>
                    </h3>
                    <p className="desc">
                      A soft daily read on mood, sleep and energy, so small changes get noticed and cared for early.
                    </p>
                  </div>
                  <div className="gauge">
                    <svg viewBox="0 0 180 100" style={{ width: 200, height: 122, overflow: "visible" }}>
                      <defs>
                        <linearGradient id="gg" x1="0" x2="1">
                          <stop offset="0" stopColor="#ffd0e6" />
                          <stop offset="1" stopColor="#ffffff" />
                        </linearGradient>
                      </defs>
                      <path d="M10 95 A80 80 0 0 1 170 95" fill="none" stroke="rgba(255,255,255,.22)" strokeWidth="12" strokeLinecap="round" />
                      <path className="g-arc" d="M10 95 A80 80 0 0 1 170 95" fill="none" stroke="url(#gg)" strokeWidth="12" strokeLinecap="round" strokeDasharray="252" />
                    </svg>
                    <div className="val">
                      <span data-count="82">0</span>%
                    </div>
                    <div className="ends">
                      <span>Needs rest</span>
                      <span>Glowing</span>
                    </div>
                  </div>
                  <div>
                    <div className="chips">
                      <span>Mood</span>
                      <span>Sleep</span>
                      <span>Energy</span>
                    </div>
                    <a className="btn-white" href="#start">
                      Try the Aura
                    </a>
                    <small className="sample">Sample score for illustration</small>
                  </div>
                </div>

                <div className="card c-pad rv" style={d(2)}>
                  <div className="swatches">
                    <div>
                      <i style={{ background: "#d9c9f2" }} />
                      <small>Expected</small>
                    </div>
                    <div>
                      <i style={{ background: "#f6c9a8" }} />
                      <small>Watch</small>
                    </div>
                    <div>
                      <i style={{ background: "#ef8fa6" }} />
                      <small>Speak to a doctor</small>
                    </div>
                  </div>
                  <div className="txt">
                    <h4>Postpartum Bleeding Analyzer</h4>
                    <p>A chip in the pad shifts colour so changes are easy to spot. A prompt to talk to your doctor — never a diagnosis.</p>
                  </div>
                </div>

                <div className="card c-pad rv" style={d(3)}>
                  <div className="cal" aria-hidden>
                    {["M", "T", "W", "T", "F", "S", "S"].map((x, i) => (
                      <em key={i}>{x}</em>
                    ))}
                    {Array.from({ length: 21 }, (_, i) => (
                      <span key={i} className={i >= 4 && i <= 8 ? "per" : i === 17 ? "ov" : i === 15 || i === 16 || i === 18 ? "fert" : ""}>
                        {i + 1}
                      </span>
                    ))}
                  </div>
                  <div className="txt">
                    <h4>Menstrual Cycle Calendar</h4>
                    <p>Log your cycle and see your period, fertile window and patterns at a glance.</p>
                  </div>
                </div>

                <div className="card c-pad rv" style={d(4)}>
                  <div className="rows">
                    {[
                      ["Iron-rich breakfast", "Ragi · Dates · Nuts"],
                      ["Calm-sleep dinner", "Warm · Light · Magnesium"],
                      ["Hydration plan", "Gentle reminders"],
                    ].map(([t, s], i) => (
                      <div key={t} className="row" style={{ "--i": i } as CSSProperties}>
                        <span className="dot" />
                        <div>
                          <b>{t}</b>
                          <em>{s}</em>
                        </div>
                        <span className="ok">
                          <Check />
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="txt">
                    <h4>Diet-plan Creator</h4>
                    <p>Nourishing plans for each stage. Preview only — personalised plans are coming soon.</p>
                  </div>
                </div>

                <div className="card c-pad rv" style={d(5)}>
                  <div className="insight">
                    <div className="roles">
                      {["Doctors", "Dietitians", "Counsellors"].map((r) => (
                        <span key={r}>{r}</span>
                      ))}
                    </div>
                    <div className="chip">
                      <i className="dot2" />
                      Expert online
                    </div>
                  </div>
                  <div className="txt">
                    <h4>Expert Consultation</h4>
                    <p>Book time with doctors and dietitians who understand your phase of life.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Chip ---------- */}
        <section className="sec" id="chip">
          <div className="wrap chip-grid">
            <div>
              <span className="eyebrow rv">The smart pad</span>
              <Split className="h2" lines={["From a simple colour change", "to early clarity"]} lt={1} />
              <p className="lead left rv" style={d(3)}>
                A cost-effective, rapid diagnostic chip built into a pad, so women can notice meaningful changes early and
                reach out for care sooner.
              </p>
              <ul className="ticks rv" style={d(4)}>
                <li>Instant, easy-to-read colour feedback</li>
                <li>Pairs with the SheVanta platform for next steps</li>
                <li>Designed to be affordable and discreet</li>
              </ul>
              <p className="note rv" style={d(5)}>
                Concept under development. Colours shown are illustrative and readings will be clinically validated before launch.
              </p>
            </div>
            <div className="pads rv rv-scale" style={d(2)} aria-hidden>
              {[
                ["#d9c9f2", "Expected"],
                ["#f6c9a8", "Watch"],
                ["#ef8fa6", "Consult"],
              ].map(([c, l], i) => (
                <div key={l} className="pad-wrap" style={{ "--i": i } as CSSProperties}>
                  <svg viewBox="0 0 80 220" className="pad">
                    <path d="M40 4c22 0 34 16 34 40v132c0 22-12 40-34 40S6 198 6 176V44C6 20 18 4 40 4z" fill="#fff" stroke="#e8d7ea" strokeWidth="2" />
                    <rect x="22" y="78" width="36" height="64" rx="18" fill={c} className="chipwin" />
                    <path d="M40 30v28M40 160v28" stroke="#efe3ee" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                  <small>{l}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Journey / sitemap ---------- */}
        <section className="sec" id="journey">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow rv">Pregnancy to menopause</span>
              <Split className="h2" lines={["One platform for", "every phase"]} lt={1} />
            </div>
            <div className="journey">
              {journey.map(([t, s], i) => (
                <a key={t} href="#start" className="j rv" style={d((i % 4) + 1)}>
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  <h4>{t}</h4>
                  <p>{s}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className="sec" id="faq">
          <div className="wrap faq-wrap">
            <div className="sec-head">
              <span className="eyebrow rv">FAQs</span>
              <Split className="h2" lines={["Questions,", "answered kindly"]} lt={1} />
            </div>
            <div className="faq">
              {faqs.map(([q, a], i) => (
                <details key={q} className="rv" style={d(i % 3)}>
                  <summary>
                    {q}
                    <span aria-hidden />
                  </summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- CTA ---------- */}
        <section className="sec" id="start">
          <div className="wrap">
            <div className="cta">
              <div className="media cta-bg" aria-hidden>
                <i className="blob b1" />
                <i className="blob b2" />
                <i className="blob b3" />
              </div>
              <Split lines={["Begin her", "journey"]} />
              <p className="lead rv" style={d(3)}>
                Be among the first to join the SheVanta circle.
              </p>
              <div className="rv" style={d(4)}>
                <JoinForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-in">
          <LogoFull width={190} />
          <nav aria-label="Footer">
            {["Mama Circle", "Baby Circle", "Pregnancy & planning", "Diet plans", "Consultations", "Blog", "Products", "FAQs"].map((l) => (
              <a key={l} href={l === "FAQs" ? "#faq" : "#journey"}>
                {l}
              </a>
            ))}
          </nav>
          <p>© {new Date().getFullYear()} SheVanta. Information on this site is not medical advice.</p>
        </div>
      </footer>
    </>
  );
}
