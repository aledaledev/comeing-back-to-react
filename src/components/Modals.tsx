import React from 'react'
import { useModal } from '../context/ModalContext'
import Modal from './Modal'

const Modals = () => {

  const { modalData, openModal } = useModal()

  return (
    <>
      {modalData.map((data) => (
        <Modal key={data.id} data={data} openModal={openModal}/>
      ))}
    </>
  )
}

export default Modals