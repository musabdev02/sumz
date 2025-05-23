import { createContext, useContext, useState } from "react";

type ResultContextType = {
  result: string;
  setResult: (value: string) => void;
};

const ResultContext = createContext<ResultContextType | undefined>(undefined);

export const ResultProvider = ({ children }: { children: React.ReactNode }) => {
  const [result, setResult] = useState<string>("");

  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResult = (): ResultContextType => {
  const context = useContext(ResultContext);
  if (!context) {
    throw new Error("useResult must be used within ResultContextProvider");
  }
  return context;
};