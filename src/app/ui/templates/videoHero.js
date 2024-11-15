import Image from "next/image";
import Hero from "../../../../public/assets/hero-home.png";
import Play from "../../../../public/assets/play.png";
import Logistica from "../../../../public/assets/dalban-logistica-4.png";
import Pharma from "../../../../public/assets/dalban-pharma.png";

const VideoHero = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row h-[60vh] lg:h-screen relative mt-16 ">
        {/* Overlay oscuro */}
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50 z-10"></div>

        {/* Contenedor del primer video */}
        <div className="relative w-full lg:w-1/2 h-full">
          <a
            href="/logistica"
            className="btn absolute text-xs lg:text-base left-1/2 transform -translate-x-1/2 bottom-4 lg:bottom-28 xl:bottom-36 2xl:bottom-56 z-40  px-4 py-2 rounded-full shadow-lg hover:bg-white transition duration-300 ease-in-out "
          >
            Ver Más
          </a>
          <video
            className="h-full object-cover w-full"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="assets/video-no-pharma-baja.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
          {/* Imagen centrada encima del primer video */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center h-60">
            <Image
              className="h-full w-full object-contain"
              data-aos="zoom-in"
              src={Logistica}
              alt="Overlay Image 1"
            />
          </div>
        </div>

        {/* Contenedor del segundo video */}
        <div className="relative w-full lg:w-1/2 h-full">
          <a
            href="/pharma"
            className="btn absolute text-xs lg:text-base hover:text-[#0099A8] !bg-[#0099A8] !border-[#0099A8]  left-1/2 transform -translate-x-1/2 bottom-4 lg:bottom-28 xl:bottom-36 2xl:bottom-56 z-40  px-4 py-2 rounded-full shadow-lg hover:!bg-white transition duration-300 ease-in-out "
          >
            Ver Más
          </a>
          <video
            className="h-full object-cover w-full"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="assets/video-pharma-baja.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
          {/* Imagen centrada encima del segundo video */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center h-60">
            <Image
              className="h-full w-full object-contain"
              data-aos="zoom-in"
              src={Pharma}
              alt="Overlay Image 2"
            />
          </div>
        </div>
      </div>

      <div className="relative w-full h-[60vh] hidden">
        {/* Imagen de fondo */}
        <Image
          src={Hero}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />

        {/* Overlay oscuro */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#0099A8] opacity-30 z-10"></div>

        {/* Botón de Play */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden">
          <button className="bg-white w-20 h-20 rounded-full shadow-lg hover:bg-gray-300 transition duration-300 ease-in-out flex justify-center items-center">
            <Image
              className="ml-2"
              src={Play}
              alt="Play Button"
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;
