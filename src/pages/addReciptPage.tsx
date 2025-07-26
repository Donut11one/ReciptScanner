import React from "react";
import ImageUploader from "../component/ImageUploader/ImageUploader";
import { ExpenseReportTable } from "../component/BillTable";
import { ExpenseReportItem } from "../types";
import { useInputTable } from "../hooks"
const AddReciptPage: React.FC = () => {
  const {newExpenseReportItem} = useInputTable();
  

  const renderTable = newExpenseReportItem ? [newExpenseReportItem] : [];
  return (
    <>
      <ImageUploader />
      <ExpenseReportTable expenseItems={renderTable}/>
    </>
  );
};

export default AddReciptPage;
