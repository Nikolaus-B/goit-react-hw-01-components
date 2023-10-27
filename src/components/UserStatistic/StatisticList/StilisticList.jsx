import {
  StatysticListContainer,
  StatiscticItem,
  StatisticLabel,
  StatisticPercentage,
} from './StstisticList.styled';

export const StatisticList = ({ stats }) => {
  return (
    <StatysticListContainer>
      {stats.map(({ id, label, percentage }) => {
        return (
          <StatiscticItem key={id} $label={label}>
            <StatisticLabel>{label}</StatisticLabel>
            <StatisticPercentage>{percentage}%</StatisticPercentage>
          </StatiscticItem>
        );
      })}
    </StatysticListContainer>
  );
};
