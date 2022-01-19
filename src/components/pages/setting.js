import React from 'react'
import '../../stylesheets/setting.css'
import Sidebar from '../layout/sidebar'

export default function settings() {
    return (
    <div className='settings'>
        <div className='settingsWrapper'>
            <div className='settingsTitle'>
                <span className='settingsUpdateTitle'>Update Your Account</span>
                <span className='settingsDeleteTitle'>Delete Account</span>
            </div>
            <form className='settingsForm'>
                <label>Profile Picture</label>
                <div className='settingsPP'>
                    <img
                    src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    />
                    <label htmlFor='fileInput'>
                        <i className='settingsPPIcon far fa-user-circle'></i>
                    </label>
                    <input
                    id="fileInput"
                    type="file"
                    style={{ display: "none" }}
                    className="settingsPPInput"
                    />
                </div>
                <label>Username</label>
                <input type='text' placeholder='safak@gmail.com' />
                <label>Email</label>
                <input type='email' placeholder='safak@gmail.com' />
                <label>Password</label>
                <input type='password' placeholder='safak@gmail.com' />
                <button className='settingsSubmit'>Update</button>
            </form>
        </div>
    <Sidebar />
    </div>
    )
}
