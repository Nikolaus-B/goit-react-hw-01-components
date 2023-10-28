import { TransactionBills, TransactionLine } from './TransactionBody.styled';

export const TransactionBody = ({ transaction }) => {
  return (
    <tbody>
      {transaction.map(({ id, type, amount, currency }, index) => {
        return (
          <TransactionLine key={id} $isEven={index % 2 === 0}>
            <TransactionBills>{type}</TransactionBills>
            <TransactionBills>{amount}</TransactionBills>
            <TransactionBills>{currency}</TransactionBills>
          </TransactionLine>
        );
      })}
    </tbody>
  );
};
