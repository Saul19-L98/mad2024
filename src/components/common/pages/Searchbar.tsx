import { useState } from "react";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "@/assets/Icons/symbols/ISearch";
import { cn } from "@/lib/utils";
import { useHomeStore } from "@/store/home.store";
import { userProfiles } from "@/data/users/portfolio.mock";

interface SearchbarProps {
  className?: string;
}

export const Searchbar: React.FC<SearchbarProps> = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { setFilteredUsers, setIsSearching } = useHomeStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // if (e.target.value.length < 2) return;
    setIsSearching(true);
    const inputUserName = e.target.value.trim().toLocaleLowerCase();
    if (inputUserName === "" && searchQuery.length < 1) {
      setFilteredUsers([]);
      setIsSearching(false);
      return;
    }
    setSearchQuery(e.target.value);
    console.log(e.target.value); // Log what is being typed
    const filteredUsers = userProfiles.filter((user) =>
      user.name.toLowerCase().includes(inputUserName)
    );
    console.log(filteredUsers);
    if (filteredUsers.length > 0) {
      setFilteredUsers(filteredUsers);
      setTimeout(() => {
        setIsSearching(false);
      }, 1000);
      return;
    }
    setFilteredUsers([]);
    setIsSearching(false);
  };

  return (
    <div
      className={cn(
        "relative w-full max-w-[54.02rem] 2xl:max-w-sm h-8",
        className
      )}
    >
      <Input
        prefixI={<SearchIcon />}
        type="search"
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
        className={cn(
          " w-full font-normal border h-8 leading-5 text-sm bg-[#2A2A4D] border-[#5C5C85] text-[#B3B3D1]"
        )}
      />
    </div>
  );
};
