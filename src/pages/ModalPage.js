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

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>
                I Accept
            </Button>
        </div>
    );
    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Here is an important argreement for you to accept.</p>
        </Modal>
    );

    return (
        // <div className="relative"> it won't break the MODAL now!!
        <div>
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {showModal && modal}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
                ipsum id lorem placerat fringilla. Nullam iaculis non erat in
                varius. Nullam in elementum diam. In hac habitasse platea
                dictumst. Phasellus a arcu nec nisl lobortis vehicula at sit
                amet orci. Sed egestas aliquet porttitor. Duis tristique, est et
                sodales convallis, lorem purus convallis diam, quis mollis
                mauris lectus in nulla. Fusce ut tempor leo. Vivamus vel
                fringilla dui. Integer congue dignissim lectus id tincidunt.
                Donec vel ullamcorper lorem, non tempor lectus. Donec porta diam
                ut urna consectetur molestie. Suspendisse gravida non felis in
                lacinia. Aliquam auctor pretium nisl, sed porttitor ligula
                mollis vitae. Donec lacinia quam id orci consectetur blandit
                vitae ut eros. Integer ultricies mauris volutpat tempus posuere.
                Sed vel aliquet dui. Praesent laoreet quam vitae molestie
                vehicula. Mauris mollis efficitur lorem in ultrices. Mauris vel
                purus tortor. Duis felis nisi, tempus sit amet posuere sagittis,
                semper eget ex. Nullam molestie neque leo, id aliquet elit
                mollis eu. In accumsan massa a diam rhoncus, vitae rutrum elit
                facilisis. Donec iaculis varius magna, et rhoncus velit pretium
                faucibus. Phasellus pellentesque nibh velit, in finibus massa
                sollicitudin vitae. Pellentesque auctor lacinia ex a lobortis.
                Praesent non ante convallis, commodo erat hendrerit, eleifend
                massa. Pellentesque porttitor posuere velit eu volutpat. Ut sed
                mi diam. Donec et imperdiet metus. Morbi ut erat sed neque
                volutpat egestas. In non sem maximus, suscipit turpis nec,
                bibendum lectus. Ut ac vehicula nisl. In blandit aliquet
                fermentum. Phasellus interdum leo nec velit ultrices tempor. Nam
                ultricies a nibh sed iaculis. Nullam ac justo sed sem tristique
                tristique nec vitae orci. Integer eleifend laoreet imperdiet.
                Fusce a tristique libero. Sed venenatis, odio a fermentum
                mattis, metus justo cursus arcu, ut ultrices sapien purus vel
                enim. Sed condimentum sapien rutrum erat elementum, sit amet
                imperdiet lorem sodales. Quisque imperdiet vitae erat vitae
                commodo. Sed ut nulla vel sapien posuere bibendum. Donec
                vehicula lacus nec urna blandit malesuada. Quisque sit amet elit
                tincidunt, facilisis mauris vel, ullamcorper arcu. Pellentesque
                at sagittis sem. Proin felis neque, sodales ut lorem ut,
                pharetra finibus orci. Praesent vehicula pellentesque justo non
                commodo. Sed ut est ex. Sed massa nibh, accumsan ac odio ac,
                ornare luctus diam. Cras enim elit, mollis ut pellentesque sed,
                varius a lorem. Morbi felis purus, pulvinar in massa eget,
                cursus elementum nisi. Donec placerat ex sem, at rhoncus nisi
                dictum non. Morbi vitae consequat massa, non vehicula est.
                Curabitur imperdiet, purus id laoreet commodo, ipsum nunc
                ullamcorper odio, non cursus sem ipsum vitae mauris. Maecenas at
                volutpat lectus, eu placerat augue. Duis finibus metus sed nisl
                tempus condimentum. Suspendisse potenti. Fusce dapibus quam id
                tortor suscipit, sit amet aliquam elit congue.
            </p>
        </div>
    );
}
export default ModalPage;
