import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { EB_Garamond } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const eb_garamond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-heading',
});

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
    <html lang="en" className={cn(inter.variable, eb_garamond.variable)}>
      <body className="min-h-[calc(100vh-1px)] flex flex-col font-sans antialiased">
        <main className="relative flex-1 flex flex-col">{children}</main>
      </body>
    </html>
  );
}
