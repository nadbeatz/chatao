import "./globals.css";

export const metadata = {
  title: "Afrikan Beatz AI",
  description: "Assistente de inteligência artificial da Afrikan Beatz.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}