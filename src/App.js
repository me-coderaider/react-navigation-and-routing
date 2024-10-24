import { useState } from "react";

import Dropdown from "./components/Dropdown";
function App() {
    // default 'null' as this is what we came up with during 'State Design Process'
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    };

    const options = [
        {
            label: "Red",
            value: "red",
        },
        {
            label: "Green",
            value: "green",
        },
        {
            label: "Blue",
            value: "blue",
        },
    ];

    return (
        <Dropdown options={options} value={selection} onChange={handleSelect} />
    );
}

export default App;
