import { useContext } from "react";
import { InputTableContext, InputTableContexttype } from "../context";

const useInputTable = (): InputTableContexttype =>
  useContext(InputTableContext);

export { useInputTable };
