import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Breadcrumbds = ({ selectedId, selectedRow, selectedBook }) => {
    const [bookId, setBookId] = useState('');
    const [nextId, setNextId] = useState('');

    useEffect(() => {
        setBookId(selectedId)
    }, [selectedId])

    useEffect(() => {
        if (bookId && bookId !== selectedId) {
            setNextId(selectedId);
        }
    }, [bookId, selectedId]);


    return (
        <div className="breadcrumb">
            <div className="breadcrumbs-nav">
                <NavLink to="/" className="breadcrumb-link">
                    <span className="breadcrumb-link-text">Home</span>
                    <i class="fa-solid fa-chevron-right"></i>
                </NavLink>
                {bookId && <NavLink to={`/details/${bookId}`} className="breadcrumb-link">
                    <span className="breadcrumb-link-text">{selectedRow.volumeInfo.authors[0]}</span>
                    <i class="fa-solid fa-chevron-right"></i>
                </NavLink>}
                {nextId && <NavLink to={`/selected/${nextId}`} className="breadcrumb-link">
                    <span className="breadcrumb-link-text">{selectedBook.volumeInfo.title}</span>
                    <i class="fa-solid fa-chevron-right"></i>
                </NavLink>}
            </div>
        </div>
    );
}

export default Breadcrumbds;