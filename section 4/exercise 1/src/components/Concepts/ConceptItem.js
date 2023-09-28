const ConceptItem = ({ image, title, description, id, nameOfClass }) => {
  return (
    <li className={nameOfClass}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
};

export default ConceptItem;
