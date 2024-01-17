import { PropTypes } from "prop-types";
// import styles from "./cardSkill.module.css";
// console.log(styles);

function CardSkill({ content, bgColor }) {
  return (
    <li style={{ backgroundColor: bgColor }} className="card__skill">
      {content}
    </li>

    // ! Module css
    //   return <li className={styles.card__skill}>{content}</li>;
  );
}

CardSkill.propTypes = {
  content: PropTypes.string,
  bgColor: PropTypes.string,
};

export default CardSkill;
