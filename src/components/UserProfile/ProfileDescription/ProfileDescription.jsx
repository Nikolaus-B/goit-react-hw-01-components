import css from './ProfileDescription.module.css';

export const ProfileDescription = ({ avatar, username, tag, location }) => {
  return (
    <div className={css.description}>
      <img src={avatar} alt="User avatar" className={css.avatar} />
      <p className="name">{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
};
