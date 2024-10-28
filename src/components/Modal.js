import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ onClose, children, actionBar }) {
    useEffect(() => {
        document.body.classList.add("overflow-hidden");

        // using cleanup, we'll remove the above-clas
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    return ReactDOM.createPortal(
        <div>
            <div
                onClick={onClose}
                className="fixed inset-0 bg-gray-300 opacity-80"
            ></div>
            <div className="fixed inset-40 p-10 bg-white ">
                <div className="flex flex-col justify-between h-full">
                    {children}
                    <div className="flex justify-end">{actionBar}</div>
                </div>
            </div>
        </div>,
        document.querySelector(".modal-container")
    );

    // Putting below <div> inside a separate <div> in index.html using above code
    // return (
    //     <div>
    //         <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
    //         <div className="absolute inset-40 p-10 bg-white ">I'm a Modal</div>
    //     </div>
    // );
}

export default Modal;
