import { ModalState, ModalType } from "../types";
import {MdDeleteOutline} from 'react-icons/md'
import {AiOutlineEdit} from 'react-icons/ai'

const Modal = ({data:{title,content,id,open}, openModal}: ModalState) => {

  const closeModal = (e:any) => {
    if(e.target === e.currentTarget){
      openModal(id)   
    }
  }

  return (
    <div className={`modal-wrapper ${open?'':'hidden'}`} onClick={closeModal}>
      <div className="config-modal">
        <button><MdDeleteOutline size={21}/></button>
        <button><AiOutlineEdit size={21}/></button>
      </div>
      <div className="modal">
        <h4>{title}</h4>
        <p>{content}</p>
        <div className="modal-btn-options">
          <button onClick={() => openModal(id)}>accept</button>
          <button onClick={() => openModal(id)}>cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
