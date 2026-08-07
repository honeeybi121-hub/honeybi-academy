import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Honeybi Academy",
  description: "Formação executiva em gestão empresarial, liderança e inteligência artificial."
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
