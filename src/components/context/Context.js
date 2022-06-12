import { createContext, useState } from "react";

export const FormInputContext = createContext({});

export const FormInputContextProvider = ({ children }) => {
  const { Provider } = FormInputContext;
  const [mileage, setMileage] = useState();
  const [gallons, setGallons] = useState(0);
  const [mpg, setMPG] = useState();

  const value = {
    mileage,
    setMileage,
    gallons,
    setGallons,
    mpg,
    setMPG,
  };
  return <Provider value={value}>{children}</Provider>;
};
