import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Script from 'next/script';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hakan Ören | Software Developer",
  description: "Personal website - Software developer and web technologies expert",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <Script id="grammarly-handler">{`
          // Remove Grammarly attributes
          window.addEventListener('load', function() {
            const observer = new MutationObserver(function(mutations) {
              mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes') {
                  if (mutation.attributeName.startsWith('data-gr-') || 
                      mutation.attributeName.startsWith('data-new-gr-')) {
                    const element = mutation.target;
                    element.removeAttribute(mutation.attributeName);
                  }
                }
              });
            });

            observer.observe(document.body, {
              attributes: true,
              subtree: true,
              childList: true
            });

            // Initial cleanup
            const attributes = [...document.body.attributes];
            attributes.forEach(attr => {
              if (attr.name.startsWith('data-gr-') || 
                  attr.name.startsWith('data-new-gr-')) {
                document.body.removeAttribute(attr.name);
              }
            });
          });
        `}</Script>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
