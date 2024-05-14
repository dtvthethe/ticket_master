import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ticket Master",
  description: "Ticket Master App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
