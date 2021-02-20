import React from 'react'
import './styles.css'

const Navbar = () => {
    return (
        <>
        <div className="d-flex justify-content-around  p-2 border-bottom navbar px-5">
            <a href='#' className="flex-grow-1 ml-5 bd-highlight title">X-Meme</a>
            <div className="action-buttons">
            <button type="button" className="mt-2 btn btn-danger" data-toggle="tooltip" data-placement="left" title="Coming Soon ..">Login</button>
            <button type="button" className="mt-2 btn btn-outline-danger" data-toggle="tooltip" data-placement="left" title="Coming Soon ..">Sign Up</button>
            <a href='https://akshaysharma.co.in' target="_blank" className="guidelines-logo"> <i className="fa fa-question-circle-o" aria-hidden="true"></i></a> 
            </div>
        </div>
        </>
    )
}

export default Navbar