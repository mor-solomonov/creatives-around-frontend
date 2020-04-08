import React, { Fragment } from 'react';
import '../../styles/App.css'
import { Link } from "react-router-dom";

const GoBackButton = () => {
    return (
        <Fragment>
            <Link to="/">
                <button className="GoBackButton btn btn-light mb-4">Go Back</button>
            </Link>
        </Fragment>
    )
}

export default GoBackButton;