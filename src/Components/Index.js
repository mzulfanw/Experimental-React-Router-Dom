import React from "react"
import { Link, useNavigate } from "react-router-dom"

const Home = () => {
    return (
        <React.Fragment>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/list'>List</Link>
                </li>
                <li>
                    <Link to='*'>Error</Link>
                </li>
            </ul>
        </React.Fragment>
    )
}


const List = () => {
    const navigate = useNavigate()
    return (
        <div>
            Ini List
            <button onClick={() => navigate(1)}>Next</button>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}


const Error = () => {
    const navigate = useNavigate()
    return (
        <div>
            Whoopesie daisy, we cant found it
            <button onClick={() => navigate('/')}>Back</button>
        </div>
    )
}

export { Home, List, Error }