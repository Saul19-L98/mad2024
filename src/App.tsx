import "./App.css";
import { Footer } from "./components/layout/footer/Footer";
import { Navbar } from "./components/layout/header/Navbar";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex flex-col items-center w-full max-w-[90rem] gap-0 h-auto">
      <Navbar />
      <main className="flex flex-col justify-center min-h-screen">
        <h1>Main Title Here</h1>
        <Button className="bg-text-main-gradient">Click me</Button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
