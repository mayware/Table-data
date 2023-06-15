import { Link } from "react-router-dom";
const TableData = ({ data, selectRow }) => {

    return (
        <div className="table-body-col">
            {data.items.map((item) => (
                <Link to={`/details/${item.id}`} className="item-row" key={item.id} onClick={() => { selectRow(item) }}>
                    <div className="item-id row-cell">{item.id}</div>
                    <div className="item-author row-cell">{item.volumeInfo.authors ?
                        (item.volumeInfo.authors) :
                        (<span className="unavailable-msg">Author is unavailable</span>)}</div>
                    <div className="item-title row-cell">{item.volumeInfo.title ?
                        (item.volumeInfo.title) :
                        (<span className="unavailable-msg">Book's title is unavailable</span>)}</div>
                    <div className="item-kind row-cell">{item.volumeInfo.categories ?
                        (item.volumeInfo.categories) :
                        (<span className="unavailable-msg">Book's kind is unavailable</span>)}</div>
                </Link>
            ))}
        </div>
    );
}

export default TableData;