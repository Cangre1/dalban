"use client";
import React, { useState, useRef, useEffect } from "react";

const Header = ({ data }) => {
  const { logo, logoMenu, navigation, ctaButton } = data;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [openUbicacionSubMenu, setOpenUbicacionSubMenu] = useState(false);
  const [isPharma, setIsPharma] = useState(false); // Estado para verificar si la ruta termina en "/pharma"
  const [isMobile, setIsMobile] = useState(false); // Estado para detectar si es móvil
  const subMenuRef = useRef(null);
  const ubicacionSubMenuRef = useRef(null);
  const servicesRef = useRef(null);
  const ubicacionRef = useRef(null);
  let closeSubMenuTimeout = null;
  let closeUbicacionSubMenuTimeout = null;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      setIsPharma(
        pathname.endsWith("/pharma.html") || pathname.endsWith("/pharma")
      );

      // Detectar si es móvil
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 1024); // lg breakpoint de Tailwind
      };

      checkIsMobile();
      window.addEventListener("resize", checkIsMobile);

      return () => window.removeEventListener("resize", checkIsMobile);
    }
  }, []);

  useEffect(() => {
    if (subMenuRef.current && servicesRef.current) {
      const rect = servicesRef.current.getBoundingClientRect();
      subMenuRef.current.style.left = `${rect.left}px`;
      subMenuRef.current.style.top = `${rect.bottom}px`;
    }
  }, []);

  useEffect(() => {
    if (ubicacionSubMenuRef.current && ubicacionRef.current) {
      const rect = ubicacionRef.current.getBoundingClientRect();
      ubicacionSubMenuRef.current.style.left = `${rect.left}px`;
      ubicacionSubMenuRef.current.style.top = `${rect.bottom}px`;
    }
  }, []);

  // Cerrar submenús al hacer click fuera (útil para móvil)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile) {
        if (
          subMenuRef.current &&
          !subMenuRef.current.contains(event.target) &&
          servicesRef.current &&
          !servicesRef.current.contains(event.target)
        ) {
          setOpenSubMenu(false);
        }

        if (
          ubicacionSubMenuRef.current &&
          !ubicacionSubMenuRef.current.contains(event.target) &&
          ubicacionRef.current &&
          !ubicacionRef.current.contains(event.target)
        ) {
          setOpenUbicacionSubMenu(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile]);

  const filteredNavigation = navigation.filter((item) => {
    const normalizedLabel = item.label
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    return normalizedLabel !== "informacion";
  });

  const handleMouseEnter = () => {
    if (!isMobile) {
      clearTimeout(closeSubMenuTimeout);
      setOpenSubMenu(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      closeSubMenuTimeout = setTimeout(() => {
        setOpenSubMenu(false);
      }, 300);
    }
  };

  const handleUbicacionMouseEnter = () => {
    if (!isMobile) {
      clearTimeout(closeUbicacionSubMenuTimeout);
      setOpenUbicacionSubMenu(true);
    }
  };

  const handleUbicacionMouseLeave = () => {
    if (!isMobile) {
      closeUbicacionSubMenuTimeout = setTimeout(() => {
        setOpenUbicacionSubMenu(false);
      }, 300);
    }
  };

  // Funciones para manejar clicks en móvil
  const handleServicesClick = (e) => {
    if (isMobile) {
      e.preventDefault();
      setOpenSubMenu(!openSubMenu);
      // Cerrar el otro submenú si está abierto
      if (openUbicacionSubMenu) {
        setOpenUbicacionSubMenu(false);
      }
    }
  };

  const handleUbicacionClick = (e) => {
    if (isMobile) {
      e.preventDefault();
      setOpenUbicacionSubMenu(!openUbicacionSubMenu);
      // Cerrar el otro submenú si está abierto
      if (openSubMenu) {
        setOpenSubMenu(false);
      }
    }
  };

  // Función auxiliar para añadir .html a las URLs
  const formatUrl = (url, label) => {
    // Si el label es "Nosotros", no añadir .html
    if (label === "Nosotros") return url;

    // Si la URL es "#" o "/", no añadir .html
    if (url === "#" || url === "/") return url;

    // Si no termina en .html, agregar .html
    return url.endsWith(".html") ? url : `${url}.html`;
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
                className={`relative  ${
                  item.label === "Servicios" || item.label === "Ubicación"
                    ? "group "
                    : ""
                }`}
                ref={
                  item.label === "Servicios"
                    ? servicesRef
                    : item.label === "Ubicación"
                    ? ubicacionRef
                    : null
                }
                onMouseEnter={
                  item.label === "Servicios"
                    ? handleMouseEnter
                    : item.label === "Ubicación"
                    ? handleUbicacionMouseEnter
                    : null
                }
                onMouseLeave={
                  item.label === "Servicios"
                    ? handleMouseLeave
                    : item.label === "Ubicación"
                    ? handleUbicacionMouseLeave
                    : null
                }
              >
                <a
                  href={
                    item.label === "Servicios" || item.label === "Ubicación"
                      ? "#"
                      : formatUrl(item.link, item.label)
                  }
                  onClick={(e) => {
                    if (item.label === "Servicios") {
                      if (!isMobile) {
                        e.preventDefault();
                      } else {
                        handleServicesClick(e);
                      }
                    } else if (item.label === "Ubicación") {
                      if (!isMobile) {
                        e.preventDefault();
                      } else {
                        handleUbicacionClick(e);
                      }
                    }
                  }}
                  className={`flex items-center ${
                    item.label === "Ubicación"
                      ? isPharma
                        ? "bg-[#0099A8] w-fit px-2 rounded-full text-white border border-[#0099A8] hover:bg-transparent hover:text-[#0099A8] transition-all duration-200"
                        : "bg-[#252969] w-fit px-2 rounded-full text-white border border-[#252969] hover:bg-transparent hover:text-[#252969] transition-all duration-200"
                      : isPharma
                      ? "link-nav-pharma"
                      : "link-nav"
                  }`}
                >
                  {item.label}
                  {item.label === "Servicios" && (
                    <svg
                      className={`ml-2 w-4 h-4 transition-transform duration-200 ${
                        openSubMenu ? "rotate-180" : ""
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

                {/* Submenu Servicios */}
                {item.label === "Servicios" && openSubMenu && (
                  <ul
                    ref={subMenuRef}
                    className={`${
                      isMobile
                        ? "relative w-full mt-4 shadow-lg rounded-md bg-white p-4 flex gap-x-2"
                        : "lg:fixed lg:!top-[4.4rem] lg:!left-1/2 lg:transform lg:-translate-x-1/2 lg:shadow-2xl rounded-md rounded-t-none bg-white flex lg:p-5 lg:gap-x-5 w-3/4 2xl:w-auto mx-auto justify-center items-center"
                    } z-50 gap-x-4 pt-2`}
                    onMouseEnter={!isMobile ? handleMouseEnter : undefined}
                    onMouseLeave={!isMobile ? handleMouseLeave : undefined}
                  >
                    {item.options.map((option, idx) => (
                      <li
                        key={idx}
                        className={`flex flex-col justify-center items-center space-y-4 ${
                          isMobile ? "flex-1" : ""
                        }`}
                      >
                        <a
                          href={formatUrl(option.link)}
                          className="relative flex justify-center items-center text-white"
                        >
                          <img
                            src={option.src}
                            alt=""
                            className={`${isMobile ? "w-full" : "w-64"}`}
                          />
                          <span
                            className="absolute inset-0 flex justify-center items-center z-20 text-base lg:text-xl bg-black bg-opacity-25 hover:bg-opacity-10 transition-all ease-in-out duration-300 my-auto mx-auto"
                            dangerouslySetInnerHTML={{ __html: option.label }}
                          />
                        </a>
                        <a
                          className={`btn text-white text-xs lg:text-base px-3 py-0.5 rounded-full shadow-lg transition duration-300 ease-in-out !lowercase ${
                            idx === 1
                              ? "hover:text-[#0099A8] !bg-[#0099A8] !border-[#0099A8] hover:!bg-white"
                              : "hover:bg-white"
                          }`}
                          href={formatUrl(option.link)}
                        >
                          Ver más
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Submenu Ubicación */}
                {item.label === "Ubicación" && openUbicacionSubMenu && (
                  <ul
                    ref={ubicacionSubMenuRef}
                    className={`${
                      isMobile
                        ? "relative w-full mt-4 shadow-lg rounded-md bg-white p-4 flex gap-x-2"
                        : "lg:fixed lg:!top-[4.4rem] lg:!left-1/2 lg:transform lg:-translate-x-1/2 lg:shadow-2xl rounded-md rounded-t-none bg-white flex lg:p-5 lg:gap-x-5 w-3/4 2xl:w-auto mx-auto justify-center items-center"
                    } z-50 gap-x-4 pt-2`}
                    onMouseEnter={
                      !isMobile ? handleUbicacionMouseEnter : undefined
                    }
                    onMouseLeave={
                      !isMobile ? handleUbicacionMouseLeave : undefined
                    }
                  >
                    {item.options.map((option, idx) => (
                      <li
                        key={idx}
                        className={`flex flex-col justify-center items-center space-y-4 ${
                          isMobile ? "flex-1" : ""
                        }`}
                      >
                        <a
                          href={option.link}
                          className="relative flex justify-center items-center text-white"
                        >
                          <img
                            src={option.src}
                            alt=""
                            className={`${isMobile ? "w-full" : "w-64"}`}
                          />
                          <span
                            className="absolute inset-0 flex justify-center items-center z-20 text-base lg:text-xl bg-black bg-opacity-25 hover:bg-opacity-10 transition-all ease-in-out duration-300 my-auto mx-auto text-center"
                            dangerouslySetInnerHTML={{ __html: option.label }}
                          />
                        </a>
                        <a
                          className={`btn text-white text-xs lg:text-base px-3 py-0.5 rounded-full shadow-lg transition duration-300 ease-in-out !lowercase ${
                            idx === 2
                              ? "hover:text-[#0099A8] !bg-[#0099A8] !border-[#0099A8] hover:!bg-white"
                              : "hover:bg-white"
                          }`}
                          href={option.link}
                          target="_blank"
                        >
                          Ver mapa
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
