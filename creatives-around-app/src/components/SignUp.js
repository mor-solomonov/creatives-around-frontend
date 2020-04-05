import React from 'react';
import '../styles/App.css';
import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <div>
            <p className="SignUp">Not a member yet? &nbsp;
               <Link to="/signup">
                    <button>Sign up</button>
                </Link></p>

        </div>
    )
}

