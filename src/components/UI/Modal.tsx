import React from "react";
import ReactDOM from "react-dom";

type Props = {
    children: React.ReactNode,
    onClose: () => void,
};

const Modal = ({ children, onClose }: Props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className=' fixed top-0 left-0 w-full h-full z-10 bg-black/75' onClick={onClose}></div>,
        document.getElementById('backdrop-root') as HTMLElement
      )}
      {ReactDOM.createPortal(
        <div className=' fixed top-[30vh] left-[10%] text-white py-1 z-20 w-[80%] overflow-hidden text-center bg-neutral-500'>{children}</div>,
        document.getElementById('modal-root') as HTMLElement
      )}
    </>
  );
};

export default Modal;
