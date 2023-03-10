import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
    return (
        
            <li className={styles.item} key={id}><span className={isOnline ? styles.online : styles.offline}></span>
                <img className={styles.avatar}src={avatar} alt={name} width="48" />
                <p className={styles.name}>{name}</p></li>
                

)
}

FriendListItem.propTypes = {
     id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}