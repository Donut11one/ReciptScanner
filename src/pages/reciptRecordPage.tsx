import React from "react";
import styled from "styled-components";
import { BillsTable } from "../component/BillTable";

const RecordPageBody = styled.div`
  background-color: #212529;
  color: white;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 80px;
`;

const ReciptRecordPage: React.FC = () => {
  return (
    <RecordPageBody>
      <BillsTable hasSideBar/>
    </RecordPageBody>
  );
};

export default ReciptRecordPage;
