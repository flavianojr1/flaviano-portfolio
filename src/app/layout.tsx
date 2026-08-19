import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Flaviano Astolfo Junior · Analista de Dados',
  description: 'Portfólio profissional de Flaviano Astolfo Junior.',
  openGraph: {
    title: 'Flaviano Astolfo Junior · Analista de Dados',
    description: 'Dados que orientam decisões.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}