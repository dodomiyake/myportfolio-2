"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export function ScrollController(){useEffect(()=>{gsap.registerPlugin(ScrollTrigger);const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches||localStorage.getItem("reduced-motion")==="true";if(reduced)return;const lenis=new Lenis({duration:1.1,smoothWheel:true});lenis.on("scroll",ScrollTrigger.update);const tick=(time:number)=>lenis.raf(time*1000);gsap.ticker.add(tick);gsap.ticker.lagSmoothing(0);gsap.utils.toArray<HTMLElement>(".reveal").forEach(el=>gsap.fromTo(el,{opacity:0,y:42},{opacity:1,y:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 82%",toggleActions:"play none none reverse"}}));return()=>{lenis.destroy();gsap.ticker.remove(tick);ScrollTrigger.getAll().forEach(t=>t.kill())}},[]);return null}
