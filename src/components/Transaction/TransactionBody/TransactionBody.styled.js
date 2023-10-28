import styled from 'styled-components';

export const TransactionLine = styled.tr`
  background-color: ${props => (props.$isEven ? 'white' : '#F8F8FF')};
`;

export const TransactionBills = styled.td`
  text-align: center;
  height: 35px;
  color: ${p => p.theme.colors.slightGrey};
`;
