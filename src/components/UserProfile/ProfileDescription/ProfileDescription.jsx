import {
  Description,
  ProfileImage,
  UserLocation,
  UserName,
  UserTag,
} from './ProfileDescription.styled';

export const ProfileDescription = ({ avatar, username, tag, location }) => {
  return (
    <Description>
      <ProfileImage
        src={avatar}
        alt="User avatar"
        width="100px"
        height="100px"
      />
      <UserName>{username}</UserName>
      <UserTag>{tag}</UserTag>
      <UserLocation>{location}</UserLocation>
    </Description>
  );
};
