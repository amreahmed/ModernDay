import { Link } from "react-scroll";

const Hero = () => {
    return (
      <div
        className="hero min-h-screen relative " // added relative position here
        style={{
          backgroundImage: "url(/background.svg)",
          backgroundColor: "#06050A",
        }}>
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-neutral-content text-center relative z-10">
          {" "}
          <div className="max-w-md">
            <h1 className="mb-5 font-bold text-white font-karantina text-5xl tracking-wider">
              Galactic powerhouse, transformation story
            </h1>
            <p className="mb-5 text-white">
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
        <img src="/moon.png" alt="" className="absolute left-[415px] bottom-96 z-0 animate-spinSlow" />
      </div>
    );
};

export default Hero;
