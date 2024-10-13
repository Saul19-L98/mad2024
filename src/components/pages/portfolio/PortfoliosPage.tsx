// import { IArrow } from "@/assets/Icons/symbols/IArrow";
import { CardElement } from "@/components/common/CardElement";
import { ResourceTypeBadge } from "@/components/common/CustomBadge";
import { Searchbar } from "@/components/common/pages/Searchbar";
import { SkeletonCard } from "@/components/common/pages/SkeletonCards";
import { Layout } from "@/components/layout/layout";
// import { Button } from "@/components/ui/button";
import { portafolioTags } from "@/data/tags/tags.optins";
import { useHomeStore } from "@/store/home.store";
// import { userProfiles } from "@/data/users/portfolio.mock";
import { Pagination } from "@/components/pages/portfolio/components/Pagination";
import { usePaginationStore } from "@/store/pagination.store";
import { UserProfile } from "@/types/users.type";
import { userProfiles } from "@/data/users/portfolio.mock";
import { useBadgeStore } from "@/store/badge.store";

export const PortfoliosPage = () => {
  const { filteredUsers, isSearching, setBadgesFilter, setFilteredUsers } =
    useHomeStore();
  const { currentContent, setCurrentContent } = usePaginationStore();
  console.log("portfolio current", currentContent);
  const getUsersByRoleId = (usersObject: UserProfile[], roleId: number) => {
    const res = usersObject.filter((user) => user.role.id === roleId);
    return res;
  };
  console.log("current content from portfolio", currentContent);
  const selectBadge = (idBadge: number) => {
    if (idBadge === 0) {
      setBadgesFilter([]);
      setCurrentContent(userProfiles);
      setFilteredUsers(userProfiles);
      setActiveBadge(idBadge);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const filteredUsers = getUsersByRoleId(userProfiles, idBadge);
    setActiveBadge(idBadge);
    setBadgesFilter(filteredUsers);
    setFilteredUsers(filteredUsers);
    setCurrentContent(filteredUsers);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const { setActiveBadge, activeBadge } = useBadgeStore();
  console.log("active badge", activeBadge);
  return (
    <Layout>
      <section className="w-full">
        <div className="w-full max-w-[90rem] mx-auto px-4 py-8 md:pb-12 md:py-4 md:px-16">
          <div className="w-full max-w-[31.625rem] mb-12 mx-auto 2xl:mx-0 ">
            <h2 className="w-full font-poppins font-normal text-[1.5rem] md:text-[1.75rem] text-start  leading-8 tracking-tighter text-[#fff]">
              Explora la visión creativa del futuro: portafolios que innovan.
            </h2>
          </div>
          <div
            aria-labelledby="explore-categories"
            className="w-full flex flex-col items-start max-w-[90rem] gap-8"
          >
            <div className="flex flex-col items-center justify-center w-full gap-12 2xl:gap-4 2xl:flex-row 2xl:justify-between">
              <div className="flex flex-row flex-wrap justify-start order-2 w-full gap-2 md:justify-center 2xl:justify-start h-fit 2xl:order-1">
                {portafolioTags.map((item) => (
                  <ResourceTypeBadge
                    isMain
                    key={item.id}
                    data={item}
                    callToAction={() => selectBadge(item.id)}
                  />
                ))}
              </div>
              <Searchbar className="order-1 w-full 2xl:order-2" />
            </div>
          </div>
        </div>
        <div className="min-h-screen px-4 pt-8 pb-16 border-y md:px-16 bg-bgColors-800 md:pb-24 md:pt-12 border-divider">
          {/* FIX:  avatarImageUrl={user.portfolioImages[0]} and dynamicImageUrl={user.profilePicture}*/}
          <div className="w-full max-w-[90rem] mx-auto">
            <div className="grid w-full grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-12">
              {filteredUsers.length == 0 &&
                !isSearching &&
                currentContent.map((user) => (
                  <CardElement
                    key={user.id}
                    avatarImageUrl={user.profilePicture}
                    avatarFallback={user.nameFallback}
                    name={user.name}
                    badgeData={user.role}
                    dynamicImageUrl={user.portfolioImages[0]}
                    personalWebsite={user.actions.viewWebsite}
                    portfolio={user.actions.viewPortfolio}
                  />
                ))}
              {filteredUsers.length > 0 &&
                !isSearching &&
                currentContent.map((user) => (
                  <CardElement
                    key={user.id}
                    avatarImageUrl={user.profilePicture}
                    avatarFallback={user.nameFallback}
                    name={user.name}
                    badgeData={user.role}
                    dynamicImageUrl={user.portfolioImages[0]}
                    personalWebsite={user.actions.viewWebsite}
                    portfolio={user.actions.viewPortfolio}
                  />
                ))}
              {isSearching && <SkeletonCard numberOfCards={9} />}
            </div>
            <div className="flex flex-row justify-center w-full mt-24">
              <Pagination userProfiles={filteredUsers} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
