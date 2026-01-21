// app/layout.tsx
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Roboto_Mono } from "next/font/google"; 

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={robotoMono.className}>
      <body>
        <ThemeProvider>
          <Header />
          <main className="pt">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

