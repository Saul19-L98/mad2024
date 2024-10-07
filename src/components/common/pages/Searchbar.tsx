import { useState } from "react";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "@/assets/Icons/symbols/ISearch";
import { cn } from "@/lib/utils";

interface SearchbarProps {
  className?: string;
}

export const Searchbar: React.FC<SearchbarProps> = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    console.log(e.target.value); // Log what is being typed
  };

  return (
    <div
      className={cn(
        "relative w-full max-w-[46.02rem] min-[1320px]:max-w-sm h-8",
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
