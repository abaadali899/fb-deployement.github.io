import React from 'react'
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post'
import './Feed.css'
import db from './firebase';
import {useState,useEffect} from 'react'

function Feed() {
    const [posts, setPosts] = useState([])
    // These three lines of codes are the real time connction between real time database
    useEffect(()=>{
     db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot) =>(
         setPosts(snapshot.docs.map(doc =>({id: doc.id, data: doc.data()})))
     ))
    },[])
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>

            {posts.map((post)=>(
                <Post
                key={post.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}/>
            ))}


           {/*  <Post 
            profilePic='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png'
            message='It works'
            timestamp='2020'
            username='757ALi'
            image='https://p.kindpng.com/picc/s/21-210466_google-png-free-pic-logo-google-con-lupa.png'
            />
            <Post 
            profilePic=' https://img.favpng.com/6/6/4/google-logo-computer-icons-google-logo-png-favpng-L2nAPFg47JP3AjaAdiTk7pfiT.jpg'
            message='It works'
            timestamp='2020'
            username='757ALi'
            image='https://image.shutterstock.com/image-photo/evining-nature-wallpaper-jpg-image-260nw-1960500388.jpg '
            /> */}
             
             


        </div>
    );
}

export default Feed;
