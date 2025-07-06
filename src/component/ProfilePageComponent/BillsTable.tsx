import React from "react";
import styled from "styled-components";
import BillRow from "./BillsRow";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 12px;
  font-weight: normal;
  color: #9ca3af;
`;

type Bill = {
  name: string;
  address: string;
  dueDate: string;
  amount: number;
  notes: string;
  status: string;
  method: string;
};

const bills: Bill[] = [
  {
    name: "RedPay Credit",
    address: "123 Main St",
    dueDate: "01/28/19",
    amount: 43.46,
    notes: "Auto Pay",
    status: "Paid",
    method: "Credit Card"
  },
  {
    name: "Rent",
    address: "456 Elm St",
    dueDate: "02/09/19",
    amount: 1200.0,
    notes: "Paid",
    status: "Paid",
    method: "Bank Transfer"
  },
  {
    name: "TabFine Credit",
    address: "789 Oak Ave",
    dueDate: "02/22/19",
    amount: 87.33,
    notes: "Due Soon",
    status: "Pending",
    method: "Cash"
  },
  {
    name: "ABC Loans",
    address: "135 Pine Rd",
    dueDate: "02/28/19",
    amount: 400.0,
    notes: "Pending",
    status: "Overdue",
    method: "Cheque"
  }
];

const BillsTable: React.FC = () => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Name</TableHeader>
          <TableHeader>Address</TableHeader>
          <TableHeader>Date</TableHeader>
          <TableHeader>Total Amount</TableHeader>
          <TableHeader>Type</TableHeader>
          <TableHeader>TBD</TableHeader>
          <TableHeader>TBD</TableHeader>
        </tr>
      </thead>
      <tbody>
        {bills.map((bill, index) => (
          <BillRow
            key={index}
            name={bill.name}
            address={bill.address}
            Date={bill.dueDate} 
            TotalAmount={bill.amount}
            Type={bill.notes}
            TBD1={bill.status}
            TBD2={bill.method}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default BillsTable;
