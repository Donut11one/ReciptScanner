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
  padding: 80px 20px;
  font-family: 'Segoe UI', sans-serif;
`;

const Layout = styled.div`
  display: flex;
  gap: 40px;
`;

const IconColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TableCard = styled.div`
  background-color: #2a2b3d;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
`;

const ProfilePage: React.FC = () => {
  return (
    <PageWrapper>
      <Layout>
        <IconColumn>
          <SidebarMenu />
        </IconColumn>
        <TableCard>
          <BillsTable />
        </TableCard>
      </Layout>
    </PageWrapper>
  );
};

export default ProfilePage;
