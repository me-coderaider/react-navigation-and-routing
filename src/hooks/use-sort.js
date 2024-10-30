import { useState } from "react";
function useSort(config, data) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const setSortLabel = (label) => {
        if (sortBy && label !== sortBy) {
            setSortOrder("asc");
            setSortBy(label);
            return;
        }

        if (sortOrder === null) {
            setSortOrder("asc");
            setSortBy(label);
        } else if (sortOrder === "asc") {
            setSortOrder("desc");
            setSortBy(label);
        } else if (sortOrder === "desc") {
            setSortOrder(null);
            setSortBy(null);
        }
    };

    // 1. Only 'sort' data if sortOrder && sortBy are not null
    // 2. Make a copy of the 'data' prop i.e. don't directly change the 'data' prop array
    // 3. Find the correct 'sortValue' function and use it for sorting.
    let sortedData = data;
    if (sortOrder && sortBy) {
        const { sortValue } = config.find((column) => column.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === "asc" ? 1 : -1;

            if (typeof valueA === "string") {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            }
        }); // copying all data into a new array
    }

    return {
        sortOrder: sortOrder,
        sortBy: sortBy,
        sortedData,
        setSortLabel,
    };
}

export default useSort;
