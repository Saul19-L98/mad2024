/* eslint-disable @typescript-eslint/no-unused-vars */
import { Skeleton } from "@/components/ui/skeleton";

interface SkeletonCardProps {
  className?: string;
  numberOfCards: number;
}

export const SkeletonCard: React.FC<SkeletonCardProps> = ({
  numberOfCards,
}) => {
  return (
    <>
      {[...Array(numberOfCards)].map((_, index) => (
        <div className="flex flex-col col-span-1 space-y-3" key={index}>
          <Skeleton className="w-auto h-96 rounded-xl bg-bgColors-900" />
          <div className="flex items-center space-x-4 ">
            <Skeleton className="w-12 h-12 rounded-full bg-bgColors-900" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px] bg-bgColors-900" />
              <Skeleton className="h-4 w-[200px] bg-bgColors-900" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
