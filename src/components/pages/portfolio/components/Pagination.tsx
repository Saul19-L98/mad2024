import { PaginationWithLinks } from "@/components/ui/shadcn_extions/PaginationWithLinks";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { usePaginationStore } from "@/store/pagination.store";
import { UserProfile } from "@/types/users.type";
import { userProfiles as usersData } from "@/data/users/portfolio.mock";

interface PaginationProps {
  userProfiles: UserProfile[];
}

export const Pagination: React.FC<PaginationProps> = ({ userProfiles }) => {
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1");
  const pageSize = parseInt(searchParams.get("pageSize") || "15"); // Default to 16 cards per page
  const [totalCount, setTotalCount] = useState(0);

  const { setCurrentContent } = usePaginationStore();
  // Calculate start and end indexes for slicing the array

  // Get the current page of user profiles
  useEffect(() => {
    const amountOfUser = userProfiles.length;
    if (amountOfUser === 0) {
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const currentUsers = usersData.slice(startIndex, endIndex);
      console.log("data", usersData);
      console.log("pagination current", currentUsers);
      setTotalCount(usersData.length);
      setCurrentContent(currentUsers);
    }
    if (amountOfUser !== 0) {
      console.log("wtf");
      console.log("pagination current", userProfiles);
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      console.log(amountOfUser);
      const currentUsers = userProfiles.slice(startIndex, endIndex);
      setCurrentContent(currentUsers);
    }
  }, [page, pageSize, setCurrentContent, userProfiles, totalCount]);

  return (
    <Suspense fallback={<Skeleton className="w-full" />}>
      <div className="w-full">
        {/* Pagination Controls */}
        <PaginationWithLinks
          page={page}
          pageSize={pageSize}
          totalCount={totalCount}
        />
      </div>
    </Suspense>
  );
};
