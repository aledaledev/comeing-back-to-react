import { ReactNode } from "react"

export type UserProviderProps = {
    children: ReactNode
}

export type ModalContext = {
    modalData: ModalType[],
    setModalData: (a:ModalType[]) => void,
    openModal: (id:string) => void,
    createModal: (formValues:FormState) => void
}

export type ModalType = {
    id:string,
    open:boolean,
    ref: string,
    title: string,
    content: string
}

export type ModalState = {
    data: ModalType,
    openModal: (id:string) => void
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
    hideMenu:(id:string, fun:(id:string) => void) => void
}

export type FormContext = {
    openForm: boolean,
    setOpenForm: (a:boolean) => void,
    formValues: FormState,
    handleInputChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export type FormState = {
    title: string,
    content: string,
    ref: string
}