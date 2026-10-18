import './globals.css';

export const metadata = {
  title: 'Portal Dashboard K3',
  description: 'Portal terpusat K3 dan APD Estate PG 1'
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
