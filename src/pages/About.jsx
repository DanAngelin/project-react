import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import HomeImg from '../img/home.png';
import Layout from '../components/Layout';

function About() {
    return (
        <div className='about-page'>
            <div className='about-project'>
                <h1>About project</h1>
                <h3>Hi, This is my first project in ReactJS. In this project I learned and I used the following:</h3>
                <ul>
                    <li>components, state, props</li>
                    <li>ternary, map, async, conditional rendering</li>
                    <li>lifecycle methods, react-router-dom</li>
                </ul>
            </div>
            <div className='about-me'>
                <h1>About me</h1>
                <h3>My name is Angelin, a focused and motivated front-end developer having knowledge in JavaSript, CSS, HTML.</h3>
                <h3>I am currently learning ReactJS.</h3>
                <h3>This is my portofolio &#8618; <a href="https://dan-angelin.com" target="_blank" rel="noreferrer">dan-angelin.com</a></h3>
            </div>

            <Link to='/' className='button-home'>Home<img src={HomeImg} alt="home-img" /></Link>
            
            <Layout></Layout>
        </div>
    )
}

export default About;
