import "./globals.css";

export const metadata = {
  title: "GitHub Průzkumník",
  description:
    "Průzkumník repozitářů GitHub pomocí Next.js, GraphQL a TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
