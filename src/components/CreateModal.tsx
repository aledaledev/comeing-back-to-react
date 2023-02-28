import React from 'react'
import { useForm } from '../context/CreateFormContext'
import { useModal } from '../context/ModalContext'

const CreateModal = () => {

  const { openForm, setOpenForm, formValues, handleInputChange } = useForm()
  const {createModal} = useModal()

  const closeModal = (e:any) => {
    if(e.target === e.currentTarget){
      setOpenForm(false)   
    }
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createModal(formValues)
    setOpenForm(false)
  }

  return (
    <div className={`create-modal-wrapper ${openForm?'':'hidden'}`} onClick={closeModal}>
      <form action="" className='create-form' onSubmit={handleSubmit}>
        <h3>create your modal</h3>
        <label htmlFor="ref">ref name:
          <input type="text"id='ref' name='ref' value={formValues.ref} onChange={handleInputChange}/>
        </label>
        <label htmlFor="title">title:
          <input type="text" id='title' name='title' value={formValues.title} onChange={handleInputChange}/>
        </label>
        <label htmlFor="content">content:
          <input type="text" id='content' name='content' value={formValues.content} onChange={handleInputChange}/>
        </label>
        <button type='submit'>create!</button>
      </form>
    </div>
  )
}

export default CreateModal