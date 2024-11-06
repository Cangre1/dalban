import Image from "next/image";
import Hero from "../../../../public/assets/hero-home.png";
import Play from "../../../../public/assets/play.png";

const VideoHero = () => {
  return (
    <div>
      <div className="hidden lg:flex h-screen relative">
        {/* Overlay oscuro */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#252969] opacity-30 z-10"></div>
        <video
          className=" h-full object-cover w-1/2"
          autoPlay
          loop
          muted // El video está silenciado
          playsInline // Para que funcione correctamente en dispositivos móviles
        >
          <source src="assets/video-pharma-baja.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
        <video
          className="w-1/2 h-full object-cover"
          autoPlay
          loop
          muted // El video está silenciado
          playsInline // Para que funcione correctamente en dispositivos móviles
        >
          <source src="assets/video-no-pharma-baja.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </div>
      <div className="relative w-full h-[60vh] lg:hidden">
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
          <button className="bg-white w-20 h-20 rounded-full shadow-lg  hover:bg-gray-300 transition duration-300 ease-in-out flex justify-center items-center">
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
