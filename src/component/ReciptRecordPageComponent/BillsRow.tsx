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
  Date: string;
  TotalAmount: number;
  GST: number;
  HST: number;
  SpendingCategory: string;
  ExpenseItem: string;
};

const BillRow: React.FC<BillRowProps> = ({
  name,
  address,
  Date,
  TotalAmount,
  GST,
  HST,
  SpendingCategory,
  ExpenseItem,
}) => {
  return (
    <TableRow>
      <TableData>{name}</TableData>
      <TableData>{address}</TableData>
      <TableData>{Date}</TableData>
      <TableData>
        <Dollar>$</Dollar> {TotalAmount.toFixed(2)}
      </TableData>
      <TableData>
        <Dollar>$</Dollar> {GST}
      </TableData>
      <TableData>
        <Dollar>$</Dollar> {HST}
      </TableData>
      <TableData>{SpendingCategory}</TableData>
      <TableData>{ExpenseItem}</TableData>
    </TableRow>
  );
};

export default BillRow;
