import React from 'react';
import '../styles/App.css';
import { Link } from "react-router-dom";

export default function GoBackUpButton() {
    return (
        <div>
            <Link to="/">
                <button className="GoBackUpButton btn btn-light mb-4">Go Back</button>
            </Link>
        </div>
    )
}
