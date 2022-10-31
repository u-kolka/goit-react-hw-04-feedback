import css from "./Section.module.css";
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h2 className={css.section__title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}

export default Section;