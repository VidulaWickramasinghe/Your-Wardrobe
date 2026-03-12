import './globals.css';

export const metadata = {
  title: 'Digital Wardrobe',
  description: 'Organize your closet, plan your outfits.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}