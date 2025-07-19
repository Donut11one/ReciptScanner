import React, { createContext, FC, useEffect, useMemo, useState } from "react";
import { createWorker } from "tesseract.js";

export type InputTableContexttype = {
  imageURL: string;
  setImageURL: (imageUrl: string) => void;
  responseText: string;
  setResponseText: (text: string) => void;
};

const InputTableContext = createContext<InputTableContexttype>({
  imageURL: "",
  setImageURL: () => {},
  responseText: "",
  setResponseText: () => {},
});

const InputTableProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [imageURL, setImageURL] = useState<string>("");
  const [responseText, setResponseText] = useState<string>("");

  useEffect(() => {
    if (imageURL) {
      tesseractRecognition(imageURL);
    }
  }, [imageURL]);

  // tesseract call function
  const tesseractRecognition = async (imageUrl: string) => {
    const worker = await createWorker("eng");
    const ret = await worker.recognize(imageUrl);
    setResponseText(ret.data.text);
    console.log(ret.data.text);
    await worker.terminate();
  };

  const context = useMemo<InputTableContexttype>(
    () => ({ imageURL, setImageURL, responseText, setResponseText }),
    [imageURL, responseText]
  );

  return (
    <InputTableContext.Provider value={context}>
      {children}
    </InputTableContext.Provider>
  );
};

export { InputTableContext, InputTableProvider };
