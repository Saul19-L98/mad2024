import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { userProfiles } from "@/data/users/portfolio.mock";
import { UserProfile } from "@/types/users.type";
import { cn } from "@/lib/utils";
import { ResourceTypeBadge } from "@/components/common/CustomBadge";
import { useHomeStore } from "@/store/home.store";
import { usePaginationStore } from "@/store/pagination.store";
import { useBadgeStore } from "@/store/badge.store";
import {
  IBehanceWhite,
  IFacebookWhite,
  IInstagramWhite,
  ILinkedinWhite,
  IBookWhite,
  IPcWhite,
} from "@/assets/Icons/main/IconsIndex";
import { Button } from "@/components/ui/button";
import {
  SkeletonContactUserData,
  SkeletonContactUserImage,
  SkeletonContactUserPortfolio,
} from "@/components/common/pages/SkeletonCards";

interface CustomFigureProps {
  name?: string;
  profilePicture?: string;
  badge?: { id: number; name: string; href: string };
  className?: string;
}

export const CustomFigure: React.FC<CustomFigureProps> = ({
  name,
  profilePicture,
  badge,
  className,
}) => {
  return (
    <figure
      className={cn(
        "w-full max-w-[18.875rem] h-full max-h-[18.875rem] aspect-square rounded-t-lg mb-14",
        className
      )}
    >
      <img
        className="object-cover w-full h-full rounded-t-lg"
        src={profilePicture}
        alt={name}
      />
      {badge && (
        <figcaption
          className={cn(
            "font-poppins font-semibold text-center text-lg leading-5 tracking-tight text-[#633500] h-14 py-4 px-2.5",
            {
              "bg-[#1CCFFA]": badge.id === 1,
              "bg-[#FFB512]": badge.id === 2,
              "bg-[#947CFF]": badge.id === 3,
              "bg-[#2ECC71]": badge.id === 4,
              "bg-[#FC53B8]": badge.id === 5,
              "bg-[#FF6568]": badge.id === 6,
            }
          )}
        >
          {badge.name}
        </figcaption>
      )}
    </figure>
  );
};
export const Contact = () => {
  const [currentContactContent, setCurrentContactContent] =
    useState<UserProfile | null>(null);
  const { contactId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    if (!contactId || isNaN(parseInt(contactId)) || parseInt(contactId) < 1) {
      navigate("/portfolio");
      return;
    }
    const user = userProfiles.find((user) => user.id === parseInt(contactId));
    if (user) {
      setIsLoading(false);
      setCurrentContactContent(user);
    } else {
      navigate("/portfolio");
    }
  }, [contactId, navigate]);
  // console.log("current contact", currentContactContent);
  const { setBadgesFilter, setFilteredUsers } = useHomeStore();
  const { setCurrentContent } = usePaginationStore();
  // console.log("portfolio current", currentContent);
  const getUsersByRoleId = (usersObject: UserProfile[], roleId: number) => {
    const res = usersObject.filter((user) => user.role.id === roleId);
    return res;
  };
  const resetAndNavigate = (
    idBadge: number,
    users: UserProfile[],
    isFiltered: boolean
  ) => {
    setActiveBadge(idBadge);
    setFilteredUsers(users);
    setBadgesFilter(isFiltered ? users : []);
    setCurrentContent(users);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const selectBadge = (idBadge: number) => {
    if (idBadge === 0) {
      resetAndNavigate(idBadge, userProfiles, false);
      return;
    }
    const filteredUsers = getUsersByRoleId(userProfiles, idBadge);
    resetAndNavigate(idBadge, filteredUsers, true);
    navigate("/portfolio?page=1");
  };
  const { setActiveBadge } = useBadgeStore();
  return (
    <main className="relative flex flex-col items-center justify-start w-full min-h-screen gap-12">
      {/* Background Section */}
      <div className="absolute top-0 left-0 right-0 flex flex-col justify-start w-full h-48 gap-0 xl:h-full -z-10 xl:flex-row">
        <div className="w-full h-full xl:w-3/12 bg-contact-bg-row xl:bg-contact-bg"></div>
        {/* Add more background elements as needed */}
      </div>

      {/* Content Section */}
      <section className="relative w-full max-w-[90rem] z-10 min-h-screen px-4 py-16 lg:py-24 lg:pl-16 lg:pr-0 bg-transparent">
        <div className="grid h-full grid-cols-1 gap-x-16 gap-y-16 xl:grid-cols-3 justify-items-center">
          {isLoading ? (
            <SkeletonContactUserImage />
          ) : (
            <section className="flex items-center justify-center w-full h-full col-span-1">
              <CustomFigure
                name={currentContactContent?.name}
                badge={currentContactContent?.role}
                profilePicture={currentContactContent?.profilePicture}
                // className="col-span-1"
              />
            </section>
          )}
          {isLoading ? (
            <SkeletonContactUserData />
          ) : (
            <section className="flex flex-col items-center justify-center w-full col-span-1">
              <div className="flex flex-col items-start justify-center gap-8 lg:gap-16">
                <div className="flex flex-row flex-wrap justify-start w-full gap-2 h-fit ">
                  {currentContactContent?.tags.map((tag) => (
                    <ResourceTypeBadge
                      key={tag.id}
                      data={tag}
                      isMain
                      callToAction={() => selectBadge(tag.id)}
                    />
                  ))}
                </div>
                <div className="flex flex-col items-start justify-center gap-8 text-start md:gap-4">
                  <h1 className="text-2xl font-semibold leading-8 tracking-tight font-poppins text-fontcolors-100">
                    {currentContactContent?.name}
                  </h1>
                  <p className="text-sm font-semibold leading-5 font-poppins text-fontcolors-200">
                    {currentContactContent?.bio}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-full gap-8 lg:items-start text-start lg:gap-4">
                  <h2 className="text-lg font-semibold leading-8 tracking-tight font-poppins text-fontcolors-100">
                    Sígueme en:
                  </h2>
                  <div className="">
                    <ul className="flex flex-row justify-start gap-6">
                      {currentContactContent?.socialLinks.instagram && (
                        <li>
                          <Link
                            to={currentContactContent?.socialLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="hover:opacity-75"
                            aria-labelledby="Instagram"
                          >
                            <IInstagramWhite />
                          </Link>
                        </li>
                      )}
                      {currentContactContent?.socialLinks.behance && (
                        <li>
                          <Link
                            to={currentContactContent?.socialLinks.behance}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="hover:opacity-75"
                          >
                            <IBehanceWhite />
                          </Link>
                        </li>
                      )}
                      {currentContactContent?.socialLinks.facebook && (
                        <li>
                          <Link
                            to={currentContactContent?.socialLinks.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="hover:opacity-75"
                          >
                            <IFacebookWhite />
                          </Link>
                        </li>
                      )}
                      {currentContactContent?.socialLinks.linkedin && (
                        <li>
                          <Link
                            to={currentContactContent?.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="hover:opacity-75"
                          >
                            <ILinkedinWhite />
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
                <div className="flex-col items-start justify-center hidden w-full gap-2 lg:flex">
                  <div className="w-full xl:w-[18.875rem] flex flex-col justify-center gap-2">
                    {currentContactContent?.actions.viewPortfolio && (
                      <Button
                        className="w-full font-semibold text-start font-poppins bg-text-main-gradient hover:bg-default-bg"
                        onClick={() => {
                          const portfolioUrl =
                            currentContactContent?.actions.viewPortfolio;
                          if (portfolioUrl) {
                            window.location.href = portfolioUrl;
                          }
                        }}
                      >
                        <span className="mr-2">
                          <IBookWhite />
                        </span>
                        Ver portafolio
                      </Button>
                    )}
                    {currentContactContent?.actions.viewWebsite && (
                      <Button
                        className="flex items-center justify-center w-full px-4 py-2 text-black bg-white rounded-md shadow-lg hover:opacity-75 hover:bg-white"
                        onClick={() => {
                          if (currentContactContent?.actions.viewWebsite) {
                            window.location.href =
                              currentContactContent.actions.viewWebsite;
                          }
                        }}
                      >
                        <span className="mr-2">
                          <IPcWhite />
                        </span>
                        Ver página web
                      </Button>
                    )}
                    {currentContactContent?.actions.downloadCV && (
                      <Button
                        className="w-full px-4 py-2 font-semibold text-center text-transparent font-poppins button-gradient-text border border-[#250F8B] hover:border-[#1CCFFA]"
                        onClick={() => {
                          const link = document.createElement("a");
                          link.href =
                            currentContactContent?.actions?.downloadCV?.replace(
                              "view",
                              "uc?export=download&id="
                            ) || "";
                          link.setAttribute("download", "CV.pdf"); // Optional: Set the name of the downloaded file
                          document.body.appendChild(link);
                          link.click();
                          link.remove();
                        }}
                      >
                        Descargar CV
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}
          {isLoading ? (
            <SkeletonContactUserPortfolio />
          ) : (
            <section className="flex flex-col items-center justify-center w-full h-full col-span-1 lg:flex-row xl:col-span-1">
              <figure className="w-full h-full max-h-[33.68rem] max-w-80 sm:max-w-2xl lg:max-w-3xl ">
                <img
                  className="object-cover w-full h-full rounded-l-lg"
                  src={currentContactContent?.portfolioImages[0]}
                  alt="design iamge"
                />
              </figure>
              <div className="flex flex-col items-start justify-center w-full gap-2 mt-16 lg:hidden">
                <div className="w-full lg:w-[18.875rem] flex flex-col justify-center gap-2">
                  {currentContactContent?.actions.viewPortfolio && (
                    <Button
                      className="w-full font-semibold text-start font-poppins bg-text-main-gradient hover:bg-default-bg"
                      onClick={() => {
                        const portfolioUrl =
                          currentContactContent?.actions.viewPortfolio;
                        if (portfolioUrl) {
                          window.location.href = portfolioUrl;
                        }
                      }}
                    >
                      <span className="mr-2">
                        <IBookWhite />
                      </span>
                      Ver portafolio
                    </Button>
                  )}
                  {currentContactContent?.actions.viewWebsite && (
                    <Button
                      className="flex items-center justify-center w-full px-4 py-2 text-black bg-white rounded-md shadow-lg hover:opacity-75 hover:bg-white"
                      onClick={() => {
                        if (currentContactContent?.actions.viewWebsite) {
                          window.location.href =
                            currentContactContent.actions.viewWebsite;
                        }
                      }}
                    >
                      <span className="mr-2">
                        <IPcWhite />
                      </span>
                      Ver página web
                    </Button>
                  )}
                  {currentContactContent?.actions.downloadCV && (
                    <Button
                      className="w-full px-4 py-2 font-semibold text-center text-transparent font-poppins button-gradient-text border border-[#250F8B] hover:border-[#1CCFFA]"
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href =
                          currentContactContent?.actions?.downloadCV?.replace(
                            "view",
                            "uc?export=download&id="
                          ) || "";
                        link.setAttribute("download", "CV.pdf"); // Optional: Set the name of the downloaded file
                        document.body.appendChild(link);
                        link.click();
                        link.remove();
                      }}
                    >
                      Descargar CV
                    </Button>
                  )}
                </div>
              </div>
            </section>
          )}
        </div>
      </section>
    </main>
  );
};
