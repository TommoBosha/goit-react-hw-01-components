import PropTypes from "prop-types";
import { FriendListItem } from "./FriendListItem";
import styles from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friendList}>
            {friends.map(friend => (<li className={styles.item} key={friend.id}><FriendListItem friend = {friend}/></li>))}
 
</ul>
)
}

FriendList.propTypes = {
    id: PropTypes.number,
}