import { Avatar} from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import  PhotoLibraryIcon   from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import React,{useState} from 'react'
import { useStatevalue } from './StateProvider'; 
import db from './firebase';
import firebase from '../node_modules/firebase/compat';
import './MessageSender.css'



function MessageSender() {
    const [{user} , dispatch] = useStatevalue()
    const [input, setInput] = useState('')
    const [imageURL, setImageurl] = useState('')
    const handdleSubmit= (e) =>{
        e.preventDefault();

        //////Some database stuff here
        db.collection('posts').add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            username:user.displayName,
            image:imageURL,
        })

         setInput("");
         setImageurl("");
        
    }
    return (
        <div className='messageSender'> 
            <div className='messageSender__top'>
            <Avatar src={user.photoURL}/>
            <form>
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                 className='messageSender__input'
                placeholder={`what's on your mind,  ${user.displayName}?`}/>

                <input 
                value={imageURL}
                onChange={(e) => setImageurl(e.target.value)}
                placeholder={'Image URL(Optional)'}
                />
                <button onClick={handdleSubmit} type='submit'>
                    Hidden Submit
                </button>
                
            </form>
            </div>

            <div className='messageSender__bottom'>
                <div className='messageSendr__option'>
                    <VideocamIcon style={{color: 'red'}}/>
                    <h3>Live Video</h3>
                </div>

                <div className='messageSendr__option'>
                    <PhotoLibraryIcon style={{color:'green'}}/>
                    <h3>Photo/Video</h3>
                </div>

                    <div className='messageSendr__option'>
                    <InsertEmoticonIcon style={{color:'orange'}}/>
                    <h3>Feeling/Activity</h3>
                   </div>

             </div>
        </div>
    )
}

export default MessageSender
