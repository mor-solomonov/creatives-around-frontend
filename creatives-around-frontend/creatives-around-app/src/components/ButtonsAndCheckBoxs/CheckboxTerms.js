import React, { useState, Fragment } from 'react';
import '../styles/App.css';
import { Link } from "react-router-dom";
// import TermsContainer from "./TermsContainer";

const CheckboxTerms = () => {

    const [checkbox, setCheckbox] = useState(false)

    const handleCheckboxClick = (e) => {
        e.preventDefault()

        setCheckbox(e.target.checked)

    }

    return (
        <Fragment>
            <form>
                <input id="checkbox" type="checkbox" name="agreeToTerms" defaultChecked={checkbox}
                    onClick=
                    {(e) => handleCheckboxClick(e)} />
                <label className="Agree">&nbsp; &nbsp;I agree to the</label>
                <Link to="/termsandconditions">&nbsp;terms and conditions</Link>
            </form>


        </Fragment>
    )
}

export default CheckboxTerms;