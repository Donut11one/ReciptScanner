import React, { createContext, FC, useEffect, useMemo, useState } from "react";
import { createWorker } from "tesseract.js";
import { ExpenseReportItem } from "../types";
import { ExpenseItemRow } from "../component/BillTable";

export type InputTableContexttype = {
  imageURL: string;
  setImageURL: (imageUrl: string) => void;
  responseText: string;
  setResponseText: (text: string) => void;
  newExpenseReportItem: ExpenseReportItem;
  setNewExpenseReportItem: (expenseReportItem: ExpenseReportItem) => void;
};

const InputTableContext = createContext<InputTableContexttype>({
  imageURL: "",
  setImageURL: () => {},
  responseText: "",
  setResponseText: () => {},
  newExpenseReportItem: null,
  setNewExpenseReportItem: () => {},
});

const InputTableProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [imageURL, setImageURL] = useState<string>("");
  const [responseText, setResponseText] = useState<string>("");
  const [newExpenseReportItem, setNewExpenseReportItem] =
    useState<ExpenseReportItem>(null);

  useEffect(() => {
    if (imageURL) {
      const tesseractResponse = tesseractRecognition(imageURL);
      tesseractResponse.then((data) => {
        analyzeResponse(data);
      });
    }
  }, [imageURL]);

  // tesseract call function
  const tesseractRecognition = async (imageUrl: string) => {
    const worker = await createWorker("eng");
    const ret = await worker.recognize(imageUrl);
    setResponseText(ret.data.text);
    await worker.terminate();
    return ret.data.text;
  };

  const analyzeResponse = (tesseractResponse: string) => {
    // Split the OCR text into lines, trim whitespace, and remove empty lines
    const responseArray = tesseractResponse
      .split("\n")
      .map((lowercaseLine) => lowercaseLine.trim())
      .filter((lowercaseLine) => lowercaseLine.length > 0);

    // Assume the vendor name is the first lowercaseLine
    const responseVendorName = responseArray[0];

    // Initialize extracted values
    let responseDate: string = "";
    let responseSubTotal: number = 0;
    let responseTotal: number = 0;
    let responseGST: number = 0;
    let responseHST: number = 0;

    // Regex for matching common date formats (e.g., YYYY-MM-DD, DD/MM/YYYY) Copied from online
    const dateRegex =
      /\b(20\d{2}[\/\-\.]?\d{1,2}[\/\-\.]?\d{1,2}|\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]20\d{2})\b/;

    // Regex for extracting monetary values
    const moneyRegex = /\$?(\d+\.\d{2})/;

    const subtotalRegex= /(sub|net)(\s|-)?total/

    // Loop through all lines to find date, subtotal, total, GST, and HST
    responseArray.forEach((line)=>{
      const lowercaseLine = line.toLowerCase();

      // Extract the first matching date
      if (dateRegex.test(lowercaseLine)) {
        const match = lowercaseLine.match(dateRegex);
        if (match !== null) {
          responseDate = match[0];
        }
      }

      // Extract subtotal from lines that include the word "sub"
      if (subtotalRegex.test(lowercaseLine) && moneyRegex.test(lowercaseLine)) {
        const match = lowercaseLine.match(moneyRegex);
        if (match !== null) {
          console.log(match[match.length - 1])
          responseSubTotal = parseFloat(match[match.length - 1]);
        }
      }

      // Extract GST from lines that include "gst"
      if (lowercaseLine.includes("gst") && moneyRegex.test(lowercaseLine)) {
        const match = lowercaseLine.match(moneyRegex);
        if (match !== null) {
          responseGST = parseFloat(match[match.length - 1]);
        }
      }

      // Extract HST from lines that include "pst"
      if (lowercaseLine.includes("pst") && moneyRegex.test(lowercaseLine)) {
        const match = lowercaseLine.match(moneyRegex);
        if (match !== null) {
          responseHST = parseFloat(match[match.length - 1]);
        }
      }

      // Extract total from lines that include "total"
      if (!(lowercaseLine.includes("sub")) &&lowercaseLine.includes("total") && moneyRegex.test(lowercaseLine)) {
        const match = lowercaseLine.match(moneyRegex);
        if (match !== null) {
          responseTotal = parseFloat(match[match.length - 1]);
        }
      }
    })

    // Create a new ExpenseReportItem object with the extracted values
    const tempExpenseReportItem: ExpenseReportItem = {
      vendorName: responseVendorName,
      date: responseDate,
      subTotal: responseSubTotal,
      total: responseTotal,
      gst: responseGST,
      hst: responseHST,
    };

    // Update state or parent component with the new item
    setNewExpenseReportItem(tempExpenseReportItem);
  };

  const context = useMemo<InputTableContexttype>(
    () => ({
      imageURL,
      setImageURL,
      responseText,
      setResponseText,
      newExpenseReportItem,
      setNewExpenseReportItem,
    }),
    [imageURL, responseText, newExpenseReportItem]
  );

  return (
    <InputTableContext.Provider value={context}>
      {children}
    </InputTableContext.Provider>
  );
};

export { InputTableContext, InputTableProvider };
