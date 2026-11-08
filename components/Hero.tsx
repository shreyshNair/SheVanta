"use client";
import { useEffect, useState } from "react";
import { Split } from "./Split";

const AI1 =
  "Feeling drained at three weeks is really common. I've shaped a gentle plan around rest, iron-rich meals and hydration — and flagged a few signs worth sharing with your doctor.";
const AI2 =
  "Of course. Three small steps for today: a 20-minute rest window, one iron-rich meal, and a quick mood check-in. I'll nudge you softly this evening.";

const Chev = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="m1 1 4 4 4-4" />
  </svg>
);
const Spark = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="#8d6bd0">
    <path d="M12 2c1 5 3 7 8 8-5 1-7 3-8 8-1-5-3-7-8-8 5-1 7-3 8-8z" />
  </svg>
);
const Typing = () => (
  <span className="typing">
    <i />
    <i />
    <i />
  </span>
);

export default function Hero() {
  const [shown, setShown] = useState<number[]>([]);
  const [t1, setT1] = useState("");
  const [t2, setT2] = useState("");
  const [dots, setDots] = useState<number | null>(null);
  const [track, setTrack] = useState(0);
  const [figIn, setFigIn] = useState(false);

  useEffect(() => {
    let dead = false;
    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));
    const show = (n: number) => setShown((s) => (s.includes(n) ? s : [...s, n]));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setShown([0, 1, 2, 3, 4, 5, 6, 7]);
      setT1(AI1);
      setT2(AI2);
      setTrack(68);
      setFigIn(true);
      return;
    }

    const type = async (text: string, set: (s: string) => void) => {
      for (let i = 1; i <= text.length && !dead; i++) {
        set(text.slice(0, i));
        await wait(16);
      }
    };

    // right column: independent, simultaneous sequence
    (async () => {
      await wait(1100);
      if (dead) return;
      show(10);
      await wait(500);
      show(11);
      await wait(150);
      setFigIn(true);
    })();

    // left column: chat
    (async () => {
      await wait(1000);
      show(0);
      await wait(600);
      show(1);
      await wait(900);
      setDots(2);
      show(2);
      await wait(1100);
      setDots(null);
      await type(AI1, setT1);
      await wait(500);
      if (dead) return;
      show(3);
      await wait(800);
      setDots(4);
      show(4);
      await wait(1000);
      setDots(null);
      await type(AI2, setT2);
      await wait(400);
      if (dead) return;
      show(5);
      await wait(250);
      setTrack(68);
    })();

    return () => {
      dead = true;
    };
  }, []);

  const m = (n: number) => `msg${shown.includes(n) ? " show" : ""}`;

  return (
    <section className="hero" id="top">
      <div className="hero-head">
        <Split as="h1" className="h-display" lines={["Her journey,", "gently guided"]} base={150} />
        <p className="hero-sub rv" style={{ "--base": "700ms" } as React.CSSProperties}>
          One caring place for postpartum, menopause and everything in between.
        </p>
        <div className="hero-cta rv" style={{ "--base": "800ms" } as React.CSSProperties}>
          <a className="btn-dark" href="#start">
            Join the early circle
          </a>
          <a className="btn-ghost" href="#centres">
            Explore the centres
          </a>
        </div>
      </div>

      <div className="hero-card rv rv-scale" style={{ "--base": "850ms" } as React.CSSProperties}>
        <div className="media aura-bg" aria-hidden>
          <i className="blob b1" />
          <i className="blob b2" />
          <i className="blob b3" />
        </div>
        <div className="shade" />

        <div className="studio" id="studio">
          <div className="chat">
            <div className={`chat-top ${m(0)}`}>
              Postpartum check-in <Chev />
            </div>
            <div className={`bubble ${m(1)}`}>I&apos;m three weeks postpartum and feel drained all the time. Is that normal?</div>
            <div className={`ai ${m(2)}`}>
              <div className="ai-ic">
                <Spark />
              </div>
              {dots === 2 && <Typing />}
              <div className="ai-t">
                <span className="ghost">{AI1}</span>
                <span>{t1}</span>
              </div>
            </div>
            <div className={`bubble ${m(3)}`}>Can you make it easier to follow?</div>
            <div className={`ai ${m(4)}`}>
              <div className="ai-ic">
                <Spark />
              </div>
              {dots === 4 && <Typing />}
              <div className="ai-t">
                <span className="ghost">{AI2}</span>
                <span>{t2}</span>
              </div>
            </div>
            <div className={`cd ${m(5)}`}>
              <div>
                <small>WELLNESS AURA</small>
                <strong>Steady &amp; Restoring</strong>
              </div>
              <div className="slider">
                <small>Energy returning</small>
                <div className="track">
                  <b style={{ width: `${track}%` }} />
                </div>
              </div>
            </div>
          </div>

          <div className="prod">
            <span className={m(10)}>Your Wellness Aura</span>
            <figure className={`${m(11)}${figIn ? " in" : ""}`} aria-label="Illustration of a soft wellness aura">
              <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <radialGradient id="ag" cx="50%" cy="45%" r="60%">
                    <stop offset="0" stopColor="#fff" stopOpacity=".95" />
                    <stop offset=".4" stopColor="#f6c4dc" />
                    <stop offset="1" stopColor="#b9a0ec" />
                  </radialGradient>
                </defs>
                <rect width="200" height="260" fill="url(#ag)" />
                <g className="rings" fill="none" stroke="#fff" strokeOpacity=".7">
                  <circle cx="100" cy="120" r="30" />
                  <circle cx="100" cy="120" r="52" />
                  <circle cx="100" cy="120" r="76" />
                  <circle cx="100" cy="120" r="104" />
                </g>
                <circle cx="100" cy="120" r="14" fill="#fff" fillOpacity=".95" />
              </svg>
              <figcaption>Illustrative</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
