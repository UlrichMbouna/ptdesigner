import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Design Excellence",
  description: "Portfolio - Senior UI/UX Designer",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
          lang="fr"
          className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Design Excellence | Senior UI/UX Designer</title>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script id="tailwind-config" dangerouslySetInnerHTML={{ __html: `tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "on-secondary-fixed-variant": "#574500",
        "on-surface": "#121c2a",
        "primary": "#004ac6",
        "primary-fixed": "#dbe1ff",
        "on-secondary": "#ffffff",
        "tertiary-fixed": "#e2e2e2",
        "secondary": "#735c00",
        "on-tertiary-fixed": "#1a1c1c",
        "tertiary-container": "#6c6d6d",
        "secondary-container": "#fed01b",
        "on-primary-fixed-variant": "#003ea8",
        "outline": "#737686",
        "surface-container-highest": "#d9e3f6",
        "surface-dim": "#d0dbed",
        "outline-variant": "#c3c6d7",
        "surface-bright": "#f8f9ff",
        "on-error": "#ffffff",
        "primary-fixed-dim": "#b4c5ff",
        "on-tertiary": "#ffffff",
        "surface-container-lowest": "#ffffff",
        "on-primary-container": "#eeefff",
        "inverse-primary": "#b4c5ff",
        "tertiary-fixed-dim": "#c6c6c7",
        "on-surface-variant": "#434655",
        "on-secondary-container": "#6f5900",
        "surface-variant": "#d9e3f6",
        "surface": "#f8f9ff",
        "on-error-container": "#93000a",
        "on-background": "#121c2a",
        "surface-container": "#e6eeff",
        "surface-tint": "#0053db",
        "inverse-surface": "#27313f",
        "inverse-on-surface": "#eaf1ff",
        "secondary-fixed-dim": "#eec200",
        "background": "#f8f9ff",
        "surface-container-high": "#dee9fc",
        "on-secondary-fixed": "#231b00",
        "secondary-fixed": "#ffe083",
        "on-tertiary-container": "#f0f0f0",
        "on-tertiary-fixed-variant": "#454747",
        "surface-container-low": "#eff4ff",
        "tertiary": "#535555",
        "on-primary-fixed": "#00174b",
        "primary-container": "#2563eb",
        "on-primary": "#ffffff",
        "error-container": "#ffdad6",
        "error": "#ba1a1a"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      "spacing": {
        "unit": "8px",
        "margin-desktop": "40px",
        "gutter": "24px",
        "container-max": "1280px",
        "margin-mobile": "16px"
      },
      "fontFamily": {
        "headline-lg-mobile": ["Poppins"],
        "body-sm": ["Poppins"],
        "body-md": ["Poppins"],
        "button": ["Poppins"],
        "headline-md": ["Poppins"],
        "headline-xl": ["Poppins"],
        "headline-lg": ["Poppins"],
        "label-md": ["Poppins"],
        "body-lg": ["Poppins"]
      },
      "fontSize": {
        "headline-lg-mobile": ["28px", {"lineHeight": "36px", "fontWeight": "600"}],
        "body-sm": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
        "button": ["16px", {"lineHeight": "20px", "fontWeight": "600"}],
        "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
        "headline-xl": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
        "label-md": ["14px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "500"}],
        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}]
      }
    }
  }
}` }} />
        <style dangerouslySetInnerHTML={{ __html: `.material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
.mesh-gradient { background-color: #f8f9ff; background-image: radial-gradient(at 0% 0%, rgba(0, 74, 198, 0.08) 0, transparent 50%), radial-gradient(at 50% 0%, rgba(254, 208, 27, 0.05) 0, transparent 50%), radial-gradient(at 100% 0%, rgba(0, 74, 198, 0.08) 0, transparent 50%); }
.text-gradient-gold { background: linear-gradient(135deg, #735c00 0%, #fed01b 50%, #735c00 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }` }} />
      </head>
      <body className="min-h-full flex flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
      </body>
      </html>
  );
}
