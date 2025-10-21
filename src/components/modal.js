'use client'
import { useRef } from 'react'
// https://medium.com/@bomber.marek/how-to-use-dialog-in-react-easy-modals-tooltips-81e44d570c8a



const Modal = ({ children, openElement }) => {
    const dialogRef = useRef(null);

    const openDialog = () => dialogRef.current?.showModal()

    const closeDialog = () => dialogRef.current?.close()

    const handleClickOutside = (e) => {
        if (dialogRef.current) {
            const rect = dialogRef.current.getBoundingClientRect();
            const isInDialog = (rect.top <= e.clientY
                && e.clientY <= rect.top + rect.height
                && rect.left <= e.clientX
                && e.clientX <= rect.left + rect.width);
            if (!isInDialog) {
                dialogRef.current.close();
            }
        }
    }


    return (
        <>
            <div onClick={openDialog}>
                {openElement}
            </div>


            <dialog
                ref={dialogRef}
                onMouseDown={handleClickOutside}
                className="m-auto backdrop:bg-black/50 backdrop:backdrop-blur-none w-[90%] lg:w-[60%] py-12 px-2 md:px-8 rounded-md outline-none">

                {children}

                <div onClick={closeDialog} className="absolute top-4 right-4 cursor-pointer" >
                    ❌
                </div>
            </dialog>


        </>
    );
};

export default Modal;