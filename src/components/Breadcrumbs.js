import { NavLink } from "react-router-dom";

const Breadcrumbds = () => {
    return (
        <div className="breadcrumb">
            <NavLink to="/" className="breadcrumb-link">
                Home
            </NavLink>
        </div>
    );
}

export default Breadcrumbds;