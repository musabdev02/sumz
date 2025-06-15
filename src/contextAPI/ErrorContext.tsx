import { createContext, useContext, useState } from "react";

type ErrorContextType = {
  uError: string;
  setUError: (value: string) => void;
};

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const ErrorProvider = ({ children }: { children: React.ReactNode }) => {
  const [uError, setUError] = useState<string>("");

  return (
    <ErrorContext.Provider value={{ uError, setUError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = (): ErrorContextType => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error("useError must be used within ErrorContextProvider");
  }
  return context;
};