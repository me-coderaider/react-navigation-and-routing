import ReactDOM from "react-dom";

function Modal() {
    return ReactDOM.createPortal(
        <div>
            <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
            <div className="absolute inset-40 p-10 bg-white ">I'm a Modal</div>
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
