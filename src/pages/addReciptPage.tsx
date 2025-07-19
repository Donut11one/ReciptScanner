import React from "react";
import ImageUploader from "../component/ImageUploader/ImageUploader";
import { ExpenseReportTable } from "../component/BillTable";
import { ExpenseReportItem } from "../types";
const AddReciptPage: React.FC = () => {
  const expenseReportItems: ExpenseReportItem[] = [
    {
      vendorName: "RedPay Credit",
      date: "01/28/19",
      total: 43.46,
      subTotal: 43.46,
      gst: 12.12,
      hst: 8.22,
    },
    {
      vendorName: "T&T",
      date: "01/28/25",
      total: 43.46,
      subTotal: 43.46,
      gst: 12.12,
      hst: 8.22,
    },
    {
      vendorName: "鹿园",
      date: "05/22/25",
      total: 35.44,
      subTotal: 35.44,

      gst: 2.12,
      hst: 3.22,
    },
    {
      vendorName: "Staples",
      date: "01/28/19",
      total: 924.33,
      subTotal: 924.33,
      gst: 122.3,
      hst: 80.77,
    },
  ];
  return (
    <>
      <ImageUploader />
      <ExpenseReportTable expenseItems={expenseReportItems}/>
    </>
  );
};

export default AddReciptPage;
