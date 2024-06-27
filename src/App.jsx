import Survices from "./components/Survices";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-clip">
      <Navbar />
      <Hero />
      <About />
      <Survices />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App