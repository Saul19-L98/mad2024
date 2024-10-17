export interface RoleData {
  id: number;
  name: string;
  href: string;
}

// Define the SocialLinks type
export interface SocialLinksData {
  instagram?: string | null;
  behance?: string | null;
  linkedin?: string | null;
  twitter?: string | null;
  pinterest?: string | null;
  flickr?: string | null;
}

// Define the Actions type
export interface ActionsData {
  viewPortfolio: string;
  viewWebsite: string;
  downloadCV: string;
}

// Define the Tag type
export interface TagData {
  id: number | null;
  name: string;
  href: string;
}

// Define the UserProfile type
export interface UserProfileData {
  id: number;
  name: string;
  nameFallback: string;
  role: RoleData;
  bio: string;
  profilePicture: string;
  portfolioImages: string[];
  socialLinks: SocialLinksData;
  actions: ActionsData;
  tags: TagData[];
}
