import css from "./Notification.module.css";
import PropTypes from "prop-types";

const Notification = ({ message }) => {
    return (
        <>
        <span className={css.notify__info}>{message}</span>
        <p>No feedback given</p>
        </>
    );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Notification;