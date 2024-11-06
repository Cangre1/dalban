const Description = ({ data }) => {
  const { insights } = data;
  return (
    <div
      id="nosotros"
      className="contenedor-custom !pb-12 !pt-32 lg:!pb-28 lg:!pt-40"
    >
      <div className="flex flex-col justify-center items-center gap-y-5 lg:gap-y-10">
        {/* Columna del título */}
        <div>
          <h1
            className="titles !text-[#252969]"
            dangerouslySetInnerHTML={{ __html: insights.title }}
          ></h1>
        </div>

        {/* Columna del párrafo */}
        <div>
          <p
            className="paragraphs text-center"
            dangerouslySetInnerHTML={{ __html: insights.paragraph }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default Description;
