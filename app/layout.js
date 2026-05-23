import './globals.css';

export const metadata = {
  title: 'Planto – Breathe Natural | Premium Plant Store',
  description: 'Discover our premium collection of indoor and outdoor plants. Bring nature into your home with Planto.',
  keywords: 'plants, indoor plants, house plants, buy plants online, Planto',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
