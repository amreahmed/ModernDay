
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 bg-[#101920] px-20">
      <h1 className="text-4xl font-bold uppercase text-center text-white py-20">
        About <span className="text-secondary">Us</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src="mars.jpg" alt="" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit officiis nulla ipsum neque! Sed,
              provident quam necessitatibus, excepturi soluta ut fugiat neque doloremque harum maiores distinctio eos
              iste eius nulla corrupti adipisci. Quod reprehenderit earum quaerat nobis hic sint, soluta tempore cum
              suscipit tempora, aliquam consequuntur nihil culpa, voluptates veniam eveniet ipsam illo est in laborum.
              Quo, dolores nemo, quisquam numquam aliquam dicta non doloribus facilis cupiditate, maiores expedita illum
              nostrum nobis odio officiis earum soluta eos! Rem placeat assumenda repellat debitis dolorem repudiandae
            </p>
          </div>
          <a href="" className="btn btn-secondary">
            Know More
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
