import react, { useState, useContext, createContext, useEffect } from "react";

export const context = createContext();

function Formcontext({ children }) {
  const [data, set_data] = useState({});
  const [current_page, set_current_page] = useState(0);


  return (
    <>
      <context.Provider
        value={{
          data,
          
          set_data,
          current_page,
          set_current_page,
          set_captcha_token,
          captchaToken,
        }}
      >
        {children}
      </context.Provider>
    </>
  );
}

export default Formcontext;
