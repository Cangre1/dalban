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
        <p className=" text-xl lg:text-3xl font-bold text-black">
          Dejanos tu consulta.<br></br> Un especialista se pondrá<br></br> en
          contacto con vos.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-1/2 space-y-5 lg:space-y-10"
      >
        <div className="flex flex-col lg:flex-row gap-y-5 lg:gap-y-0 gap-x-5 lg:gap-x-10">
          <div className=" w-full">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nombre y Apellido"
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none text-lg placeholder:text-gray-400 text-gray-400"
              required
            />
          </div>

          <div className=" w-full">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Mail"
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none text-lg placeholder:text-gray-400 text-gray-400"
              required
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-y-5 lg:gap-y-0 gap-x-5 lg:gap-x-10">
          <div className=" w-full">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Teléfono"
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none text-lg placeholder:text-gray-400 text-gray-400"
              required
            />
          </div>
          <div className=" w-full">
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none h-full rounded-lg  text-lg placeholder:text-gray-400 text-gray-400 "
              required
            >
              <option value="">Servicio</option>
              <option value="service1">Servicio 1</option>
              <option value="service2">Servicio 2</option>
              <option value="service3">Servicio 3</option>
            </select>
          </div>
        </div>

        <div className="">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Mensaje"
            className="w-full px-3 py-2 border rounded-lg border-black focus:outline-none text-lg placeholder:text-black text-black"
            rows="5"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-[#10CFC9] text-white px-14 py-3 rounded-full text-center  transition duration-300 w-fit uppercase hover:bg-transparent hover:text-[#10CFC9] border border-[#10CFC9]"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
