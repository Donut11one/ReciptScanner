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
  color: #7D46F2;
`;

type BillRowProps = {
  name: string;
  address: string;
  Date: string;
  TotalAmount: number;
  Type: string;
  TBD1: string;
  TBD2: string;
};

const BillRow: React.FC<BillRowProps> = ({
  name,
  address,
  Date,
  TotalAmount,
  Type,
  TBD1,
  TBD2
}) => {
  return (
    <TableRow>
      <TableData>{name}</TableData>
      <TableData>{address}</TableData>
      <TableData>{Date}</TableData>
      <TableData><Dollar>$</Dollar> {TotalAmount.toFixed(2)}</TableData>
      <TableData>{Type}</TableData>
      <TableData>{TBD1}</TableData>
      <TableData>{TBD2}</TableData>
    </TableRow>
  );
};

export default BillRow;
