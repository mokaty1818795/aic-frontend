import type { Metadata } from "next";
import localFont from "next/font/local";
import { Providers } from "./providers";
import { BeneficiaryProvider } from "./context/beneficiariesContext";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "aic",
  description: "aic application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <BeneficiaryProvider>{children}</BeneficiaryProvider>
        </Providers>
      </body>
    </html>
  );
}
