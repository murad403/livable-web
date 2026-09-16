import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import ReduxProvider from "@/providers/ReduxProvider";
import "./globals.css";

const neueMontreal = localFont({
  src: [
    {
      path: "./fonts/NeueMontreal-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FE3F39",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Livable",
  description: "A premium, full-service relocation advisory platform helping intentional relocators plan scouting trips and streamline moving to European destinations.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${neueMontreal.variable} font-sans h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400,300&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <ReduxProvider>
          {children}
          <Toaster position="top-center" richColors />
        </ReduxProvider>
      </body>
    </html>
  );
}
