import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import AppNavBar from "./components/navbar";
import { NextUIProv } from "./providers/NextUIProv";
import { ThemeSwitcher } from "./components/themeSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.className} text-foreground bg-background`}>
        <NextUIProv>
          <main className="main-body">
            <div className="app-nav-bar-container">
              <AppNavBar />
            </div>
            <div className="app-content-container">
              {children}
            </div>
          </main>
        </NextUIProv>
      </body>
    </html>
  );
}