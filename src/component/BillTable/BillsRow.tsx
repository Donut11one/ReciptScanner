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
  color: #7d46f2;
`;

type BillRowProps = {
  name: string;
  address: string;
  date: string;
  totalAmount: number;
  gst: number;
  hst: number;
  spendingCategory: string;
  expenseItem: string;
};

export const BillRow: React.FC<BillRowProps> = ({
  name,
  address,
  date,
  totalAmount,
  gst,
  hst,
  spendingCategory,
  expenseItem,
}) => {
  return (
    <TableRow>
      <TableData>{name}</TableData>
      <TableData>{address}</TableData>
      <TableData>{date}</TableData>
      <TableData>
        <Dollar>$</Dollar> {totalAmount.toFixed(2)}
      </TableData>
      <TableData>
        <Dollar>$</Dollar> {gst.toFixed(2)}
      </TableData>
      <TableData>
        <Dollar>$</Dollar> {hst.toFixed(2)}
      </TableData>
      <TableData>{spendingCategory}</TableData>
      <TableData>{expenseItem}</TableData>
    </TableRow>
  );
};