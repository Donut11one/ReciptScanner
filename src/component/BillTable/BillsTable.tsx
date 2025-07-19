import React from "react";
import styled from "styled-components";
import { BillRow } from "./BillsRow";
import { SidebarMenu } from "./SideBarMenu";

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

type Bill = {
  name: string;
  address: string;
  date: string;
  amount: number;
  gst: number;
  hst: number;
  spendingCategory: string;
  expenseItem: string;
};

const bills: Bill[] = [
  {
    name: "RedPay Credit",
    address: "123 Main St",
    date: "01/28/19",
    amount: 43.46,
    gst: 12.12,
    hst: 8.22,
    spendingCategory: "Investment",
    expenseItem: "TBD",
  },
  {
    name: "T&T",
    address: "22 Marine Drive",
    date: "01/28/25",
    amount: 43.46,
    gst: 12.12,
    hst: 8.22,
    spendingCategory: "Groceries",
    expenseItem: "TBD",
  },
  {
    name: "鹿园",
    address: "6270 Fraser",
    date: "05/22/25",
    amount: 35.44,
    gst: 2.12,
    hst: 3.22,
    spendingCategory: "Client Meeting",
    expenseItem: "TBD",
  },
  {
    name: "Staples",
    address: "123 Main St",
    date: "01/28/19",
    amount: 924.33,
    gst: 122.3,
    hst: 80.77,
    spendingCategory: "Office Supplies",
    expenseItem: "TBD",
  },
];

export const BillsTable: React.FC<{hasSideBar?: boolean}> = ({hasSideBar = false}) => {
  return (
    <TableContainer>
      {hasSideBar && (<SidebarMenu />)}
      <table>
        <thead>
          <tr>
            <TableHeader>Vendor Name</TableHeader>
            <TableHeader>Address</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Total Amount</TableHeader>
            <TableHeader>GST</TableHeader>
            <TableHeader>HST</TableHeader>
            <TableHeader>Spending Category</TableHeader>
            <TableHeader>Expense Item</TableHeader>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill, index) => (
            <BillRow
              key={index}
              name={bill.name}
              address={bill.address}
              date={bill.date}
              totalAmount={bill.amount}
              gst={bill.gst}
              hst={bill.hst}
              spendingCategory={bill.spendingCategory}
              expenseItem={bill.expenseItem}
            />
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};
