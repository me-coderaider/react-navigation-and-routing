import { useState } from "react";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(0);

    // variation 2::
    const handleClick = (nextIndex) => {
        setExpandedIndex(nextIndex);
    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

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
                <div onClick={() => handleClick(index)}>{item.label}</div>
                {isExpanded && <div>{item.content}</div>}
            </div>
        );
    });

    return <div>{renderedItems}</div>;
}

export default Accordion;
