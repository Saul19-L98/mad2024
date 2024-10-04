import "./App.css";
import { Button } from "./components/ui/button";
import {
  IMadWhite,
  IFacebookWhite,
  IInstagramWhite,
  ILinkedinWhite,
} from "@/assets/Icons/main/IconsIndex";
import { IArrow } from "@/assets/Icons/symbols/IconIndex";

function App() {
  return (
    <div className="flex flex-col items-center w-full gap-0">
      <header className="w-full max-w-[90rem] px-4 md:px-16 my-4">
        <nav className="flex flex-row items-center justify-between">
          <div>
            <a href="/" aria-label="Home">
              <IMadWhite />
            </a>
          </div>
          <div className="flex flex-row items-center gap-8">
            <Button
              type="button"
              className="bg-[#FFB512] text-fontcolors-700 hover:bg-[#F68606]"
            >
              Portafolios
              <span className="ml-[0.625rem]">
                <IArrow />
              </span>
            </Button>
            <ul className="flex-row justify-center hidden gap-6 sm:flex">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:opacity-75"
                >
                  <IFacebookWhite />
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
                  <IInstagramWhite />
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
                  <ILinkedinWhite />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="w-full max-w-[90rem] flex flex-row justify-center">
        <h1>Main Title Here</h1>
        <Button className="bg-text-main-gradient">Click me</Button>
      </main>
    </div>
  );
}

export default App;
