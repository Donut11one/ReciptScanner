import React from "react";
import styled from "styled-components";
import ReciptRecordPageComponent from "../component/ReciptRecordPageComponent/ReciptRecordComponent";

const RecordPageBody = styled.div`
  background-color: #1e1f2f;
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
      <ReciptRecordPageComponent />
    </RecordPageBody>
  );
};

export default ReciptRecordPage;
