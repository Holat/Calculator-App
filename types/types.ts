import { SetStateAction } from "react";

type BtnProp = {
  value: string;
  setNum1?: React.Dispatch<React.SetStateAction<string>>;
  setNum2?: React.Dispatch<React.SetStateAction<string>>;
  setInput?: React.Dispatch<React.SetStateAction<string>>;
  setOperator?: React.Dispatch<React.SetStateAction<string>>;
  setResult?: React.Dispatch<React.SetStateAction<string>>;
  isOp?: boolean;
  isEqu?: boolean;
  num1?: string;
  num2?: string;
  op?: string;
  result?: string;
};

export { BtnProp };
