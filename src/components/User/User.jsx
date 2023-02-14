import PropTypes from "prop-types";
import styles from "./User.module.css";

export const User = ({ username, tag, location, avatar, stats:{followers, views, likes} }) => (
    <div className={styles.profile}>
<div className={styles.description}>
            <img
                src={avatar}
                alt={username}
                className={styles.avatar}
            />
            <p className={styles.name}>{username}</p>
            <p className={styles.tag}>@{tag}</p>
            <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
            <li>
                <span className={styles.label}>Followers</span>
                <span className={styles.quantity}>{followers}</span>
            </li>
            <li>
                <span className={styles.label}>Views</span>
                <span className={styles.quantity}>{views}</span>
            </li>
            <li>
                <span className={styles.label}>Likes</span>
                <span className={styles.quantity}>{likes}</span>
            </li>
        </ul>
    </div>);

User.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
location: PropTypes.string,
avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
        
})
}