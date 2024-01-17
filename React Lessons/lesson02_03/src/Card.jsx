import { PropTypes } from "prop-types";
import CardSkill from "./CardSkill";


function Card({ cardDescription, cardTitle, cardImg, skills }) {
  return (
    <div className="card">
      <div className="card__img__container">
        <img src={cardImg} alt="card-profile" />
      </div>

      <div className="card__content">
        <h2 className="card__title">{cardTitle}</h2>
        <p className="card__description">{cardDescription}</p>
        <ul className="card__skills__container">
          {skills?.map((skill, index) => (
            <CardSkill
              key={index}
              content={skill.skillContent}
              bgColor={skill.skillBgColor}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

Card.propTypes = {
  cardDescription: PropTypes.string,
  cardTitle: PropTypes.string,
  cardImg: PropTypes.string,
  skills: PropTypes.array,
};

export default Card;
