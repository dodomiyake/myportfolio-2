"use client";

import { useEffect, useState } from "react";

function readPreference() {
  if (typeof window === "undefined") return true;
  const saved = localStorage.getItem("reduced-motion");
  if (saved !== null) return saved === "true";
  return matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Defaults to true until the client can read preference, avoiding a motion flash. */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(true);

  useEffect(() => {
    const sync = () => setReduced(readPreference());
    sync();
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return reduced;
}
