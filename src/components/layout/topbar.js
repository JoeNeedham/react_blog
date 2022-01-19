import React from 'react'
import '../../stylesheets/topbar.css'
import { Link } from 'react-router-dom';

export default function topbar() {
    return (
        <div className='top'>
            <div className='topLeft'>
                <i className='topIcon fab fa-facebook-square'></i>
                <i className='topIcon fab fa-twitter-square'></i>
                <i className='topIcon fab fa-pinterest-square'></i>
                <i className='topIcon fab fa-instagram-square'></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li className='topListItem'>
                        <Link to='/login'>LOGIN</Link>
                    </li>
                    <li className='topListItem'>
                        <Link to='/register'>REGISTER</Link>
                    </li>
                    <li className='topListItem'>
                        <Link to='/settings'>SETTINGS</Link>
                    </li>
                    <li className='topListItem'>
                        <Link to='/write'>WRITE</Link>
                    </li>
                    <li className='topListItem'>
                        <Link to='/'>LOGOUT</Link>
                    </li>
                </ul>
            </div>
            <div className='topRight'>
                <img
                    className="topImg"
                    src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                />
                <i className='topSearchIcon fas fa-search'></i>
            </div>
        </div>
    )
}
