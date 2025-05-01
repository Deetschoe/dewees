import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

// Import the client layout component with dynamic import
const ClientLayout = dynamic(() => import('@/components/ClientLayout'), { ssr: true });

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });

export const metadata: Metadata = {
  title: "Dewees Island Conservancy - Helping Nature Thrive",
  description: "A 501c3 non-profit organization dedicated to protecting and restoring natural environments through education, engagement, and fundraising activities.",
  icons: {
    icon: [
      {
        url: '/favicon_io/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon_io/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon_io/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/favicon_io/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${openSans.variable} font-sans min-h-screen flex flex-col`} suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
