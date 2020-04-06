import React, { Fragment } from 'react';
import '../styles/App.css';
import { Link } from "react-router-dom";

const GoBackUpButtonTerms = () => {
    return (
        <Fragment>
            <Link to="/signup">
                <button className="GoBackUpButtonTerms btn btn-light mb-4">Go Back</button>
            </Link>
        </Fragment>
    )
}

export default GoBackUpButtonTerms;