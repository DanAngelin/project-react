import React from 'react'
import { Link } from 'react-router-dom';
import error404 from '../img/404.png'
import './Page404.css';
import HomeImg from '../img/home.png';

function Page404() {
    return (
        <div className='error404'>
            <h1>Oops</h1>
            <h2>Something Went Wrong.</h2>
            <p>Error 404 Page Not Found</p>
            <img src={error404} alt='page404'></img>

            <Link to='/' className='button-home'>Home<img src={HomeImg} alt="home-img" /></Link>
        </div>
    )
}

export default Page404
