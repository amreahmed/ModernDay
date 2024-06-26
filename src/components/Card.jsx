// eslint-disable-next-line react/prop-types
const Card = ({title, description, image}) => {
  return (
    <div className="card bg-gray-700 w-96 shadow-xl ">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <details className="collapse ">
          <summary className="collapse-title text-xl font-xs text-white">{title}</summary>
          <div className="collapse-content text-white">
                      <p>{ description}</p>
          </div>
        </details>
      </div>
    </div>
  );
}

export default Card