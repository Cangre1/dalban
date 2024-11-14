"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Duración de la animación en milisegundos
      once: true, // Si deseas que las animaciones ocurran solo una vez
    });
  }, []);

  return null; // No se renderiza nada, solo inicializa AOS
};

export default AOSInitializer;
