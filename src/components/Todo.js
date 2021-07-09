import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  // useState() возвращает массив с двумя элементами
  // 0 - текущее состояние
  // 1 - функция, позволяющая сменить это состояние
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{ props.text }</h2>
      <div className="actions">
        <button className="btn" onClick={ deleteHandler }>Delete</button>  
      </div>

      {modalIsOpen ? <Modal onModalCancel={closeModal} onModalConfirm={ closeModal }/> : null }
      { modalIsOpen ? <Backdrop onBackdropClick={ closeModal }/> : null }

    </div>
  );
}

export default Todo;