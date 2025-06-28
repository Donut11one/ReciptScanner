import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 12px;
  font-weight: normal;
  color: grey;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid grey;
`;

const TableData = styled.td`
  padding: 12px;
  color: white;
`;

const Dollar = styled.span`
  color: #7D46F2;
`;

const BillsTable: React.FC = () => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Location</TableHeader>
          <TableHeader>Payment Due</TableHeader>
          <TableHeader>Payment Amount</TableHeader>
        </tr>
      </thead>
      <tbody>
        <TableRow>
          <TableData>TnT</TableData>
          <TableData>01/28/19</TableData>
          <TableData><Dollar>$</Dollar> 43.46</TableData>
        </TableRow>
        <TableRow>
          <TableData>Walmart</TableData>
          <TableData>02/09/19</TableData>
          <TableData><Dollar>$</Dollar> 1200.00</TableData>
        </TableRow>
        <TableRow>
          <TableData>Superstore</TableData>
          <TableData>02/22/19</TableData>
          <TableData><Dollar>$</Dollar> 87.33</TableData>
        </TableRow>
        <TableRow>
          <TableData>BestBuy</TableData>
          <TableData>02/28/19</TableData>
          <TableData><Dollar>$</Dollar> 400.00</TableData>
        </TableRow>
      </tbody>
    </Table>
  );
};

export default BillsTable;
