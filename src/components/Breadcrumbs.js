import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Breadcrumbds = ({ selectedId }) => {
    const [bookedId, setBookedId] = useState('');
    const [newId, setNewId] = useState('');

    useEffect(() => {
        setBookedId(selectedId)
    }, [selectedId])

    useEffect(() => {
        if (newId !== bookedId) {
            setNewId(bookedId);
        }

    }, [bookedId])

    return (
        <div className="breadcrumb">
            <div className="breadcrumbs-nav">
                <NavLink to="/" className="breadcrumb-link">
                    Home
                </NavLink>
                {bookedId && <NavLink to={`/details/${bookedId}`} className="breadcrumb-link">
                    Details
                </NavLink>}
                {newId && <NavLink to={`/details/${bookedId}`} className="breadcrumb-link">
                    Selected
                </NavLink>}
            </div>
        </div>
    );
}

export default Breadcrumbds;