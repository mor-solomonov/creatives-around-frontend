import React, { Fragment } from 'react';
import '../styles/App.css';

const Email = () => {
    return (
        <Fragment>
            <form>
                <input
                    className="Email form-control mb-4"
                    placeholder="Email:"
                    type="text"
                    id="todo-item"
                ></input>
            </form>
        </Fragment>
    )
}

export default Email;