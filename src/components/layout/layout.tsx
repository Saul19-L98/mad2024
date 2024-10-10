import { Footer } from "@/components/layout/footer/Footer";
import { Navbar } from "@/components/layout/header/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    // 120,90
    <div className="flex flex-col items-center w-full min-h-screen gap-0 overflow-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
