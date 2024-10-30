import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import Table from "./Table";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
    const { config, data } = props;
    const { sortOrder, sortBy, sortedData, setSortLabel } = useSort(
        config,
        data
    );

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return {
            ...column,
            header: () => (
                <th
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => setSortLabel(column.label)}
                >
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            ),
        };
    });

    // keeping ORDERING in mind, LAST UPDATED 'config' will override the 'config' array present in {...props}
    return (
        <div>
            {/* {sortOrder} - {sortBy} */}
            <Table {...props} data={sortedData} config={updatedConfig} />
        </div>
    );
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return (
            <div>
                <GoTriangleUp />
                <GoTriangleDown />
            </div>
        );
    }
    if (sortOrder === null) {
        return (
            <div>
                <GoTriangleUp />
                <GoTriangleDown />
            </div>
        );
    } else if (sortOrder === "asc") {
        return (
            <div>
                <GoTriangleUp />
            </div>
        );
    } else if (sortOrder === "desc") {
        return (
            <div>
                <GoTriangleDown />
            </div>
        );
    }
}

export default SortableTable;
