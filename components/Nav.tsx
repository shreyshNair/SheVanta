"use client";
import { useEffect, useState } from "react";
import { LogoMark } from "./Logo";

const links = [
  ["Explore", "#centres"],
  ["Benefits", "#features"],
  ["FAQs", "#faq"],
] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <div className="wrap">
          <nav className="nav-l" aria-label="Primary">
            {links.map(([t, h]) => (
              <a key={h} className="pill" href={h}>
                {t}
              </a>
            ))}
          </nav>
          <a className="logo" href="#top" aria-label="SheVanta home">
            <LogoMark size={44} />
          </a>
          <div className="nav-r">
            <a className="btn-dark" href="#start">
              Join SheVanta
            </a>
            <button
              className="burger"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <i />
              <i />
            </button>
          </div>
        </div>
      </header>
      <div className="mmenu" id="mmenu" onClick={() => setOpen(false)}>
        {links.map(([t, h]) => (
          <a key={h} href={h}>
            {t}
          </a>
        ))}
        <a href="#start">Join SheVanta</a>
      </div>
    </>
  );
}
