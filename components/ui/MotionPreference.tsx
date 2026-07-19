"use client";

import { useEffect, useState } from "react";
import { Accessibility } from "lucide-react";

function readPreference() {
  return (
    localStorage.getItem("reduced-motion") === "true" ||
    matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function MotionPreference() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const next = readPreference();
    setReduced(next);
    document.documentElement.dataset.reducedMotion = String(next);
  }, []);

  function toggle() {
    const next = !reduced;
    localStorage.setItem("reduced-motion", String(next));
    setReduced(next);
    document.documentElement.dataset.reducedMotion = String(next);
    location.reload();
  }

  return (
    <button
      type="button"
      className="motion-toggle"
      onClick={toggle}
      aria-pressed={reduced}
      aria-label={reduced ? "Motion off. Enable motion" : "Reduce motion"}
    >
      <Accessibility size={17} aria-hidden="true" />
      <span>{reduced ? "Motion off" : "Reduce motion"}</span>
    </button>
  );
}
