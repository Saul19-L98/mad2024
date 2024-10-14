interface UserRole {
  id: number;
  name: string;
  href: string;
}
export interface UserProfile {
  id: number;
  name: string;
  nameFallback: string;
  role: UserRole;
  bio: string;
  profilePicture: string;
  portfolioImages: string[];
  socialLinks: {
    instagram?: string;
    behance?: string;
    linkedin?: string;
    facebook?: string;
  };
  actions: {
    viewPortfolio?: string;
    viewWebsite?: string;
    downloadCV?: string;
  };
  tags: UserRole[];
}
