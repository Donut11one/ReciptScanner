import React from "react";
import styled from "styled-components";
import { ExpenseItemRow } from "./ExpenseItemRow";
import { SidebarMenu } from "./SideBarMenu";
import { ExpenseReportItem } from "../../types";

const TableHeader = styled.th`
  text-align: left;
  padding: 12px;
  color: #ffffff;
`;

const TableContainer = styled.div`
  display: flex;
  background-color: #2a2b3d;
  border-radius: 10px;
  box-shadow: 1px 8px 24px 1px rgba(0, 0, 0, 0.3);
  gap: 10px;
  padding: 16px;
`;

export type ExpenseReportTableProps = {
  hasSideBar?: boolean;
  expenseItems: ExpenseReportItem[];
};

export const ExpenseReportTable: React.FC<ExpenseReportTableProps> = ({
  hasSideBar = false,
  expenseItems,
}) => {
  return (
    <TableContainer>
      {hasSideBar && <SidebarMenu />}
      <table>
        <thead>
          <tr>
            <TableHeader>Vendor Name</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Sub Total</TableHeader>
            <TableHeader>GST</TableHeader>
            <TableHeader>HST</TableHeader>
            <TableHeader>Total</TableHeader>
            
          </tr>
        </thead>
        <tbody>
          {expenseItems.map((item, index) => (
            <ExpenseItemRow key={index} expenseItem={item} />
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};
