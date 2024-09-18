const Vision = ({ data }) => {
  const { industria } = data;
  return (
    <div className="contenedor-custom !py-12 lg:!py-28 space-y-12 lg:space-y-24">
      <div className="text-center space-y-5">
        <h1
          className="text-2xl lg:text-4xl text-black"
          dangerouslySetInnerHTML={{
            __html: industria.vision.title,
          }}
        ></h1>
        <p
          className="text-lg text-center text-[#019DAA] font-bold"
          dangerouslySetInnerHTML={{
            __html: industria.vision.span,
          }}
        ></p>
        <p
          className="text-base lg:text-lg text-black text-center w-2/3 mx-auto"
          dangerouslySetInnerHTML={{
            __html: industria.vision.paragraph,
          }}
        ></p>
      </div>
      <div className="flex gap-10 justify-between w-full py-5 lg:py-10">
        <div className="flex flex-col lg:flex-row w-full gap-y-5">
          <div className="w-full lg:w-3/4">
            <img
              src={industria.vision.src.src} // Cambia esta ruta según tu imagen
              alt="Imagen descriptiva"
              className="w-full lg:w-2/3 h-auto rounded-lg shadow-lg mr-auto"
            />
          </div>
          <div className="flex flex-col w-full lg:w-3/4 gap-y-5 mr-auto justify-center">
            <h1
              className="text-lg lg:text-3xl text-[#10CFC9]"
              dangerouslySetInnerHTML={{
                __html: industria.vision.src.title,
              }}
            ></h1>
            <p
              className="text-base lg:text-lg text-black"
              dangerouslySetInnerHTML={{
                __html: industria.vision.src.paragraph,
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
