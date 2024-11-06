import localFont from "next/font/local";
import "./globals.css";
import data from "../../public/data/layout.json"; // Importa el archivo JSON con los datos del header
import Header from "./ui/general/header"; // Importa el componente Header
import Footer from "./ui/general/footer"; // Importa el componente Footer

// Configuración de las fuentes locales
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Grupo Dalban",
  description: "Grupo Dalban",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header data={data} />
        <div className="bg-white">{children}</div>
        <Footer data={data} />
      </body>
    </html>
  );
}
