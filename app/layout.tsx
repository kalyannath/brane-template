
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppNavBar from "./components/navbar";
import { NextUIProv } from "./providers/NextUIProv";
import Sidebar from "./components/sidebar";
import ReduxProvider from "./redux/reduxProvider";
import RightSideBar from "./components/rightSideBar";
import MainBody from "./components/mainBody";

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
      <body className={`${inter.className} text-foreground bg-background border-box transition-all duration-[500ms]`}>
        <NextUIProv>
          <ReduxProvider>
            <main className="h-screen w-screen flex flex-col box-border p-0 m-0">
              <div className="app-nav-bar-container">
                <AppNavBar />
              </div>
              <div className="bg-bodyBackground flex-1 w-full overflow-x-hidden overflow-y-hidden flex justify-center px-1 py-5 gap-5">
                <Sidebar />
                <div className="block xl:flex flex-1 px-2 lg:px-0 gap-5 overflow-y-auto h-full">
                  <MainBody>{children}</MainBody>
                  <RightSideBar />
                </div>
              </div>
            </main>
          </ReduxProvider>
        </NextUIProv>
      </body>
    </html>
  );
}
