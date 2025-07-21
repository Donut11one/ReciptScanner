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
  setNewExpenseReportItem: () => {}
});

const InputTableProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [imageURL, setImageURL] = useState<string>("");
  const [responseText, setResponseText] = useState<string>("");
  const [newExpenseReportItem, setNewExpenseReportItem] = useState<ExpenseReportItem>(null);

  useEffect(() => {
    if (imageURL) {
      const tesseractResponse = tesseractRecognition(imageURL);
      tesseractResponse.then(data =>{
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
    return ret.data.text
  };
  
  const analyzeResponse = (tesseractResponse: string)=>{
    const responseArray = tesseractResponse.split("\n");
    
    const tempExpenseReportItem: ExpenseReportItem = {
      vendorName: responseArray[0],
      date: responseArray[1],
      subTotal: 1,
      total: 2,
      gst: 3,
      hst: 4
    }
    setNewExpenseReportItem(tempExpenseReportItem);
  }

  const context = useMemo<InputTableContexttype>(
    () => ({ imageURL, setImageURL, responseText, setResponseText, newExpenseReportItem, setNewExpenseReportItem }),
    [imageURL, responseText, newExpenseReportItem]
  );


  
  return (
    <InputTableContext.Provider value={context}>
      {children}
    </InputTableContext.Provider>
  );
};

export { InputTableContext, InputTableProvider };
