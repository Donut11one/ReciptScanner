import React from "react";
import styled from "styled-components";
import BillRow from "./BillsRow";

const TableHeader = styled.th`
  text-align: left;
  padding: 12px;
  color: #FFFFFF;
`;

type Bill = {
  name: string;
  address: string;
  Date: string;
  amount: number;
  GST: number;
  HST: number;
  SpendingCategory: string;
  ExpenseItem: string;
};

const bills: Bill[] = [
  {
    name: "RedPay Credit",
    address: "123 Main St",
    Date: "01/28/19",
    amount: 43.46,
    GST: 12.12,
    HST: 8.22,
    SpendingCategory: "Investment",
    ExpenseItem: "TBD"
  },
  {
    name: "T&T",
    address: "22 Marine Drive",
    Date: "01/28/25",
    amount: 43.46,
    GST: 12.12,
    HST: 8.22,
    SpendingCategory: "Groceries",
    ExpenseItem: "TBD"
  },
  {
    name: "鹿园",
    address: "6270 Fraser",
    Date: "05/22/25",
    amount: 35.44,
    GST: 2.12,
    HST: 3.22,
    SpendingCategory: "Client Meeting",
    ExpenseItem: "TBD"
  },
  {
    name: "Staples",
    address: "123 Main St",
    Date: "01/28/19",
    amount: 924.33,
    GST: 122.3,
    HST: 80.77,
    SpendingCategory: "Office Supplies",
    ExpenseItem: "TBD"
  }
  
];

const BillsTable: React.FC = () => {
  return (
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
            Date={bill.Date} 
            TotalAmount={bill.amount}
            GST={bill.GST}
            HST={bill.HST}
            SpendingCategory={bill.SpendingCategory}
            ExpenseItem={bill.ExpenseItem}
          />
        ))}
      </tbody>
    </table>
  );
};

export default BillsTable;
