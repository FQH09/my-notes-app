import React from "react";
import PropTypes from 'prop-types';
import { FiLogOut} from 'react-icons/fi'; 

function Logout({ logout }) {
    return (
        <div className="btn-logout">
            <button onClick={logout}><FiLogOut /></button>
        </div>
    )
}

Logout.propTypes = {
    logout: PropTypes.func.isRequired,
};

export default Logout;