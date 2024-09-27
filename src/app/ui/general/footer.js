"use client";

import React, { useState } from "react";

const Footer = ({ data }) => {
  const { logoFooter, paragraph, copyright, navigation, socialIcons } = data;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Filtrar los elementos de navegación que no quieres mostrar
  const filteredNavigation = navigation
    .filter((item) => {
      const normalizedLabel = item.label
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
      return ["informacion", "servicios", "contacto"].includes(normalizedLabel);
    })
    .sort((a, b) => {
      const order = ["informacion", "servicios", "contacto"];
      const normalizedA = a.label
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
      const normalizedB = b.label
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
      return order.indexOf(normalizedA) - order.indexOf(normalizedB);
    });

  return (
    <footer className="bg-[#D9D9D9] text-white py-10">
      <div className="contenedor-custom flex flex-col lg:flex-row ">
        <div className="flex flex-col w-full lg:w-1/2 gap-y-5">
          {/* Footer Logo */}
          <div className="footer-logo mb-6 lg:mb-0">
            {logoFooter && (
              <a href={logoFooter.link || "/"}>
                <img
                  src={logoFooter.src}
                  alt={logoFooter.alt || "Logo Footer"}
                  className="w-44"
                />
              </a>
            )}
          </div>

          <p className="text-black text-sm lg:pr-72">{paragraph}</p>

          {/* Social Icons */}
          <div className="flex space-x-2 mt-6 lg:mt-0 ">
            {socialIcons.map((icon, index) => (
              <a key={index} href={icon.link || "#"} className="">
                <img
                  src={icon.icon}
                  alt={icon.platform || "Social Icon"}
                  className="w-7"
                />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="py-4 mt-6">
            <p className="text-[#76777A] text-sm">{copyright}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="w-full lg:w-1/2 flex gap-y-5 lg:justify-end">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-y-10 lg:gap-y-0 lg:gap-x-20">
            {filteredNavigation.map((item, index) => (
              <div className="lg:h-5/6 space-y-4 w-full lg:w-auto" key={index}>
                <a
                  href={item.link}
                  className="text-gray-800 text-lg hover:text-[#0099A8] transition-colors duration-300"
                  dangerouslySetInnerHTML={{ __html: item.label }}
                />

                {/* Renderizar las opciones debajo del enlace principal */}
                {item.options && (
                  <ul className="space-y-2">
                    {item.options.map((option, idx) => (
                      <li key={idx}>
                        <a
                          href={option.link}
                          className="text-gray-600  hover:text-[#0099A8] transition-colors duration-300"
                        >
                          <span
                            className="!leading-none text-sm"
                            dangerouslySetInnerHTML={{ __html: option.label }}
                          ></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
