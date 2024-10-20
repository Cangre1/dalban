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
    <footer>
      <div className="bg-gray-950 text-white py-10 lg:py-28">
        <div className="contenedor-custom flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 ">
          <div className="flex flex-col w-full lg:w-1/2 gap-y-2 lg:gap-y-10">
            {/* Footer Logo */}
            <div className="footer-logo mb-6 lg:mb-0">
              <div className="flex items-end gap-x-2">
                {logoFooter && (
                  <a href={logoFooter.link || "/"}>
                    <img
                      src={logoFooter.src}
                      alt={logoFooter.alt || "Logo Footer"}
                      className="w-10 lg:w-16"
                    />
                  </a>
                )}
                <h1 className="text-xl lg:text-3xl font-bold text-[#0099A8]">
                  Dalban
                </h1>
              </div>
            </div>

            <p
              className="text-white text-sm  lg:text-lg text-justify"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />

            {/* Social Icons */}
            <div className="flex space-x-2 mt-2 lg:mt-0 ">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.link || "#"}
                  className="transform hover:-translate-y-1 duration-300"
                >
                  <img
                    src={icon.icon}
                    alt={icon.platform || "Social Icon"}
                    className="w-7"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="w-full lg:w-1/2 flex gap-y-5 lg:justify-end">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-y-10 lg:gap-y-0 lg:gap-x-20 w-full">
              {filteredNavigation.map((item, index) => (
                <div
                  className="lg:h-5/6 space-y-4 w-full lg:w-1/3 "
                  key={index}
                >
                  <a
                    href={item.link}
                    className="text-base lg:text-xl uppercase text-[#0099A8] transition-colors duration-300 font-bold"
                    dangerouslySetInnerHTML={{ __html: item.label }}
                  />

                  {/* Renderizar las opciones debajo del enlace principal */}
                  {item.options && (
                    <ul className="space-y-2">
                      {item.options.map((option, idx) => (
                        <li key={idx}>
                          <a
                            href={option.link}
                            className="text-white  hover:text-[#0099A8] transition-colors duration-300"
                          >
                            <span
                              className="!leading-none text-sm lg:text-base"
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
      </div>
      <div className=" bg-[#0099A8] py-1 lg:py-3">
        <div className="contenedor-custom">
          <p className="text-white text-center text-sm lg:text-base">
            Copyright © 2024 Site developed by MG54. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
