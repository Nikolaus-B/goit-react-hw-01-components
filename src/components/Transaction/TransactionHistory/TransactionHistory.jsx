import { TransactionHead } from '../TransactionHead/TransactionHead';
import { TransactionBody } from '../TransactionBody/TransactionBody';

export const TransactionHistory = ({ transaction }) => {
  return (
    <table className="transaction-history">
      <TransactionHead type="Type" amount="Amount" currency="Currency" />
      <TransactionBody transaction={transaction} />
    </table>
  );
};
