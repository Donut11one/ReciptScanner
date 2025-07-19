import React from "react";
import styled from "styled-components";
import { ExpenseReportItem } from "../../types";

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

type ExpenseBillRowProps = {
  expenseItem: ExpenseReportItem;
};

export const ExpenseItemRow: React.FC<ExpenseBillRowProps> = ({
  expenseItem,
}) => {
  return (
    <TableRow>
      <TableData>{expenseItem.vendorName}</TableData>
      <TableData>{expenseItem.date}</TableData>
      <TableData>
        <Dollar>$</Dollar> {expenseItem.subTotal.toFixed(2)}
      </TableData>
      <TableData>
        <Dollar>$</Dollar> {expenseItem.gst.toFixed(2)}
      </TableData>
      <TableData>
        <Dollar>$</Dollar> {expenseItem.hst.toFixed(2)}
      </TableData>
      <TableData>
        <Dollar>$</Dollar> {expenseItem.total.toFixed(2)}
      </TableData>
    </TableRow>
  );
};