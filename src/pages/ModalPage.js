import { useState } from "react";

import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        // <div className="relative"> it won't break the MODAL now!!
        <div>
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {showModal && <Modal onClose={handleClose} />}
        </div>
    );
}
export default ModalPage;
