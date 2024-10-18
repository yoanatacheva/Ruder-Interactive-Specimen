import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import { ReactLenis } from '@/lib/lenis'

const Ruder = localFont({
  src: "./fonts/Ruder.woff2",
  variable: "--font-ruder",
  weight: "100 900",
});

const Kontur = localFont({
  src: "./fonts/Ruder-Kontur.woff2",
  variable: "--font-kontur",
  weight: "95 380",
});

const Helvetica = localFont({
  src: "./fonts/Helvetica-Light.woff2",
  variable: "--font-helvetica",
  style: 'light',
});

export const metadata: Metadata = {
  title: "Ruder Interactive Specimen",
  description: "Interactive digital showcase of Ruder typeface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root options={{ lerp: 0.1 }}>
        <body className={`flex flex-col min-h-screen ${Ruder.variable} ${Helvetica.variable} ${Kontur.variable} antialiased select-none font-helvetica`}>
          <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
              >
              <Menu /> 
              <main className="flex-grow">{children}</main>
              <Footer />
          </ThemeProvider>
        </body>
      </ReactLenis>
  </html>
  );
}
