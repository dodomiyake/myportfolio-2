"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const items = [
  ["Home", "hero"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Work", "work"],
  ["Experience", "experience"],
  ["Contact", "contact"],
] as const;

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const navId = useId();

  const closeMenu = useCallback((returnFocus = true) => {
    setOpen(false);
    if (returnFocus) menuBtnRef.current?.focus();
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -45%" },
    );
    items.forEach(([, id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const firstLink = navRef.current?.querySelector<HTMLAnchorElement>("a");
    firstLink?.focus();

    function getFocusable() {
      const links = [...(navRef.current?.querySelectorAll<HTMLElement>("a") ?? [])];
      return [menuBtnRef.current, ...links].filter(Boolean) as HTMLElement[];
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
        return;
      }
      if (e.key !== "Tab") return;

      const focusable = getFocusable();
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, closeMenu]);

  return (
    <header className="nav">
      <a href="#hero" className="brand" aria-label="Oluwadamilola Ajayi home">
        OA<span>.</span>
      </a>
      <button
        ref={menuBtnRef}
        type="button"
        className="menu"
        onClick={() => (open ? closeMenu(false) : setOpen(true))}
        aria-expanded={open}
        aria-controls={navId}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav
        ref={navRef}
        id={navId}
        className={open ? "links open" : "links"}
        aria-label="Primary"
      >
        {items.map(([label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            data-active={active === id}
            aria-current={active === id ? "true" : undefined}
            onClick={() => closeMenu(false)}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="progress" aria-hidden="true">
        <span
          style={{
            transform: `scaleX(${(items.findIndex((i) => i[1] === active) + 1) / items.length})`,
          }}
        />
      </div>
    </header>
  );
}
