import { createContext, useContext, useState } from "react";
import { UserProviderProps, FormContext as form, FormState } from "../types";

const initialValues = {
  title: "",
  content: "",
  ref: "",
};

const FormContext = createContext({} as form);

export function useForm() {
  return useContext(FormContext);
}

export function CreateProvider({ children }: UserProviderProps) {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<FormState>(initialValues)

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target as {value:string, name: 'ref'| 'title' | 'content'}
    const updateValues = {...formValues}
    updateValues[name] = value
    setFormValues(updateValues)
  }

  return (
    <FormContext.Provider value={{ openForm, setOpenForm, formValues, handleInputChange}}>
      {children}
    </FormContext.Provider>
  );
}
