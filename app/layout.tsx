import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Privacy Policy - Enterprise Chat Application',
  description: 'Privacy Policy and Terms of Service for Enterprise Chat Application by New Info Tech',
  keywords: 'privacy policy, enterprise chat, secure messaging, business communication',
  icons: {
    icon: '/app-icon.png',
    apple: '/app-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
