import React from 'react'
import '../styles/App.css';

export default function Password() {
    return (
        <div>
            <form>
                <input
                    className="Password form-control mb-4"
                    placeholder="Password:"
                    type="text"
                    id="todo-item"
                ></input>
            </form>
        </div>
    )
}
