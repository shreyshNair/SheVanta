"use client";
import { useEffect } from "react";
import Lenis from "lenis";

/** Smooth scroll, scroll-reveal, count-up and in-page anchors. Renders nothing. */
export default function Effects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = reduce ? null : new Lenis();
    let raf = 0;
    const loop = (t: number) => {
      lenis?.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          io.unobserve(e.target);
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    document.querySelectorAll(".rv,.split").forEach((el) => io.observe(el));

    const counter = new IntersectionObserver((entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        counter.unobserve(e.target);
        const el = e.target as HTMLElement;
        const to = parseFloat(el.dataset.count || "0");
        const dec = (el.dataset.count || "").includes(".") ? 1 : 0;
        if (reduce) return void (el.textContent = to.toFixed(dec));
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / 1800);
          el.textContent = (to * (1 - Math.pow(1 - p, 3))).toFixed(dec);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      })
    );
    document.querySelectorAll("[data-count]").forEach((el) => counter.observe(el));

    const onClick = (ev: MouseEvent) => {
      const a = (ev.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a || a.getAttribute("href") === "#") return;
      const target = document.querySelector(a.getAttribute("href")!);
      if (!target) return;
      ev.preventDefault();
      document.body.classList.remove("menu-open");
      if (lenis) lenis.scrollTo(target as HTMLElement, { offset: -70 });
      else target.scrollIntoView();
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      lenis?.destroy();
      io.disconnect();
      counter.disconnect();
      document.removeEventListener("click", onClick);
    };
  }, []);
  return null;
}
