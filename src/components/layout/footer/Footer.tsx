import { IArrowWhite } from "@/assets/Icons/symbols/IArrowWhite";
import { ResourceTypeBadge } from "@/components/common/CustomBadge";
import { Button } from "@/components/ui/button";
// import { useState } from "react";
import {
  IFacebook,
  IInstagram,
  ILinkedin,
  IMad,
} from "@/assets/Icons/main/IconsIndex";
export const Footer = () => {
  // const [currentFilter, setCurrentFilter] = useState<number | null>(null);
  const items = [
    { id: 1, name: "Branding" },
    { id: 2, name: "UX/UI" },
    { id: 3, name: "Ilustración" },
    { id: 4, name: "Multimedia" },
    { id: 5, name: "Editorial" },
    { id: 6, name: "Social Media/Publicidad" },
  ];
  return (
    <footer className="w-full bg-white">
      <div className="w-full px-4 py-12 sm:px-16">
        <div className="flex flex-col justify-start gap-12 md:justify-between md:gap-4 md:flex-row md:mb-[6.685rem]">
          <div className="w-full md:w-2/4 lg:w-[25rem]">
            <section className="flex flex-col items-start w-full gap-8">
              <div>
                <a href="/" aria-label="Home">
                  <IMad />
                </a>
              </div>
              <h2 className="font-poppins font-base text-start text-base leading-5 text-[#5C5C85]">
                Muestra Anual de Diseño Gráfico 2024
              </h2>
              <p className="font-poppins font-base text-start text-base leading-5 text-[#5C5C85]">
                <a href="mailto:mad@udb.edu.sv">mad@udb.edu.sv</a>
              </p>
              <p className="font-poppins font-base text-start text-base leading-5 text-[#5C5C85]">
                Hecho con ❤️ por{" "}
                <a
                  href="https://saul19-l98.github.io/saul_lainez/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="sallanez"
                  className="hover:opacity-75"
                >
                  Sallanez
                </a>
              </p>
              <div>
                <ul className="flex flex-row justify-center gap-6">
                  <li>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="hover:opacity-75"
                    >
                      <IFacebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="hover:opacity-75"
                    >
                      <IInstagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="hover:opacity-75"
                    >
                      <ILinkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div className="w-full md:w-2/4 lg:max-w-xs">
            <section
              aria-labelledby="explore-categories"
              className="flex flex-col items-start gap-8"
            >
              <h3
                id="explore-categories"
                className="text-sm font-base font-poppins leading-5 text-[#5C5C85]"
              >
                Explora nuestras categorías
              </h3>
              <div className="flex flex-row flex-wrap justify-start w-full gap-2">
                {items.map((item) => (
                  <ResourceTypeBadge
                    key={item.id}
                    data={item}
                    callToAction={() => console.log(`Clicked ${item.name}`)}
                  />
                ))}
              </div>
              <Button className="w-full font-semibold font-poppins bg-text-main-gradient sm:w-fit hover:bg-default-bg">
                Ver todos los portafolios
                <span className="ml-2">
                  <IArrowWhite />
                </span>
              </Button>
            </section>
          </div>
        </div>
      </div>
      <div className="w-full px-0 py-3 text-center sm:px-16 bg-text-main-gradient">
        <p className="py-5 mx-auto text-sm font-semibold font-poppins text-fontcolors-100">
          © 2024 MAD. Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};
