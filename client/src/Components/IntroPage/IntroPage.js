import React, { useContext } from 'react';
import Image_1 from './style/Image_1.svg';
import Blob1 from './style/Blob1.js';
import website from './style/website.svg';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../helper/AuthContext";

function IntroPage() {

    const { user, setUser } = useContext(AuthContext);

    const navigate = useNavigate();

    return (
        <div className='IntroPage'>
            <Blob1 />
            <img src={Image_1} alt="website-logo" className='website-logo' />
            {
                user.isLoggedIn == false ?
                    <button className='login-butt' onClick={() => { navigate("/login") }}>LOGIN</button> :
                    <button className='login-butt' onClick={() => {
                        localStorage.removeItem("accesstoken");
                        setUser({ isLoggedIn: false, email: "", FName: "", LName: "" });
                        window.location.reload();
                    }}>LOGOUT</button>
            }

            <div className="intro-left">
                <h1 className='website-name'>One Stop For All Stock</h1>
                <p className='website-description'>
                    Hello, and thank you for taking the time to look over my senior project.
                    <br />This is your one-stop shop for all stock analysis requirements. The expected price of numerous equities is shown here using various machine learning algorithms. The mood behind the news and how people are reacting on Twitter are also portrayed.
                    <br />This entire project was built with ReactJS.
                </p>
            </div>
            {
                window.innerWidth > 768 ?
                    <div className="intro-right">
                        <img src={website} alt="website" className='website-image' />
                    </div> : null
            }
        </div>
    )
}

export default IntroPage