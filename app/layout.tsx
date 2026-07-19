import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.oluwadamilolaajayi.com"),
  title: { default: "Oluwadamilola Ajayi — Full-Stack Developer", template: "%s — Oluwadamilola Ajayi" },
  description: "Full-stack developer building thoughtful digital products from interface to infrastructure.",
  openGraph: {
    title: "Oluwadamilola Ajayi — Full-Stack Developer",
    description: "Thoughtful digital products, built end to end.",
    type: "website",
    url: "https://www.oluwadamilolaajayi.com",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("reduced-motion");var r=s===null?matchMedia("(prefers-reduced-motion: reduce)").matches:s==="true";document.documentElement.dataset.reducedMotion=String(r)}catch(e){}})()`,
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
