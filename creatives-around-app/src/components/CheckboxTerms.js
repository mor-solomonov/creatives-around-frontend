import React from 'react';
import '../styles/App.css';
import { Link } from "react-router-dom";
import TermsContainer from "./TermsContainer";

export default function CheckboxTerms() {
    return (

        <form>
            <input type="checkbox" name="agree to terms" />
            <label className="Agree">&nbsp; &nbsp;I agree to the</label>
            <Link to="/termsandconditions">&nbsp;terms and conditions</Link>
        </form>



    )
}
