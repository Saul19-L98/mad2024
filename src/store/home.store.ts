import { create } from "zustand";
// import { UserProfile } from "@/types/users.type";
import { UserProfileData } from "@/types/usersdata.type";

type HomeStore = {
  filteredUsers: UserProfileData[];
  isSearching: boolean;
  setIsSearching: (isSearching: boolean) => void;
  setFilteredUsers: (users: UserProfileData[]) => void;
  badgesFilter: UserProfileData[];
  setBadgesFilter: (badges: UserProfileData[]) => void;
};

export const useHomeStore = create<HomeStore>((set) => ({
  filteredUsers: [],
  isSearching: false,
  badgesFilter: [],
  setBadgesFilter: (badges) => set({ badgesFilter: badges }),
  setIsSearching: (isSearching) => set({ isSearching }),
  setFilteredUsers: (users) => set({ filteredUsers: users }),
}));
