
const TableData = ({ data }) => {
    return (
        <div className="table-body-col">
            {data.map((item) => (
                <button className="item-row" key={item.id}>
                    <div className="item-id row-cell">{item.id}</div>
                    <div className="item-author row-cell">{item.name}</div>
                    <div className="item-title row-cell">{item.username}</div>
                    <div className="item-kind row-cell">{item.email}</div>
                </button>
            ))}
        </div>
    );
}

export default TableData;