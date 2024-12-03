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
      <head>
        {/* Meta básico */}
        <meta
          name="description"
          content="Nos especializamos en ofrecer soluciones de transporte y logística personalizadas e integradas."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        <link rel="icon" href="https://i.ibb.co/9q9SNL5/symbol-blue.png" />

        {/* SEO */}
        <meta
          name="keywords"
          content="empresa, servicios, Grupo Dalban, logistica, transporte, pilar, pharma"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="" />

        {/* Redes sociales */}
        <meta property="og:title" content="Grupo Dalban" />
        <meta
          property="og:description"
          content="Nos especializamos en ofrecer soluciones de transporte y logística personalizadas e integradas."
        />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
      </head>
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
