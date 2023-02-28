import { useModal } from '../context/ModalContext'
import '../assets/styles/index.css'
import { useMenu } from '../context/MenuContext'

const BtnOpenModals = () => {

  const { modalData, openModal } = useModal()
  const { hideMenu } = useMenu()

  return (
    <div className='btn-wrapper'>
      {modalData.map(({ref, id}) => (
        <button className='btn-switch' key={id} onClick={() => hideMenu(id, openModal)}>{ref}</button>
      ))}
    </div>
  )
}

export default BtnOpenModals