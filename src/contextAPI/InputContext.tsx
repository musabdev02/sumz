import { createContext, useContext, useState } from "react";

type InputContextType = {
  input: string;
  setInput: (value: string) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
};

const InputContext = createContext<InputContextType | undefined>(undefined);

export const InputProvider = ({ children }: { children: React.ReactNode }) => {
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <InputContext.Provider value={{ input, setInput, loading, setLoading }}>
      {children}
    </InputContext.Provider>
  );
};

export const useInput = (): InputContextType => {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error("useResult must be used within InputContextProvider");
  }
  return context;
};