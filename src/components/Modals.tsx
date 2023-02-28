import React from 'react'
import { useModal } from '../context/ModalContext'
import Modal from './Modal'

const Modals = () => {

  const { modalData } = useModal()

  return (
    <>
      {modalData.map((data) => (
        <Modal key={data.id} data={data}/>
      ))}
    </>
  )
}

export default Modals