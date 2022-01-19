import React from 'react'
import Header from '../content/header'
import '../../stylesheets/home.css'
import Posts from '../content/posts'
import Sidebar from '../layout/sidebar'

export default function home() {
    return (
        <div>
            <Header />
            <div className='home'>
                <Posts />
                <Sidebar />
            </div>
        </div>
    )
}
