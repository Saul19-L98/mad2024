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

export const SkeletonContactUserImage = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center w-full h-full col-span-1 gap-4">
        <div
          className={
            "w-full max-w-[18.875rem] h-full max-h-[18.875rem] aspect-square rounded-t-lg"
          }
        >
          <Skeleton className="w-full h-full rounded-t-lg bg-bgColors-800" />
        </div>
        <Skeleton className="w-full max-w-[18.875rem] h-10 bg-bgColors-800" />
      </section>
    </>
  );
};

export const SkeletonContactUserData = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center w-full h-full max-w-2xl space-y-4">
          <Skeleton className="w-full h-10 bg-bgColors-800" />
          <Skeleton className="w-full h-10 bg-bgColors-800" />
          <Skeleton className="w-full h-10 bg-bgColors-800" />
          <Skeleton className="w-full h-10 bg-bgColors-800" />
          <Skeleton className="w-full h-10 bg-bgColors-800" />
        </div>
      </section>
    </>
  );
};

export const SkeletonContactUserPortfolio = () => {
  return (
    <>
      <section className="w-full h-full col-span-1 min-h-[20rem]">
        <div className="flex flex-col items-center justify-center w-full h-full ">
          <Skeleton className="w-full h-full rounded-lg bg-bgColors-800 max-h-[33.68rem] max-w-80 sm:max-w-2xl lg:max-w-3xl" />
        </div>
      </section>
    </>
  );
};
