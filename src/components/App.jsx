import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { Statistic } from './UserStatistic/Satistic/Statistic';
import { Profile } from './UserProfile/Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './Transaction/TransactionHistory/TransactionHistory';

const { username, tag, location, avatar, stats } = user;

export const App = () => {
  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transaction={transactions} />
    </div>
  );
};
