import { ChangeEvent, ReactNode } from "react"

export type UserProviderProps = {
    children: ReactNode
}

export type ModalContext = {
    modalData: ModalType[],
    setModalData: (a:ModalType[]) => void,
    openModal: string,
    setOpenModal: (id:string) => void
    createModal: (formValues:FormState) => void,
    updateModal: (formValues:FormState, id:string) => void,
}

export type ModalType = {
    id:string,
    ref: string,
    title: string,
    content: string
}

export type ModalState = {
    data: ModalType
}

export type Options = {
    rgb: boolean,
    dark: boolean,
    safe: boolean,
}

export type MenuContext = {
    menu: boolean,
    setMenu: (a:boolean) => void,
    options: Options,
    setOptions: (a:Options) => void,
    changeOptions: (e:any) => void,
}

export type FormContext = {
    openForm: boolean,
    setOpenForm: (a:boolean) => void,
    formValues: FormState,
    handleInputChange: (e:React.ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void,
    editId: string,
    setEditId:(a:string) => void,
    setFormValues: (a:FormState) => void
}

export type FormState = {
    title: string,
    content: string,
    ref: string
}