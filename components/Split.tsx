import { Fragment, type CSSProperties } from "react";

type Tag = "h1" | "h2" | "h3";

/**
 * Split heading: every word becomes .w > span so CSS can stagger them in.
 * `lines` are separated by <br>; lines from index `lt` onward get the lighter .lt style.
 */
export function Split({
  as: Tag = "h2",
  lines,
  className = "",
  base,
  lt = -1,
}: {
  as?: Tag;
  lines: string[];
  className?: string;
  base?: number;
  lt?: number;
}) {
  let i = 0;
  const style = base !== undefined ? ({ "--base": `${base}ms` } as CSSProperties) : undefined;
  return (
    <Tag className={`${className} split`} style={style}>
      {lines.map((line, li) => {
        const words = line.split(" ").map((w) => {
          const idx = i++;
          return (
            <Fragment key={idx}>
              <span className="w">
                <span style={{ "--i": idx } as CSSProperties}>{w}</span>
              </span>{" "}
            </Fragment>
          );
        });
        return (
          <Fragment key={li}>
            {lt >= 0 && li >= lt ? <span className="lt">{words}</span> : words}
            {li < lines.length - 1 && <br />}
          </Fragment>
        );
      })}
    </Tag>
  );
}
