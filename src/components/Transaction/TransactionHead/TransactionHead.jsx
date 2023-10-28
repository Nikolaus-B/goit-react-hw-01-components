import { TransactionHeaders } from './TransactionHead.styled';

export const TransactionHead = ({ type, amount, currency }) => {
  return (
    <thead>
      <tr>
        <TransactionHeaders>{type}</TransactionHeaders>
        <TransactionHeaders>{amount}</TransactionHeaders>
        <TransactionHeaders>{currency}</TransactionHeaders>
      </tr>
    </thead>
  );
};
