import { cn } from "@/lib/utils";
import { Badge } from "@/components/common/Badge";

// import { ResourceType } from "@/types/resourcesSections/filters.type";
// import { useFilterStore } from "@/app/store/useFilterStore";

interface ResourceTypeBadgeProps {
  data: { id: number; name: string };
  callToAction: () => void;
}

export const ResourceTypeBadge: React.FC<ResourceTypeBadgeProps> = ({
  data,
  callToAction,
}) => {
  return (
    <Badge
      onClick={callToAction}
      key={data.id}
      className={cn(
        "w-fit text-fontcolors-600 border border-transparent hover:cursor-pointer hover:bg-white hover:border",
        {
          ["bg-[#F4F8FB] hover:text-[#F4F8FB] hover:border-[#F4F8FB]"]:
            data.id === 0,
          [`bg-[#1CCFFA] hover:text-[#1CCFFA]  hover:border-[#1CCFFA]`]:
            data.id === 1,
          [`bg-[#FFB512] hover:text-[#FFB512]  hover:border-[#FFB512]`]:
            data.id === 2,
          ["bg-[#947CFF]  hover:text-[#947CFF] hover:border-[#947CFF]"]:
            data.id === 3,
          ["bg-[#2ECC71] hover:text-[#2ECC71] hover:border-[#2ECC71]"]:
            data.id === 4,
          ["bg-[#FC53B8] hover:text-[#FC53B8] hover:border-[#FC53B8]"]:
            data.id === 5,
          ["bg-[#FF6568] hover:text-[#FF6568] hover:border-[#FF6568]"]:
            data.id === 6,
        }
      )}
    >
      <div className="flex items-center gap-2">
        <p className="text-[12px] xl:w-full xl:text-center font-medium tracking-[-0.24px] leading-[20px]">
          {data.name}
        </p>
      </div>
    </Badge>
  );
};
