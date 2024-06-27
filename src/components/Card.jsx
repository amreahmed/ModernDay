import { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const Card = ({ title, description, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card bg-[#253042] w-96 shadow-xl flex flex-col justify-between min-h-full">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body flex-grow ">
        <details className="collapse" open={isOpen} onToggle={() => setIsOpen((prev) => !prev)}>
          <summary className="py-2 text-xl font-xs text-white flex items-center cursor-pointer">
            <div className="flex justify-between items-center  ">
              <div className="mr-5">{isOpen ? <IoIosArrowDropup className="mr-2" size={20}/> : <IoIosArrowDropdown className="mr-2" size={20}/>}</div>
              {title}
            </div>
          </summary>
          <div className=" text-white">
            <p>{description}</p>
          </div>
        </details>
      </div>
    </div>
  );
};

export default Card;
