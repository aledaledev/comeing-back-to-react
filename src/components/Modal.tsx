import { ModalState } from "../types";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { useForm } from "../context/FormContext";
import { useModal } from "../context/ModalContext";

const Modal = ({data: { title, content, id, ref }}: ModalState) => {
  const { setOpenForm, setEditId, setFormValues} = useForm();
  const { openModal, setOpenModal } = useModal()

  const sameId = id === openModal 

  const closeModal = (e: any) => {
    if (e.target === e.currentTarget) {
      setOpenModal('');   
    }
  };

  const openFormEdit = () => {
    setEditId(id);
    setOpenForm(true);
    setOpenModal('')
    setFormValues({
      title,
      content,
      ref
    })
  };

  return (
    <div
      className={`modal-wrapper ${sameId ? "" : "hidden"}`}
      onClick={closeModal}
    >
      <div className="config-modal">
        <button>
          <MdDeleteOutline size={21} />
        </button>
        <button onClick={openFormEdit}>
          <AiOutlineEdit size={21} />
        </button>
      </div>
      <div className="modal">
        <h4>{title}</h4>
        <p>{content}</p>
        <div className="modal-btn-options">
          <button onClick={() => setOpenModal('')}>accept</button>
          <button onClick={() => setOpenModal('')}>cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
