import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            // BEST PRACTICE  -- if divEl has reference to no elements
            if (!divEl.current) {
                return;
            }

            // console.log(divEl.current);
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handler, true);

        // useEffect() CLEAN UP FUNCTION -- STOP WATCHING FOR CLICKS i.e. REMOVING EVENT-Listener
        return () => {
            document.removeEventListener("click", handler);
        };
    }, []);

    const handleClick = () => {
        // FUNCTIONAL UPDATE
        setIsOpen((currentIsOpen) => !currentIsOpen);

        // SIMPLE UPDATE
        // setIsOpen(!isOpen);
    };

    //window.timeTwo = performance.now();
    const handleOptionClick = (option) => {
        //  window.timeOne = performance.now();
        // Do 2 things
        // 1. Close Dropdown
        setIsOpen(false);
        // 2. What option did the user clicked on?
        onChange(option);
    };

    const renderedOptions = options.map((option) => {
        return (
            <div
                className="hover:bg-sky-100 rounded cursor-pointer p-1"
                onClick={() => handleOptionClick(option)}
                key={option.value}
            >
                {option.label}
            </div>
        );
    });

    // let content = "Select...";
    // if (selection) {
    //     content = selection.label;
    // }

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel
                className="flex justify-between items-center cursor-pointer"
                onClick={handleClick}
            >
                {value?.label || "Select..."}
                <GoChevronDown className="text-lg" />
            </Panel>
            {isOpen && (
                <Panel className="absolute top-full">{renderedOptions}</Panel>
            )}
        </div>
    );
}

export default Dropdown;
