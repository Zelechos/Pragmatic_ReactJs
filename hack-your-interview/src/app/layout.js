import "./globals.css";

export const metadata = {
  title: "Hack your Interview",
  description: "Hack your Code interview",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
