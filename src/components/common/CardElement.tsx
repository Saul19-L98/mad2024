import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ResourceTypeBadge } from "@/components/common/CustomBadge";
import { IRightTopArrow } from "@/assets/Icons/symbols/IRightTopArrow";
import { IPortfolio } from "@/assets/Icons/symbols/IPortfolio";
import { IPersonalWeb } from "@/assets/Icons/symbols/IPersonalWeb";
import { Link } from "react-router-dom";

interface BadgeData {
  id: number;
  name: string;
}

interface CardElementProps {
  avatarImageUrl: string;
  avatarFallback: string;
  name: string;
  badgeData: BadgeData;
  dynamicImageUrl: string;
  personalWebsite: string;
  portfolio: string;
}

export const CardElement: React.FC<CardElementProps> = ({
  avatarImageUrl,
  avatarFallback,
  name,
  badgeData,
  dynamicImageUrl,
  personalWebsite,
  portfolio,
}) => {
  return (
    <Card
      className="relative w-auto col-span-1 overflow-hidden bg-transparent border-none hover:cursor-pointer hover:opacity-75 group"
      onClick={() => {
        console.log(`Clicked ${name}`);
      }}
    >
      <CardContent className="relative p-0">
        <figure
          className="relative w-full border aspect-square border-divider"
          style={{
            borderRadius: "0.5rem",
            backgroundImage: `url(${dynamicImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full h-full opacity-50" />

          {/* Buttons to appear on hover */}
          <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-4 p-4 font-semibold leading-5 transition-all duration-300 ease-in-out translate-y-full opacity-0 xl:flex-row xl:items-center xl:justify-center font-poppins group-hover:opacity-100 group-hover:translate-y-0">
            <Link
              to={personalWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 text-black bg-white rounded-md hover:opacity-85 shadow-lg w-[11.5rem]"
              // onClick={(e) => {
              //   e.preventDefault();
              //   e.stopPropagation(); // Prevents card click event
              //   console.log(`Clicked ${name}'s personal website`);
              // }}
            >
              <span className="mr-2">
                <IPersonalWeb />
              </span>
              Ver página web
            </Link>
            <Link
              to={portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 text-black bg-white rounded-md hover:opacity-85 shadow-lg w-[11.25rem]"
              // onClick={(e) => {
              //   e.preventDefault();
              //   e.stopPropagation(); // Prevents card click event
              //   console.log(`Clicked ${name}'s portfolio`);
              // }}
            >
              <span className="mr-2">
                <IPortfolio />
              </span>
              Ver portafolio
            </Link>
          </div>
        </figure>
      </CardContent>
      <CardFooter className="relative flex items-center gap-3 p-0 pt-6">
        <Avatar className="w-20 h-20 overflow-hidden rounded-full">
          <AvatarImage
            src={avatarImageUrl}
            alt={name}
            className="object-cover w-full h-full"
          />
          <AvatarFallback className="font-poppins font-normal tracking-tighter leading-8 text-[1.5rem] text-white">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-4 ">
          <span className="font-poppins font-normal tracking-tighter leading-8 text-lg sm:text-[1.5rem] text-white">
            {name}
          </span>
          <ResourceTypeBadge data={badgeData} isMain />
        </div>
        <div className="absolute right-0 top-6">
          <IRightTopArrow />
        </div>
      </CardFooter>
    </Card>
  );
};
