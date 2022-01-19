import React from 'react'
import '../../stylesheets/single.css'
import SinglePost from '../content/singlePost'
import Sidebar from '../layout/sidebar'

export default function single() {
    return (
        <div className='single'>
            <SinglePost />
            <Sidebar />
        </div>
    )
}
