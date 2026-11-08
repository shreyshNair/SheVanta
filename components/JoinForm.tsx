"use client";
import { useState } from "react";

/** Front-end only: no backend is wired yet, so nothing is sent or stored. */
export default function JoinForm() {
  const [done, setDone] = useState(false);
  return done ? (
    <p className="thanks">Thank you — you&apos;re on the list. (Demo form: nothing has been saved yet.)</p>
  ) : (
    <form
      className="join"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <input type="email" required placeholder="Your email address" aria-label="Email address" />
      <button className="btn-dark" type="submit">
        Join SheVanta
      </button>
    </form>
  );
}
