import React from 'react'
import { useForm } from '../context/FormContext'
import { useModal } from '../context/ModalContext'

const FormModal = () => {

  const { openForm, setOpenForm, formValues, handleInputChange, editId, setEditId, setFormValues } = useForm()
  const { createModal, updateModal } = useModal()

  const closeModal = (e:any) => {
    if(e.target === e.currentTarget){
      setOpenForm(false)
      setTimeout(() => {
        setEditId('')
        setFormValues({
          title:'',
          content:'',
          ref:''
        })   
      }, 500)
    }
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(editId === ''){
      createModal(formValues)
    } else {
      updateModal(formValues, editId)
    }
    setOpenForm(false)
    setTimeout(() => {
      setEditId('')
      setFormValues({
        title:'',
        content:'',
        ref:''
      })   
    }, 500)
  }

  return (
    <div className={`create-modal-wrapper ${openForm?'':'hidden'}`} onClick={closeModal}>
      <form className='create-form' onSubmit={handleSubmit}>
        <h3>{editId?'update modal':'create a modal'}</h3>
        <label htmlFor="ref">ref name:
          <input type="text"id='ref' name='ref' value={formValues.ref} onChange={handleInputChange}/>
        </label>
        <label htmlFor="title">title:
          <input type="text" id='title' name='title' value={formValues.title} onChange={handleInputChange}/>
        </label>
        <label htmlFor="content">content:
          <textarea id='content' name='content' value={formValues.content} onChange={handleInputChange}/>
        </label>
        {editId?
          <button type='submit'>update!</button>:
          <button type='submit'>create!</button>
        }
      </form>
    </div>
  )
}

export default FormModal