import { createContext, useContext, useState } from "react";
import { UserProviderProps, ModalContext as modal, ModalType, FormState } from "../types";
import {v4 as uuid} from 'uuid'
import { useForm } from "./FormContext";

const initialData = [
  {
    id: "1",
    ref: "modal 1",
    title: "spoiler 1",
    content:
      "seguimos en la fiesta y no compro pipas por seguridad, esta seguro de esto",
  },
  {
    id: "2",
    ref: "modal 2",
    title: "spoiler 2",
    content:
      "seguimos en la fiesta y no compro pipas por seguridad, esta seguro de esto",
  },
];

const ModalContext = createContext({} as modal);

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }: UserProviderProps) {

  const [modalData, setModalData] = useState<Array<ModalType>>(initialData);
  const [openModal, setOpenModal] = useState<string>('')

  /*const openModal = (id: string) => {
    const modal = modalData.find((data) => data.id === id) as ModalType;
    const modalIndex = modalData.findIndex((data) => data.id === id);
    const updateModalData = [...modalData];
    updateModalData[modalIndex] = { ...modal, open: !modal.open };
    setModalData(updateModalData);
  };*/

  const createModal = ({content,ref,title}:FormState) => {
    if (content === '' || ref === '' || title === '') return 
    const newModal = {
        title,
        content,
        ref,
        open:false,
        id:uuid()
    }
    setModalData([...modalData, newModal])
  }

  const updateModal = (formValues:FormState, id:string) => {
    const {content,ref,title} = formValues 
    if (content === '' || ref === '' || title === '') return 
    const modal = {...formValues, id}
    const index = modalData.findIndex((data) => data.id === id);
    const updateModalData = [...modalData];
    updateModalData[index] = modal
    setModalData(updateModalData)
  }

  return (
    <ModalContext.Provider value={{ modalData, setModalData, createModal, openModal ,setOpenModal, updateModal }}>
      {children}
    </ModalContext.Provider>
  );
}
