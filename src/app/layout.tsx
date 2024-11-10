import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Milestorm',
  description:
    'Milestorm is a tool that helps you achieve goals by creating customizable roadmaps and tracking your progress.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-[calc(100vh-1px)] flex flex-col font-sans antialiased">
        <main className="relative flex-1 flex flex-col">{children}</main>
      </body>
    </html>
  );
}
