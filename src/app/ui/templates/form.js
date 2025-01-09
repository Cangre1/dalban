"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aquí puedes agregar la lógica para enviar los datos
  };

  return (
    <div className="flex flex-col lg:flex-row  !py-12 lg:!py-28 contenedor-custom gap-y-10">
      <div className="w-full lg:w-1/2">
        <p
          className=" text-xl lg:text-3xl font-bold text-black"
          data-aos="zoom-in"
        >
          Dejanos tu consulta.<br></br> Un especialista se pondrá<br></br> en
          contacto con vos.
        </p>
      </div>
      <form
        action="https://formsubmit.co/ochoa.mariano90@gmail.com"
        method="POST"
        className="w-full lg:w-1/2 space-y-5 lg:space-y-10"
        data-aos="zoom-in"
      >
        <input type="hidden" name="_subject" value="Nuevo contacto desde el sitio web" />
        <input type="hidden" name="_next" value="https://http://dalban.com.ar/contacto" />
        <input type="hidden" name="_captcha" value="true" />
        <input type="hidden" name="_template" value="table" />
        
        <input type="text" name="_honey" style={{display: 'none'}} />

        <div className="flex flex-col lg:flex-row gap-y-5 lg:gap-y-0 gap-x-5 lg:gap-x-10">
          <div className="w-full">
            <input
              type="text"
              name="name"
              placeholder="Nombre y Apellido"
              className="w-full px-3 py-2 border-b border-[#252969] focus:outline-none text-lg placeholder:text-gray-400 text-gray-400"
              required
            />
          </div>
          
          <div className="w-full">
            <input
              type="email"
              name="email"
              placeholder="Mail"
              className="w-full px-3 py-2 border-b border-[#252969] focus:outline-none text-lg placeholder:text-gray-400 text-gray-400"
              required
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-y-5 lg:gap-y-0 gap-x-5 lg:gap-x-10">
          <div className="w-full">
            <input
              type="tel"
              name="phone"
              placeholder="Teléfono"
              className="w-full px-3 py-2 border-b border-[#252969] focus:outline-none text-lg placeholder:text-gray-400 text-gray-400"
              required
            />
          </div>
          <div className="w-full">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[#252969] focus:outline-none h-full rounded-lg  text-lg placeholder:text-gray-400 text-gray-400 "
              required
            >
              <option value="">Servicio</option>
              <option value="logistica">Logística</option>
              <option value="pharma">Pharma</option>
              <option value="fullservice">Full Service</option>
            </select>
          </div>
        </div>

        <div className="">
          <textarea
            name="message"
            placeholder="Mensaje"
            className="w-full px-3 py-2 border-2 rounded-lg border-[#252969] focus:outline-none text-lg placeholder:text-gray-400 text-black"
            rows="5"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="btn px-14 py-3 rounded-full text-center text-white"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
