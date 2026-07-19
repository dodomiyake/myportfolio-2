"use client";
import dynamic from "next/dynamic";
export const CanvasLoader = dynamic(() => import("./ExperienceCanvas"), { ssr: false, loading: () => <div className="canvas-fallback" aria-hidden="true" /> });
