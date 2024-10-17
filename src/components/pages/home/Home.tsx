import { IHeroArrow } from "@/assets/Icons/symbols/IHeroArrow";
import { IArrowBlack } from "@/assets/Icons/symbols/IArrowBlack";
import { cn } from "@/lib/utils";
// import { ISpotify } from "@/assets/Icons/sponsors/ISpotify";
// import { IWhilpool } from "@/assets/Icons/sponsors/IWhilpool";
// import { IPngkey } from "@/assets/Icons/sponsors/IPngkey";
// import { IShopee } from "@/assets/Icons/sponsors/IShopee";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/home/faqs/faqs.data";
import { tagsHomeTable } from "@/data/tags/tags.optins";
import { ResourceTypeBadge } from "@/components/common/CustomBadge";
import { mainTags } from "@/data/tags/tags.optins";
import { Searchbar } from "@/components/common/pages/Searchbar";
// import { userProfiles } from "@/data/users/users.mock";
import { usersHomeProfiles } from "@/data/home/users.home";
import { userProfiles as usersMainData } from "@/data/users/portfolio.mock";
import { CardElement } from "@/components/common/CardElement";
import { Button } from "@/components/ui/button";
import { IArrow } from "@/assets/Icons/symbols/IArrow";
import { SkeletonCard } from "@/components/common/pages/SkeletonCards";
import { useHomeStore } from "@/store/home.store";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useBadgeStore } from "@/store/badge.store";
import { usePaginationStore } from "@/store/pagination.store";
// import { UserProfile } from "@/types/users.type";
import { UserProfileData } from "@/types/usersdata.type";

export const Home = () => {
  const { filteredUsers, isSearching, setFilteredUsers, setBadgesFilter } =
    useHomeStore();
  const navigate = useNavigate();
  const { setActiveBadge } = useBadgeStore();
  const { setCurrentContent } = usePaginationStore();
  useEffect(() => {
    setFilteredUsers([]);
    setActiveBadge(0);
  }, []);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]); // Refs for each card

  useEffect(() => {
    // Define the intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const backgroundImage = target.getAttribute("data-bg");
            if (backgroundImage) {
              target.style.backgroundImage = `url(${backgroundImage})`;
              observer.unobserve(target); // Stop observing once image is loaded
            }
          }
        });
      },
      { rootMargin: "0px 0px 200px 0px" } // Load slightly before the image enters the viewport
    );

    // Observe all card elements
    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    // Cleanup the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  const getUsersByRoleId = (usersObject: UserProfileData[], roleId: number) => {
    const res = usersObject.filter((user) => user.role.id === roleId);
    return res;
  };
  const resetAndNavigate = (
    idBadge: number,
    users: UserProfileData[],
    isFiltered: boolean
  ) => {
    setActiveBadge(idBadge);
    setFilteredUsers(users);
    setBadgesFilter(isFiltered ? users : []);
    setCurrentContent(users);
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/portfolio");
  };

  const selectBadge = (idBadge: number) => {
    if (idBadge === 0) {
      resetAndNavigate(idBadge, usersHomeProfiles, false);
      return;
    }
    const filteredUsers = getUsersByRoleId(usersMainData, idBadge);
    if (filteredUsers.length === 0) {
      resetAndNavigate(idBadge, usersHomeProfiles, false);
      return;
    }
    resetAndNavigate(idBadge, filteredUsers, true);
  };
  return (
    <main className="flex flex-col items-center justify-start w-full min-h-screen gap-12">
      <section className="w-full max-w-[90rem] px-4 pt-6 pb-4">
        <div className="flex flex-col justify-between 2xl:flex-row">
          <div>
            <h1 className="bg-clip-text text-transparent font-poppins font-light leading-[100%] text-center 2xl:text-start lg:text-[12.5rem] text-[7.5rem] bg-text-title-gradient">
              MAD 2024
            </h1>
            <h2 className="text-2xl flex flex-col justify-start items-start sm:items-center min-[842px]:flex-row min-[842px]:justify-center 2xl:justify-start leading-8 font-semibold text-[#B3B3D1]">
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
              Bienvenidos a la Muestra Anual de Portafolios, donde aplaudimos la
              creatividad que los estudiantes de la Universidad Don Bosco tienen
              para expresar, transmitir y demostrar sus habilidades y talentos a
              través de sus proyectos realizados en sus años de crecimiento
              académico.
            </p>
          </div>
        </div>
        <div className="w-full h-[33.5rem] lg:h-96 pt-12">
          <div className="h-full bg-[#131A35]">
            <div className="w-full h-full mx-auto">
              <div className="grid h-full grid-cols-2 bg-transparent md:bg-[#09051F] grid-rows-4 gap-2 lg:grid-cols-4 lg:grid-rows-2 sm:gap-4 md:p-4 md:border md:border-[#1CCFFA] rounded-[2rem] md:shadow-custom-main-shadow">
                {tagsHomeTable.map((item, index) => (
                  <div
                    key={item.id}
                    className={cn(
                      "relative p-4 sm:p-6 rounded-lg col-span-1 flex items-end justify-start bg-cover bg-center bg-no-repeat hover:cursor-pointer hover:opacity-75",
                      {
                        ["col-span-2 row-span-1 lg:col-span-1 lg:row-span-2"]:
                          item.id === 0,
                      }
                    )}
                    data-bg={`./images/coverBadge${index}.jpg`} // Data attribute for lazy loading
                    ref={(el) => (cardRefs.current[index] = el)} // Store ref to each card
                    // style={{
                    //   backgroundImage: `url(./images/coverBadge${index}.jpg)`,
                    // }}
                    onClick={() => selectBadge(item.id)}
                  >
                    <p
                      className={cn(
                        "w-full text-sm min-[420px]:text-lg md:text-[1.75rem] text-[#F4F8FB] font-semibold leading-7 tracking-tight font-poppins",
                        {
                          ["flex flex-row justify-start items-center"]:
                            item.id === 0,
                        }
                      )}
                    >
                      {item.name}
                      {item.id === 0 && (
                        <span className="ml-2">
                          <IArrowBlack />
                        </span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="px-4 md:py-4 md:px-16">
        <h2 className="text-center font-normal leading-5 tracking-tighter font-poppins font-lg text-[#B3B3D1]">
          El horizonte es posible gracias a
        </h2>
        <div className="grid grid-cols-2 mt-8 gap-9 md:gap-16 md:grid-cols-4">
          <div className="col-span-1">
            <ISpotify />
          </div>
          <div className="col-span-1">
            <IWhilpool />
          </div>
          <div className="col-span-1">
            <IPngkey />
          </div>
          <div className="col-span-1">
            <IShopee />
          </div>
        </div>
      </section> */}

      <section className="w-full">
        <div className="w-full max-w-[90rem] mx-auto px-4 pb-8 md:pb-12 md:py-4 md:px-16">
          <div className="w-full max-w-[31.625rem] mb-12 mx-auto min-[1320px]:mx-0 ">
            <h2 className="w-full font-poppins font-normal md:text-[1.75rem] text-center min-[1320px]:text-start leading-8 tracking-tighter text-[#fff]">
              Explora la visión creativa del futuro: portafolios que innovan.
            </h2>
          </div>
          <div
            aria-labelledby="explore-categories"
            className="w-full flex flex-col items-start max-w-[90rem] gap-8"
          >
            <div className="flex flex-col items-center justify-center w-full gap-12 min-[1320px]:gap-4 min-[1320px]:flex-row min-[1320px]:justify-between">
              <div className="flex flex-row flex-wrap justify-start md:justify-center order-2 min-[1320px]:justify-start w-full gap-2 h-fit min-[1320px]:order-1">
                {mainTags.map((item) => (
                  <ResourceTypeBadge
                    isMain
                    key={item.id}
                    data={item}
                    callToAction={() => {
                      selectBadge(item.id);
                    }}
                  />
                ))}
              </div>
              <Searchbar
                className="order-1 w-full min-[1320px]:order-2"
                isFromHome
              />
            </div>
          </div>
        </div>
        <div className="px-4 pt-8 pb-16 border-y md:px-16 bg-bgColors-800 md:pb-24 md:pt-12 border-divider">
          {/* FIX:  avatarImageUrl={user.portfolioImages[0]} and dynamicImageUrl={user.profilePicture}*/}
          <div className="w-full max-w-[90rem] mx-auto">
            <div className="grid w-full grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-12">
              {filteredUsers.length === 0 &&
                !isSearching &&
                usersHomeProfiles.map((user) => (
                  <CardElement
                    key={user.id}
                    userId={user.id}
                    avatarImageUrl={user.profilePicture}
                    avatarFallback={user.nameFallback}
                    name={user.name}
                    badgeData={user.role}
                    dynamicImageUrl={
                      user.portfolioImages[0] === ""
                        ? "./images/users/mockup_default.jpg"
                        : user.portfolioImages[0]
                    }
                    personalWebsite={user.actions.viewWebsite}
                    portfolio={user.actions.viewPortfolio}
                  />
                ))}
              {filteredUsers.length > 0 &&
                !isSearching &&
                filteredUsers.map((user) => (
                  <CardElement
                    key={user.id}
                    userId={user.id}
                    avatarImageUrl={user.profilePicture}
                    avatarFallback={user.nameFallback}
                    name={user.name}
                    badgeData={user.role}
                    dynamicImageUrl={user.portfolioImages[0]}
                    personalWebsite={user.actions.viewWebsite || ""}
                    portfolio={user.actions.viewPortfolio || ""}
                  />
                ))}
              {isSearching && <SkeletonCard numberOfCards={9} />}
            </div>
            <div className="flex flex-row justify-center w-full mt-24">
              <Button
                type="button"
                className="bg-[#FFB512]  font-poppins font-semibold text-fontcolors-700 hover:bg-[#F68606]"
                onClick={() => navigate("/portfolio")}
              >
                Ver todos los portafolios
                <span className="ml-[0.625rem]">
                  <IArrow />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-4 mb-16 md:px-16">
        <h2 className="text-center font-normal leading-5 tracking-tight font-poppins text-[2rem] text-[#B3B3D1]">
          FAQ’s
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-[56rem] mx-auto"
        >
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={`${faq.id}`}>
              <AccordionTrigger className="text-[#FAFAFA] text-start text-sm md:text-lg font-semibold leading-5 font-poppins">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm font-semibold leading-5 text-start md:text-base text-fontcolors-200 font-poppins">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
};
