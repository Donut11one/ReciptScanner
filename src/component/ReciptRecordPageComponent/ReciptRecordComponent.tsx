import React from "react";
import styled from "styled-components";
import BillsTable from "./BillsTable";
import SidebarMenu from "./SideBarMenu";

const TableCard = styled.div`
  display: flex;
  background-color: #2a2b3d;
  border-radius: 10px;
  box-shadow: 1px 8px 24px 1px rgba(0, 0, 0, 0.3);
  gap: 10px;
`;

const ReciptRecordPageComponent: React.FC = () => {
  return (
      <TableCard>
        <SidebarMenu />
        <BillsTable />
      </TableCard>
  );
};

export default ReciptRecordPageComponent;
