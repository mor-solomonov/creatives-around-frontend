import React from 'react';
import '../styles/App.css';

export default function Email() {
    return (
        <div>
            <form>
                <input
                    className="Email form-control mb-4"
                    placeholder="Email:"
                    type="text"
                    id="todo-item"
                ></input>
            </form>
        </div>
    )
}
