import React from "react";
import styled from "styled-components";

const Sidebar = styled.div`
  width: 80px;
  background-color: #2a2b3d;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

const SidebarIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #7D46F2;
  border-radius: 50%;
  margin: 20px 0;
`;

const SidebarMenu: React.FC = () => {
  return (
    <Sidebar>
      <SidebarIcon />
      <SidebarIcon />
      <SidebarIcon />
    </Sidebar>
  );
};

export default SidebarMenu;
