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
  dueDate: string;
  amount: number;
  Address: string;
};

const bills: Bill[] = [
  { name: "RedPay Credit", dueDate: "01/28/19", amount: 43.46, Address: "1" },
  { name: "Rent", dueDate: "02/09/19", amount: 1200.0, Address: "1" },
  { name: "TabFine Credit", dueDate: "02/22/19", amount: 87.33, Address: "2" },
  { name: "ABC Loans", dueDate: "02/28/19", amount: 400.0, Address: "2" },
];

const BillsTable: React.FC = () => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Location</TableHeader>
          <TableHeader>Payment Due</TableHeader>
          <TableHeader>Payment Amount</TableHeader>
          <TableHeader>Address</TableHeader>
        </tr>
      </thead>
      <tbody>
        {bills.map((bill, index) => (
          <BillRow
            key={index}
            name={bill.name}
            dueDate={bill.dueDate}
            amount={bill.amount}
            number={bill.Address}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default BillsTable;
