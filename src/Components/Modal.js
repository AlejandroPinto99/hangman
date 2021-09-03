import { useEffect , useRef } from 'react'
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById("modal") // We get the element created in index.html

const Modal = ({ children }) => { //The child is received, this is the div with all the elements we want to show
    const elRef = useRef(null); 
    if(!elRef.current) {
        elRef.current = document.createElement('div'); //If there is not modal, we create it
    }

    useEffect(() => {
      modalRoot.appendChild(elRef.current); //The childe is appended
      return () => modalRoot.removeChild(elRef.current) //One is done, is removed from the dom
    }, []);

    return createPortal(<div>{children}</div>, elRef.current); //The portal gets created
};

export default Modal;