import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";
import friendsData from "../../data/friendsData.json";

export default function FriendList() {
  return (
    <ul className={css.friendList}>
      {friendsData.map((friend) => (
        <li key={friend.id} className={css.friendListItem}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
