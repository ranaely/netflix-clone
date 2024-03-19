import React, { useEffect, useRef } from 'react';
import '../../App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Tag from '../../Tag';
import Navbar1 from '../navbar/navbar';
import Tag2 from '../../tag2';
import Hdata from './Hdata';
// import Sdata from './Sdata';





const Home = () => {


    return (

        <div>
            <Navbar1 />
            <div >
                <Tag />

                <img src='https://cdn.dribbble.com/users/1687718/screenshots/3597876/7_-_netflix.gif' className='img' />

                <Tag2 />
                <Hdata />
            </div>
        </div>
    )
}

export default Home;