
const TableData = ({ data }) => {
    return (
        <>
            {data.map((item) => (
                <div className="item-row" key={item.id}>
                    <div className="item-id">{item.id}</div>
                    <div className="item-author">{item.name}</div>
                    <div className="item-title">{item.username}</div>
                    <div className="item-kind">{item.email}</div>
                </div>
            ))}
        </>
    );
}

export default TableData;