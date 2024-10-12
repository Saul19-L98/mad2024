import { cn } from "@/lib/utils";
import { Badge } from "@/components/common/Badge";
import { useBadgeStore } from "@/store/badge.store";
// import { ResourceType } from "@/types/resourcesSections/filters.type";
// import { useFilterStore } from "@/app/store/useFilterStore";

interface ResourceTypeBadgeProps {
  data: { id: number; name: string };
  isMain?: boolean;
  callToAction?: () => void;
}

export const ResourceTypeBadge: React.FC<ResourceTypeBadgeProps> = ({
  data,
  callToAction,
  isMain = false,
}) => {
  const { activeBadge } = useBadgeStore();
  const badgeClsses = isMain
    ? cn("w-fit border border-transparent", {
        [`text-[#F4F8FB] border-[#F4F8FB] ${
          callToAction
            ? "hover:bg-[#F4F8FB] hover:text-fontcolors-600 hover:cursor-pointer"
            : ""
        } `]: data.id === 0,
        ["bg-[#F4F8FB] text-fontcolors-600"]:
          data.id === 0 && activeBadge === 0,
        [`text-[#1CCFFA]  border-[#1CCFFA] ${
          callToAction
            ? "hover:bg-[#1CCFFA] hover:text-fontcolors-600 hover:cursor-pointer"
            : ""
        }`]: data.id === 1,
        ["bg-[#1CCFFA] text-fontcolors-600"]:
          data.id === 1 && activeBadge === 1,
        [`text-[#FFB512]  border-[#FFB512] ${
          callToAction
            ? "hover:bg-[#FFB512] hover:text-fontcolors-600 hover:cursor-pointer"
            : ""
        }`]: data.id === 2,
        ["bg-[#FFB512] text-fontcolors-600"]:
          data.id === 2 && activeBadge === 2,
        [`text-[#947CFF] border-[#947CFF] ${
          callToAction
            ? "hover:bg-[#947CFF] hover:text-fontcolors-600 hover:cursor-pointer"
            : ""
        }`]: data.id === 3,
        ["bg-[#947CFF] text-fontcolors-600"]:
          data.id === 3 && activeBadge === 3,
        [`text-[#2ECC71] border-[#2ECC71] ${
          callToAction
            ? "hover:bg-[#2ECC71] hover:text-fontcolors-600 hover:cursor-pointer"
            : ""
        }`]: data.id === 4,
        ["bg-[#2ECC71] text-fontcolors-600"]:
          data.id === 4 && activeBadge === 4,
        [`text-[#FC53B8] border-[#FC53B8] ${
          callToAction
            ? "hover:bg-[#FC53B8] hover:text-fontcolors-600 hover:cursor-pointer"
            : ""
        }`]: data.id === 5,
        ["bg-[#FC53B8] text-fontcolors-600"]:
          data.id === 5 && activeBadge === 5,
        [`text-[#FF6568] border-[#FF6568] ${
          callToAction
            ? "hover:bg-[#FF6568] hover:text-fontcolors-600 hover:cursor-pointer"
            : ""
        }`]: data.id === 6,
        ["bg-[#FF6568] text-fontcolors-600"]:
          data.id === 6 && activeBadge === 6,
      })
    : cn("w-fit text-fontcolors-600 border border-transparent", {
        [`bg-[#F4F8FB] ${
          callToAction
            ? "hover:text-[#F4F8FB] hover:border-[#F4F8FB] hover:cursor-pointer hover:bg-white hover:border"
            : ""
        }`]: data.id === 0,
        [`bg-[#1CCFFA] ${
          callToAction
            ? "hover:text-[#1CCFFA] hover:border-[#1CCFFA] hover:cursor-pointer hover:bg-white hover:border"
            : ""
        }`]: data.id === 1,
        [`bg-[#FFB512] ${
          callToAction
            ? "hover:text-[#FFB512] hover:border-[#FFB512] hover:cursor-pointer hover:bg-white hover:border"
            : ""
        }`]: data.id === 2,
        [`bg-[#947CFF] ${
          callToAction
            ? "hover:text-[#947CFF] hover:border-[#947CFF] hover:cursor-pointer hover:bg-white hover:border"
            : ""
        }`]: data.id === 3,
        [`bg-[#2ECC71] ${
          callToAction
            ? "hover:text-[#2ECC71] hover:border-[#2ECC71] hover:cursor-pointer hover:bg-white hover:border"
            : ""
        }`]: data.id === 4,
        [`bg-[#FC53B8] ${
          callToAction
            ? "hover:text-[#FC53B8] hover:border-[#FC53B8] hover:cursor-pointer hover:bg-white hover:border"
            : ""
        }`]: data.id === 5,
        [`bg-[#FF6568] ${
          callToAction
            ? "hover:text-[#FF6568] hover:border-[#FF6568] hover:cursor-pointer hover:bg-white hover:border"
            : ""
        }`]: data.id === 6,
      });
  return (
    <Badge
      {...(callToAction && { onClick: callToAction })}
      key={data.id}
      className={badgeClsses}
    >
      <div className="flex items-center gap-2">
        <p className="font-poppins text-sm font-semibold xl:w-full xl:text-center tracking-[-0.24px] leading-[20px]">
          {data.name}
        </p>
      </div>
    </Badge>
  );
};
