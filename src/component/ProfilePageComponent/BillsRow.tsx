import React from "react";
import styled from "styled-components";

const TableRow = styled.tr`
  border-bottom: 1px solid #3e3f4e;
`;

const TableData = styled.td`
  padding: 12px;
  color: #f3f4f6;
`;

const Dollar = styled.span`
  color: #26c6da;
`;

type BillRowProps = {
  name: string;
  dueDate: string;
  amount: number;
  number: string;
};

const BillRow: React.FC<BillRowProps> = ({ name, dueDate, amount, number }) => {
  return (
    <TableRow>
      <TableData>{name}</TableData>
      <TableData>{dueDate}</TableData>
      <TableData><Dollar>$</Dollar> {amount.toFixed(2)}</TableData>
      <TableData>{number}</TableData>
    </TableRow>
  );
};

export default BillRow;
