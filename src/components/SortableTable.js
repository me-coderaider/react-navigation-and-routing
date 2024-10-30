import Table from "./Table";
function SortableTable(props) {
    const { config } = props;

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return {
            ...column,
            header: () => <th>{column.label} IS SORTABLE</th>,
        };
    });

    // keeping ORDERING in mind, LAST UPDATED 'config' will override the 'config' array present in {...props}
    return <Table {...props} config={updatedConfig} />;
}

export default SortableTable;
