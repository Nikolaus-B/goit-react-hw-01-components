import { ProfileDescription } from '../ProfileDescription/ProfileDescription';
import {
  ProfileContainer,
  ProfileItem,
  ProfileList,
  UserLabel,
  UserQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <ProfileDescription
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />

      <ProfileList className="stats">
        {Object.entries(stats).map((key, index) => {
          return (
            <ProfileItem key={index}>
              <UserLabel>{key[0]}</UserLabel>
              <UserQuantity>{key[1]}</UserQuantity>
            </ProfileItem>
          );
        })}
      </ProfileList>
    </ProfileContainer>
  );
};
