import {
  FriendIsOnline,
  FriendItem,
  FriendName,
  Friends,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendItem key={id}>
            <FriendIsOnline $isOnline={isOnline}></FriendIsOnline>
            <img src={avatar} alt="User avatar" width="48" height="48" />
            <FriendName>{name}</FriendName>
          </FriendItem>
        );
      })}
    </Friends>
  );
};
