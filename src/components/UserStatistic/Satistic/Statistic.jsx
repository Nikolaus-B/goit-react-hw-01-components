import { StatisticTitle } from '../StatisticTitle/StatisticTitle';
import { StatisticList } from '../StatisticList/StilisticList';
import { StatisticSection } from './Statystic.styled';

export const Statistic = ({ title, stats }) => {
  return (
    <StatisticSection className="statistics">
      <StatisticTitle title={title} />
      <StatisticList stats={stats} />
    </StatisticSection>
  );
};
