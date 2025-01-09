"use client";
import React, { useState, useRef, useEffect } from "react";

const Header = ({ data }) => {
  const { logo, logoMenu, navigation, ctaButton } = data;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [isPharma, setIsPharma] = useState(false); // Estado para verificar si la ruta termina en "/pharma"
  const subMenuRef = useRef(null);
  const servicesRef = useRef(null);
  let closeSubMenuTimeout = null;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      setIsPharma(pathname.endsWith("/pharma"));
    }
  }, []);

  useEffect(() => {
    if (subMenuRef.current && servicesRef.current) {
      const rect = servicesRef.current.getBoundingClientRect();
      subMenuRef.current.style.left = `${rect.left}px`;
      subMenuRef.current.style.top = `${rect.bottom}px`;
    }
  }, []);

  const filteredNavigation = navigation.filter((item) => {
    const normalizedLabel = item.label
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    return normalizedLabel !== "informacion";
  });

  const handleMouseEnter = () => {
    clearTimeout(closeSubMenuTimeout);
    setOpenSubMenu(true);
  };

  const handleMouseLeave = () => {
    closeSubMenuTimeout = setTimeout(() => {
      setOpenSubMenu(false);
    }, 300);
  };

  // Función auxiliar para añadir .html a las URLs
  const formatUrl = (url) => {
    if (url === '#' || url === '/') return url;
    return url.endsWith('.html') ? url : `${url}.html`;
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 py-4 lg:py-0">
      <div className="contenedor-custom flex justify-between items-end lg:items-center w-full">
        {/* Logo */}
        <div className="logo">
          <a href={formatUrl(logo.link)}>
            <img
              src={isPharma ? logo.src2 : logo.src}
              alt={logo.alt}
              className="w-12"
            />
          </a>
        </div>

        {/* Menu toggle (hamburger) */}
        <div className="lg:hidden">
          <a onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img
              src={isPharma ? logoMenu.src2 : logoMenu.src}
              alt={logo.alt}
              className="w-8"
            />
          </a>
        </div>

        {/* Navigation (Desktop & Mobile) */}
        <nav
          className={`${
            isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          } lg:max-h-full lg:opacity-100 absolute lg:flex lg:items-center shadow-2xl lg:shadow-none lg:space-x-6 lg:relative bg-white top-full left-0 w-full lg:w-auto lg:px-0 lg:mt-0 contenedor-custom !py-5 overflow-hidden transition-all duration-500 ease-in-out`}
        >
          <ul className="lg:flex lg:space-x-14 space-y-4 lg:space-y-0">
            {filteredNavigation.map((item, index) => (
              <li
                key={index}
                className={`relative ${
                  item.label === "Servicios" ? "group" : ""
                }`}
                ref={item.label === "Servicios" ? servicesRef : null}
                onMouseEnter={
                  item.label === "Servicios" ? handleMouseEnter : null
                }
                onMouseLeave={
                  item.label === "Servicios" ? handleMouseLeave : null
                }
              >
                <a
                  href={item.label === "Servicios" ? "#" : formatUrl(item.link)}
                  onClick={(e) =>
                    item.label === "Servicios" && e.preventDefault()
                  }
                  className={`flex items-center ${
                    isPharma ? "link-nav-pharma" : "link-nav"
                  }`}
                >
                  {item.label}
                  {item.label === "Servicios" && (
                    <svg
                      className="ml-2 w-4 h-4"
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

                {/* Submenu */}
                {item.label === "Servicios" && openSubMenu && (
                  <ul
                    ref={subMenuRef}
                    className="lg:fixed lg:!top-[4.29rem] lg:!left-1/2 lg:transform lg:-translate-x-1/2 lg:shadow-2xl rounded-md z-50  gap-x-4 pt-2 lg:pt-0 bg-white flex lg:p-5 lg:gap-x-10 "
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.options.map((option, idx) => (
                      <li
                        key={idx}
                        className="flex flex-col justify-center items-center space-y-4"
                      >
                        <a
                          href={formatUrl(option.link)}
                          className="relative flex justify-center items-center text-white rounded-md"
                        >
                          <img
                            src={option.src}
                            alt=""
                            className="w-44 rounded-lg"
                          />
                          <span
                            className="absolute inset-0 flex justify-center items-center z-20 text-base  lg:text-xl bg-black bg-opacity-20 hover:bg-opacity-10 transition-all ease-in-out duration-300 my-auto mx-auto"
                            dangerouslySetInnerHTML={{ __html: option.label }}
                          />
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
        <div className="hidden ">
          <a
            href={formatUrl(ctaButton.link)}
            className={`${
              isPharma ? "link-nav-access-pharma" : "link-nav-access"
            }`}
          >
            {ctaButton.text}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
