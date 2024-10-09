export interface UserProfile {
  id: number;
  name: string;
  nameFallback: string;
  role: {
    id: number;
    name: string;
    href: string;
  };
  bio: string;
  profilePicture: string;
  portfolioImages: string[];
  socialLinks: {
    instagram: string;
    behance: string;
    linkedin: string;
  };
  actions: {
    viewPortfolio: string;
    viewWebsite: string;
    downloadCV: string;
  };
  tags: string[];
}
