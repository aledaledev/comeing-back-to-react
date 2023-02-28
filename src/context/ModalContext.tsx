import { createContext, useContext, useState } from "react";
import { UserProviderProps, ModalContext as modal, ModalType, FormState } from "../types";
import {v4 as uuid} from 'uuid'

const initialData = [
  {
    id: "1",
    open: false,
    ref: "modal 1",
    title: "spoiler",
    content:
      "seguimos en la fiesta y no compro pipas por seguridad, esta seguro de esto",
  },
  {
    id: "2",
    open: false,
    ref: "modal 2",
    title: "spoiler",
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

  const openModal = (id: string) => {
    const modal = modalData.find((data) => data.id === id) as ModalType;
    const modalIndex = modalData.findIndex((data) => data.id === id);
    const updateModalData = [...modalData];
    updateModalData[modalIndex] = { ...modal, open: !modal.open };
    setModalData(updateModalData);
  };

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

  return (
    <ModalContext.Provider value={{ modalData, setModalData, openModal, createModal}}>
      {children}
    </ModalContext.Provider>
  );
}
