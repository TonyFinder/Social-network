import React from 'react';
import p from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return <div>
        <ProfileInfo />
        <MyPosts/>
    </div>
}

export default Profile;