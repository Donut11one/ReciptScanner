import React from "react";
import styled from "styled-components";
import BillsTable from "./BillsTable";
import SidebarMenu from "./SideBarMenu";

const ProfileContainer = styled.div`
  background-color: #1e1f2f;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: row;
  font-family: 'Segoe UI', sans-serif;
`;

const MainSection = styled.div`
  flex: 1;
  padding: 40px;
  overflow-x: auto;
`;

const ProfilePage: React.FC = () => {
  return (
    <ProfileContainer>
      <SidebarMenu />
      <MainSection>
        <BillsTable />
      </MainSection>
    </ProfileContainer>
  );
};

export default ProfilePage;
