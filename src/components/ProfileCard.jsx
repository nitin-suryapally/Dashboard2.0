import React from 'react'
import image from "../asserts/profilepic1.jpg"

const ProfileCard = () => {
    return (
        <div className='flex items-center'>
            <img src = {image} alt="profile picture" className='rounded-full w-20 sm:w-15 h-20 sm:h-15 ' />
            <div className='space-y-0.5 font-medium dark:text-Black text-left rtl:text-right ms-3'>
                <div className='text-5xl sm:text-3xl'>Hi,Mike</div>
                <div class="text-sm text-gray-500 dark:text-gray-400 ">Welcome Back</div>
            </div>
        </div>
    )
}

export default ProfileCard
