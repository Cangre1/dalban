const Description = ({ data }) => {
  const { aboutUs } = data;
  return (
    <div id="nosotros" className="contenedor-custom !py-12 lg:!py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 lg:gap-y-0">
        {/* Columna del título */}
        <div>
          <h1
            className="titles"
            dangerouslySetInnerHTML={{ __html: aboutUs.title }}
          ></h1>
        </div>

        {/* Columna del párrafo */}
        <div>
          <p
            className="paragraphs"
            dangerouslySetInnerHTML={{ __html: aboutUs.paragraph }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default Description;
