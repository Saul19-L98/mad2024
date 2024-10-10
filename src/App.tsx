import { Footer } from "./components/layout/footer/Footer";
import { Navbar } from "./components/layout/header/Navbar";
import { Home } from "@/components/pages/home/Home";

function App() {
  return (
    // 120,90
    <div className="flex flex-col items-center w-full min-h-screen gap-0 overflow-hidden">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
