import React, { useState, useContext } from 'react'
import menu from "./style/menu.svg"
import cross from "./style/cross.svg"
import { AuthContext } from "../../helper/AuthContext";

function Hamburger() {

    const [open, setOpen] = useState(false);

    const { user } = useContext(AuthContext);

    return (
        <div className='Hamburger'>
            {
                open === false ?
                    <img src={menu} alt="menu" className='hamburger-logo' onClick={() => { setOpen(true) }} /> :
                    <div className='hamburger-menu'>
                        <img src={cross} alt="cross" className='hamburger-logo' onClick={() => { setOpen(false) }} />
                        <div className='hamburger-value'>
                            <p>Hi {user.FName}!</p>
                            <p>Home</p>
                            <p>Watch List</p>
                            <p>News</p>
                            <p>About</p>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Hamburger