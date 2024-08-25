import './Card.css';


const Card =({title, price, feature, buttonlabel}) => {
  return (
    <div className="card">
      <h3 className="title">{title}</h3>
      <h4 className="price">{price}</h4>
      <ul className="feature">
        {feature.map((feature, index) => (
          <p key={index} className={feature.enabled ? 'enabled' : 'disabled'}>
            {feature.enabled ? '✔' : '✘'} {feature.name}
          </p>
        ))}
      </ul>
      <button className="button">{buttonlabel}</button>
    </div>
  );
};

export default Card
