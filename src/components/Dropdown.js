import { useState } from "react";

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        // FUNCTIONAL UPDATE
        setIsOpen((currentIsOpen) => !currentIsOpen);

        // SIMPLE UPDATE
        // setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        // Do 2 things
        // 1. Close Dropdown
        setIsOpen(false);
        // 2. What option did the user clicked on?
        onChange(option);
    };

    const renderedOptions = options.map((option) => {
        return (
            <div onClick={() => handleOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        );
    });

    // let content = "Select...";
    // if (selection) {
    //     content = selection.label;
    // }

    return (
        <div>
            <div onClick={handleClick}>{value?.label || "Select..."}</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    );
}

export default Dropdown;
