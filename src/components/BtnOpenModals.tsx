import { useModal } from "../context/ModalContext";
import "../assets/styles/index.css";
import { useMenu } from "../context/MenuContext";

const BtnOpenModals = () => {
  const { modalData, setOpenModal } = useModal();
  const { setMenu } = useMenu();

  const hideMenu = (id:string) => {
    setOpenModal(id);
    setMenu(false);
  };

  return (
    <div className="btn-wrapper">
      {modalData.map(({ ref, id }) => (
        <button
          className="btn-switch"
          key={id}
          onClick={() => hideMenu(id)}
        >
          {ref}
        </button>
      ))}
    </div>
  );
};

export default BtnOpenModals;
