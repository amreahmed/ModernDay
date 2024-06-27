import Card from "./Card";

const About = () => {
  return (
    <div className="p-20 bg-[#101920]" id="survices">
      <div>
        <h1 className="text-2xl font-bold uppercase text-center text-white">
          Our <span className="text-secondary">survices</span>
        </h1>
      </div>
      <div className="flex flex-wrap gap-20 py-10 justify-center items-center">
       
          {[
            {
              title: "Educational and Training Support",
              description:
                "We offer comprehensive administrative support for the education and training of individuals and institutions, ensuring compliance with the regulations of licensed educational and training bodies. Our services are delivered through various channels including correspondence, radio, television, and the Internet. Although we do not issue certificates with academic or professional standing, we can provide statements of attendance upon request.",
              image: "/earth.jpg",
            },
            {
              title: "Business and Management Consultancy",
              description:
                "Our consultancy services offer expert advice, guidance, and operational assistance on a wide range of management issues, helping businesses and organizations optimize their operations and achieve their strategic goals",
              image: "/ploto.jpg",
            },
            {
              title: "Design of Accounting Methods",
              description: "Advising on public relations strategies and communication plans",
              image: "/mars.jpg",
            },
            {
              title: "Business and Management Consultancy",
              description: "Creating accounting methods, cost accounting programs, and budgetary control procedures",
              image: "/ploto2.jpg",
            },
            {
              title: "Training Program Development",
              description:
                "We specialize in preparing and designing training programs tailored to the needs of companies, institutions, and corporate bodies. Our customized training solutions are offered on a fee basis and are designed to enhance the skills and competencies of your workforce.",
              image: "/mars2.jpg",
            },
          ].map(({ title, description, image }) => (
            <Card title={title} key={title} description={description} image={image} />
          ))}
        </div>
     
    </div>
  );
};

export default About;
