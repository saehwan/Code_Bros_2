// import styles from "./card.module.scss";

const Card = (): JSX.Element => {
  return (
    <div className={"movie"}>
      <div className="cards">
        <img className="cards__img" />
        img
        <img />
        <div className="cards__overlay">
          <div className="card__title">restaurent name</div>
          <div className="card__runtime">
            open-time, close-time
            <span className="card__rating">
              rating
              <i className="fas fa-star" />
            </span>
          </div>
          <div className="card__description">description</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
