import { ProfileDescription } from '../ProfileDescription/ProfileDescription';
import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const statsKeyAndValues = Object.entries(stats);

  return (
    <div className={css.profile}>
      <ProfileDescription
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />

      <ul className={css.stats}>
        {statsKeyAndValues.map((key, index) => {
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
