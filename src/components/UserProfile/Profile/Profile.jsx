import { ProfileDescription } from '../ProfileDescription/ProfileDescription';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <ProfileDescription
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />

      <ul className="stats">
        {Object.entries(stats).map((key, index) => {
          return (
            <li key={index}>
              <span className="label">{key[0]}</span>
              <span className="quantity">{key[1]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
