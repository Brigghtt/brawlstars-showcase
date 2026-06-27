// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BodyClass from "@/components/BodyClass";
import AuthProvider from "@/components/auth/AuthProvider";

export const metadata: Metadata = {
  title: "荒野乱斗 Brawl Stars",
  description: "英雄图鉴 | 游戏模式 | 对战地图",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <BodyClass />
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
