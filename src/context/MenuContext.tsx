import { createContext, useContext, useState } from "react";
import { MenuContext as menuTypes, UserProviderProps, Options } from "../types";

const MenuContext = createContext({} as menuTypes);

export function useMenu() {
  return useContext(MenuContext);
}

const defaultOptions = {
  rgb: true,
  dark: false,
  safe: true,
};

export function MenuProvider({ children }: UserProviderProps) {
  const [menu, setMenu] = useState<boolean>(false);

  const [options, setOptions] = useState<Options>(defaultOptions);

  const changeOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target as { name: "rgb" | "safe" | "dark" };
    setOptions({ ...options, [name]: !options[name] });
  };

  return (
    <MenuContext.Provider
      value={{ menu, setMenu, options, setOptions, changeOptions }}
    >
      {children}
    </MenuContext.Provider>
  );
}
