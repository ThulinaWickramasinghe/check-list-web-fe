import Layout from '@/components/layout'

import { Inter as FontSans } from 'next/font/google';
import { Provider } from "react-redux";

import './globals.css';
import { cn } from '../lib/utils';

import store from "@/store";

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'bg-background min-h-screen font-sans antialiased',
          fontSans.variable
        )}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
