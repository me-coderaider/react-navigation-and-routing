import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(0);

    // variation 2::
    const handleClick = (nextIndex) => {
        setExpandedIndex(nextIndex);
    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const icon = (
            <span className="text-2xl">
                {isExpanded ? <GoChevronDown /> : <GoChevronRight />}
            </span>
        );

        // const content = isExpanded && <div>{item.content}</div>;
        // this will as per rule of &&, will give 'first-falsy' or 'last-truthy' value

        // variation 1:: a little variation for the inline event-handler function
        // const handleClick = () => {
        //     setExpandedIndex(index);
        // };

        return (
            <div key={item.id}>
                {/* <div
                    onClick={() => {
                        setExpandedIndex(index);
                    }}
                >
                    {item.label}
                </div> */}

                {/* variation 1:: <div onClick={handleClick}>{item.label}</div> */}
                {/* variation 2:: */}
                <div
                    className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
                    onClick={() => handleClick(index)}
                >
                    {item.label}
                    {icon}
                </div>
                {isExpanded && (
                    <div className="border-b p-5">{item.content}</div>
                )}
            </div>
        );
    });

    return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
