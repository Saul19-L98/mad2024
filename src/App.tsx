import "./App.css";
import { Footer } from "./components/layout/footer/Footer";
import { Navbar } from "./components/layout/header/Navbar";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex flex-col items-center w-full max-w-[90rem] gap-0">
      <Navbar />
      <main className="flex flex-row justify-center w-full h-screen">
        <h1>Main Title Here</h1>
        <Button className="bg-text-main-gradient">Click me</Button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
