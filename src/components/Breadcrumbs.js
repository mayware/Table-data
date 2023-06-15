import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Breadcrumbds = ({ selectedId }) => {
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
                    Home
                </NavLink>
                {bookId && <NavLink to={`/details/${bookId}`} className="breadcrumb-link">
                    Details
                </NavLink>}
                {nextId && <NavLink to={`/selected/${nextId}`} className="breadcrumb-link">
                    Selected
                </NavLink>}
            </div>
        </div>
    );
}

export default Breadcrumbds;