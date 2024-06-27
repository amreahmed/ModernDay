import { Link } from "react-scroll";

const Hero = () => {
    return (
      <div
        className="hero lg:min-h-[650px] relative min-h-[500px] " // added relative position here
        style={{
          backgroundImage: "url(/background.svg)",
          backgroundColor: "#06050A",
        }}>
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-neutral-content text-center relative z-10">
          {" "}
          <div className="max-w-md">
            <h1 className="mb-5 font-bold text-white font-karantina lg:text-5xl tracking-wider text-3xl">
              Galactic powerhouse, transformation story
            </h1>
            <p className="mb-5 text-white lg:font-light lg:text-lg text-xs">
              From the Depths of Space to a Galactic Economic Powerhouse - Witness Our Transformation and Success Story
            </p>
            <Link className="btn btn-secondary"
              activeClass="active"
              to="survices"
              smooth={true}
              isDynamic={true}>
              Our survices
            </Link>
          </div>
        </div>
        <img src="/moon.png" alt="" className="absolute lg:left-[550px] lg:bottom-96 z-0 animate-spinSlow -left-[18px] bottom-64 " />
      </div>
    );
};

export default Hero;
