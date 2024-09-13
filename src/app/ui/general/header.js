"use client";
import React, { useState } from "react";

const Header = ({ data }) => {
  const { logo, logoMenu, navigation, ctaButton, socialIcons } = data;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Filtrar los elementos de navegación que no quieres mostrar
  const filteredNavigation = navigation.filter(
    (item) => item.label !== "Informacion"
  );

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 py-6">
      <div className="contenedor-custom flex justify-between items-end lg:items-center">
        {/* Logo */}
        <div className="logo">
          <a href={logo.link}>
            <img src={logo.src} alt={logo.alt} className="w-32" />
          </a>
        </div>

        {/* Menu toggle (hamburger) */}
        <div className="lg:hidden">
          <a onClick={toggleMenu}>
            <img src={logoMenu.src} alt={logo.alt} className="w-8" />
          </a>
        </div>

        {/* Navigation (Desktop & Mobile) */}
        <nav
          className={`${
            isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          } lg:max-h-full lg:opacity-100 lg:flex lg:items-center lg:space-x-6 absolute lg:relative lg:bg-transparent bg-white top-full left-0 w-full lg:w-auto  lg:px-0 lg:mt-0 mt-4 overflow-hidden transition-all duration-500 ease-in-out`}
        >
          <ul className="lg:flex lg:space-x-14 space-y-4 lg:space-y-0">
            {filteredNavigation.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-gray-800 text-lg hover:text-[#0099A8] transition-colors duration-300"
                >
                  {item.label}
                </a>

                {item.options && (
                  <ul className="mt-2 lg:mt-0 lg:absolute  lg:bg-white lg:shadow-lg lg:rounded-md lg:p-4 hidden group-hover:block">
                    {item.options.map((option, idx) => (
                      <li key={idx}>
                        <a
                          href={option.link}
                          className="block text-gray-700 hover:text-blue-500 py-1"
                        >
                          {option.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a
            href={ctaButton.link}
            className="bg-[#0099A8] text-white py-2 px-6 rounded-lg hover:bg-[#6db1b7] transition-colors duration-300"
          >
            {ctaButton.text}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
