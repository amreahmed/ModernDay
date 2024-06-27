import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="overflow-clip">
    <Navbar/>
      <Hero />
      <About/>
    </div>
      
  );
}

export default App