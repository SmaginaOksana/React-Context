import { children, createContext, useEffect, useState } from "react";

export const Context = createContext();

export function ContextComponent({ children }) {
  const [valueContext, setValueContext] = useState("");
  const [update, setUpdate] = useState(false);

  const value = { valueContext, setValueContext, setUpdate };

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("http://localhost:3001/users");
        const data = await response.json();
        setValueContext(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [update]);

  if (!valueContext) {
    return;
  }

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
