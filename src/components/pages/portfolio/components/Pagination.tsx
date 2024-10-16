import { PaginationWithLinks } from "@/components/ui/shadcn_extions/PaginationWithLinks";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { usePaginationStore } from "@/store/pagination.store";
// import { UserProfile } from "@/types/users.type";
// import { userProfiles as usersData } from "@/data/users/portfolio.mock";
import { UserProfileData } from "@/types/usersdata.type";
import { userMainData } from "@/data/users/user.mainData";

interface PaginationProps {
  userProfiles: UserProfileData[];
}

export const Pagination: React.FC<PaginationProps> = ({ userProfiles }) => {
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1");
  const pageSize = parseInt(searchParams.get("pageSize") || "18"); // Default to 18 cards per page
  const [totalCount, setTotalCount] = useState(0);
  // console.log(page, pageSize);
  const { setCurrentContent } = usePaginationStore();
  // Calculate start and end indexes for slicing the array

  // Get the current page of user profiles
  useEffect(() => {
    const amountOfUser = userProfiles.length;
    if (amountOfUser === 0) {
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const currentUsers = userMainData.slice(startIndex, endIndex);
      // console.log("data", usersData);
      // console.log("pagination current", currentUsers);
      // console.log("find users", usersData.length);
      setTotalCount(userMainData.length);
      setCurrentContent(currentUsers);
    }
    if (amountOfUser !== 0) {
      // console.log("wtf");
      // console.log("pagination current", userProfiles);
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      // console.log(amountOfUser);
      const currentUsers = userProfiles.slice(startIndex, endIndex);
      setCurrentContent(currentUsers);
    }
  }, [page, pageSize, setCurrentContent, userProfiles, totalCount]);

  return (
    <Suspense fallback={<Skeleton className="w-full" />}>
      {userProfiles.length >= 18 && (
        <div className="w-full">
          {/* Pagination Controls */}
          <PaginationWithLinks
            page={page}
            pageSize={pageSize}
            totalCount={userProfiles.length}
          />
        </div>
      )}
      {
        // Render the user profiles
        userProfiles.length === 0 && (
          <div className="w-full">
            {/* Pagination Controls */}
            <PaginationWithLinks
              page={page}
              pageSize={pageSize}
              totalCount={totalCount}
            />
          </div>
        )
      }
    </Suspense>
  );
};
