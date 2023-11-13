import { Inter as FontSans } from 'next/font/google';
import { Providers } from '@/store/providers';
import { Toaster } from '@/components/ui/common/toaster';

import './globals.css';
import { cn } from '../lib/utils';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang='en'>
        <body
          className={cn(
            'bg-background min-h-screen font-sans antialiased',
            fontSans.variable
          )}
        >
          {children}
          <Toaster />
        </body>
      </html>
    </Providers>
  );
}
