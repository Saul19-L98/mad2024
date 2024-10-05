import "./App.css";
import { Footer } from "./components/layout/footer/Footer";
import { Navbar } from "./components/layout/header/Navbar";
import { Button } from "./components/ui/button";
import { IHeroArrow } from "@/assets/Icons/symbols/IHeroArrow";

function App() {
  return (
    // 120,90
    <div className="flex flex-col items-center w-full max-w-[90rem] gap-0 h-auto overflow-hidden">
      <Navbar />
      <main className="flex flex-col items-center justify-start w-full min-h-screen">
        <section className="w-full px-4 pt-6 pb-4 sm:pt-12">
          <div className="flex flex-col justify-between 2xl:flex-row">
            <div>
              <h1 className="bg-clip-text text-transparent font-poppins font-light leading-[100%] text-center 2xl:text-start lg:text-[12.5rem] text-[7.5rem] bg-text-title-gradient">
                MAD 2024
              </h1>
              <h2 className="text-2xl flex flex-col justify-start items-start min-[842px]:flex-row min-[842px]:justify-center 2xl:justify-start min-[842px]:items-center leading-8 font-semibold text-[#B3B3D1]">
                <span className="flex flex-row items-center justify-start">
                  <span className="ml-4 mr-3">
                    <IHeroArrow />
                  </span>
                  <span className="mr-1 text-transparent bg-text-title-description-title bg-clip-text">
                    Muestra Anual de Diseño Gráfico 2024
                  </span>
                </span>
                <span className="ml-14 sm:ml-4 min-[842px]:ml-0">
                  - Universidad Don Bosco
                </span>
              </h2>
            </div>
            <div className="w-full 2xl:max-w-[22.81rem] mt-6 flex items-end">
              <p className="text-start sm:text-center 2xl:text-start text-sm  font-poppins font-normal leading-5 text-[#B3B3D1]">
                Bienvenidos a la Muestra Anual de Portafolios, donde aplaudimos
                la creatividad que los estudiantes de la Universidad Don Bosco
                tienen para expresar, transmitir y demostrar sus habilidades y
                talentos a través de sus proyectos realizados en sus años de
                crecimiento académico.
              </p>
            </div>
          </div>
        </section>
        <Button className="bg-text-main-gradient">Click me</Button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
