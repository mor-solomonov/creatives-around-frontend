import React from 'react';
import '../styles/App.css';
import { Link } from "react-router-dom";

export default function GoBackUpButtonTerms() {
    return (
        <div>
            <Link to="/signup">
                <button className="GoBackUpButtonTerms btn btn-light mb-4">Go Back</button>
            </Link>
        </div>
    )
}
