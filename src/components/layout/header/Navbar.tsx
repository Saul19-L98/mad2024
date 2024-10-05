import {
  IMadWhite,
  IFacebookWhite,
  IInstagramWhite,
  ILinkedinWhite,
} from "@/assets/Icons/main/IconsIndex";
import { IArrow } from "@/assets/Icons/symbols/IconIndex";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <header className="w-full px-4 my-4 md:px-16">
      <nav className="flex flex-row items-center justify-between">
        <div>
          <a href="/" aria-label="Home">
            <IMadWhite />
          </a>
        </div>
        <div className="flex flex-row items-center gap-8">
          <Button
            type="button"
            className="bg-[#FFB512] font-poppins font-semibold text-fontcolors-700 hover:bg-[#F68606]"
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
  );
};
