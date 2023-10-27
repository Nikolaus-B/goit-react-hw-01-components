import { StatisticTitle } from '../StatisticTitle/StatisticTitle';
import { StatisticList } from '../StatisticList/StilisticList';

export const Statistic = ({ title, stats }) => {
  return (
    <section className="statistics">
      <StatisticTitle title={title} />
      <StatisticList stats={stats} />
    </section>
  );
};
