import {
  StatiscticItem,
  StatisticLabel,
  StatisticPercentage,
  StatisticSection,
  StatysticListContainer,
  StatysticText,
} from './Statystic.styled';

export const Statistic = ({ title, stats }) => {
  return (
    <StatisticSection>
      {title && <StatysticText className="title">{title}</StatysticText>}
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
    </StatisticSection>
  );
};
