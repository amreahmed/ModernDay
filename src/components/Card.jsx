// eslint-disable-next-line react/prop-types
const Card = ({ title, description, image }) => {
  return (
    <div className="card bg-[#253042] w-96 shadow-xl flex flex-col justify-between min-h-full">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body flex-grow">
        <details className="collapse">
          <summary className="collapse-title text-xl font-xs text-white">{title}</summary>
          <div className="collapse-content text-white">
            <p>{description}</p>
          </div>
        </details>
      </div>
    </div>
  );
};

export default Card;