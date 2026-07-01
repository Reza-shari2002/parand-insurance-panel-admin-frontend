import { createContext, useState } from "react";

export const adminContext = createContext();

function adminProvider({ children }) {

  const [forms, setForms] = useState([]);
  const [form, setForm] = useState(null);

  return (
    <adminContext.Provider
      value={{
        forms,
        setForms,
        form,
        setForm,
      }}
    >
      {children}
    </adminContext.Provider>
  );
}

export default adminProvider;
