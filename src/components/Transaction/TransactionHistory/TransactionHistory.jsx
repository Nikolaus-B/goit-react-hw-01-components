import { TransactionHead } from '../TransactionHead/TransactionHead';
import { TransactionBody } from '../TransactionBody/TransactionBody';
import { Table } from './TransacrionHistory.styled';

export const TransactionHistory = ({ transaction }) => {
  return (
    <Table className="transaction-history">
      <TransactionHead type="Type" amount="Amount" currency="Currency" />
      <TransactionBody transaction={transaction} />
    </Table>
  );
};
