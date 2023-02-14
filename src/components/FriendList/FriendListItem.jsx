import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

export const FriendListItem = ({ friend:{ isOnline, avatar, name} }) => {
    return (
        
            <><span className={isOnline ? styles.online : styles.offline}></span>
                <img className={styles.avatar}src={avatar} alt={name} width="48" />
                <p className={styles.name}>{name}</p></>
                
                
           
 

)
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}