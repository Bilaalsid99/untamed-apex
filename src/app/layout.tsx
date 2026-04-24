import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Untamed Apex | Personal Training",
  description:
    "UK-based personal training focused on strength, movement quality, control, and long-term progression.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body>
        <header className="siteHeader">
          <div className="container headerInner">
            <a href="/" className="logo">
              Untamed Apex
            </a>

            <nav className="navLinks" aria-label="Main navigation">
              <a href="/#services">Services</a>
              <a href="/#approach">Approach</a>
              <a href="/#book">Book</a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="siteFooter">
          <div className="container footerInner">
            <div>
              <p className="footerBrand">Untamed Apex</p>
              <p className="footerText">
                Personal training for strength, movement quality, control, and
                long-term progression.
              </p>
            </div>

            <div className="footerLinks">
              <a href="/#services">Services</a>
              <a href="/#book">Book initial session</a>
              <a href="mailto:hello@untamedapex.co.uk">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}