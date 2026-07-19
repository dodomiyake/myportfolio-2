"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#07080d", color: "#f4f7fb", fontFamily: "Arial, Helvetica, sans-serif" }}>
        <main style={{ minHeight: "100vh", display: "grid", placeContent: "center", padding: "2rem", textAlign: "center" }}>
          <p style={{ letterSpacing: "0.2em", textTransform: "uppercase", color: "#5fe5ff", fontSize: "0.7rem" }}>
            Something went wrong
          </p>
          <h1 style={{ fontSize: "clamp(2rem,6vw,4rem)", letterSpacing: "-0.05em", maxWidth: "20ch" }}>
            The page hit an unexpected error.
          </h1>
          <p style={{ color: "#9ca8b8", maxWidth: "42ch", margin: "0 auto 1.5rem" }}>
            {error.message || "Please try again."}
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              justifySelf: "center",
              border: "1px solid #5fe5ff",
              borderRadius: "999px",
              padding: "0.9rem 1.25rem",
              background: "#5fe5ff",
              color: "#051015",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
