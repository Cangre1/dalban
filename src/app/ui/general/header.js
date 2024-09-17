"use client";
import React, { useState, useRef, useEffect } from "react";

const Header = ({ data }) => {
  const { logo, logoMenu, navigation, ctaButton, socialIcons } = data;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const subMenuRef = useRef(null);
  const servicesRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = (label) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

  useEffect(() => {
    if (subMenuRef.current && servicesRef.current) {
      const rect = servicesRef.current.getBoundingClientRect();
      subMenuRef.current.style.left = `${rect.left}px`;
      subMenuRef.current.style.top = `${rect.bottom}px`;
    }
  }, [openSubMenu]);

  // Filtrar los elementos de navegación que no quieres mostrar
  const filteredNavigation = navigation.filter(
    (item) => item.label !== "Informacion"
  );

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 py-2">
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
          } lg:max-h-full lg:opacity-100 lg:flex lg:items-center shadow-2xl lg:shadow-none lg:space-x-6 lg:relative bg-white top-full left-0 w-full lg:w-auto lg:px-0 lg:mt-0 contenedor-custom !py-5 overflow-hidden transition-all duration-500 ease-in-out`}
        >
          <ul className="lg:flex lg:space-x-14 space-y-4 lg:space-y-0">
            {filteredNavigation.map((item, index) => (
              <li
                key={index}
                className={`relative ${item.options ? "group" : ""}`}
                ref={item.label === "Servicios" ? servicesRef : null}
              >
                <a
                  href={item.link}
                  onClick={
                    item.options
                      ? (e) => {
                          e.preventDefault();
                          toggleSubMenu(item.label);
                        }
                      : undefined
                  }
                  className="flex items-center text-gray-800 text-lg hover:text-[#0099A8] transition-colors duration-300"
                >
                  {item.label}
                  {item.options && (
                    <svg
                      className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                        openSubMenu === item.label ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </a>

                {item.options && openSubMenu === item.label && (
                  <ul
                    ref={subMenuRef}
                    className="fixed bg-white !top-16  shadow-2xl rounded-md  w-52 z-50"
                  >
                    {item.options.map((option, idx) => (
                      <li key={idx}>
                        <a
                          href={option.link}
                          className="block text-gray-700 hover:text-[#0099A8] hover:bg-gray-200  py-2 px-4 rounded-md transition-all ease-in-out duration-300"
                          dangerouslySetInnerHTML={{ __html: option.label }}
                        />
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
            className="bg-[#0099A8] border border-[#0099A8] text-white py-2 px-6 rounded-lg hover:bg-transparent hover:text-[#0099A8] transition-colors duration-300"
          >
            {ctaButton.text}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
