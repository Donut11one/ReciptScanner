import React from "react";
import styled from "styled-components";
import { BillRow } from "./BillsRow";
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

export type BillTableProps = {
  hasSideBar?: boolean;
  expenseItems: ExpenseReportItem[];
};

export const BillsTable: React.FC<BillTableProps> = ({
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
            <BillRow key={index} expenseItem={item} />
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};
