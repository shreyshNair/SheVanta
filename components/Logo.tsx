/* The supplied logo has an off-white background, so it is blended with `multiply` to sit cleanly on the page. */
const IMG = 1024;

/** Crops the supplied logo down to just the "S" mark. */
export function LogoMark({ size = 44 }: { size?: number }) {
  const k = size / 290;
  return (
    <span className="logo-mark" style={{ width: size, height: size }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="SheVanta"
        style={{ width: IMG * k, left: size / 2 - 512 * k, top: size / 2 - 392 * k }}
      />
    </span>
  );
}

/** Full lockup: mark + wordmark + tagline (the supplied image, trimmed). */
export function LogoFull({ width = 220 }: { width?: number }) {
  const k = width / 640;
  const h = 520 * k;
  return (
    <span className="logo-full" style={{ width, height: h }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="SheVanta — The Vantage Point for Women"
        style={{ width: IMG * k, left: -192 * k, top: -250 * k }}
      />
    </span>
  );
}
