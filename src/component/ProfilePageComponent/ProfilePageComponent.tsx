import React from "react";
import styled from "styled-components";
import BillsTable from "./BillsTable";
import SidebarMenu from "./SideBarMenu";

const PageWrapper = styled.div`
  background-color: #1e1f2f;
  color: white;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 80px;
`;

const TableCard = styled.div`
  display: flex;
  background-color: #2a2b3d;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 1px 8px 24px 1px rgba(0, 0, 0, 0.3);
  gap: 10px;
`;

const ProfilePageComponent: React.FC = () => {
  return (
    <PageWrapper>
      <TableCard>
        <SidebarMenu />
        <BillsTable />
      </TableCard>
    </PageWrapper>
  );
};

export default ProfilePageComponent;
