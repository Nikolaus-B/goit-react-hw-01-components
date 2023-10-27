export const StatisticList = ({ stats }) => {
  return (
    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => {
        return (
          <li key={id} className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        );
      })}
    </ul>
  );
};
