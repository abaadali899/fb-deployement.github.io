import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlined from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlined from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleOutlined from '@material-ui/icons/SupervisedUserCircleOutlined';

 
//import { Avatar, IconButton } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/Button';
//import { AddIcon } from "@material-ui/icons/Add"; 
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"   
import { useStatevalue } from './StateProvider'; 
import './Header.css'; 
  







function Header() {
    const [{user} , dispatch] = useStatevalue()

    return (
         <div className='header'>

        <div className='header__left'>
            <img
                src='https://seeklogo.com/images/F/facebook-new-2019-logo-5A4671100B-seeklogo.com.png  '
                alt=''
            />


            <div className='header__input'>
                <SearchIcon />
                <input placeholder='Search Facebook' type='text' />
            </div>
        </div>


        < div className='header__center'>
       
            <div className='header__option
            header__option--active'>
            
                <HomeIcon fontSize='large' />
            </div >
            <div className='header__option'>
                <FlagIcon fontSize='large' />
            </div >
            <div className='header__option'>
                <SubscriptionsOutlined fontSize='large' />
            </div >
            <div className='header__option'>
                < StorefrontOutlined fontSize='large' />
            </div >
            <div className='header__option'>
                <SupervisedUserCircleOutlined fontSize='large' />
            </div >
            </div>
        

        < div className='header__right'>

            <div className='header__info'>
                <Avatar src={user.photoURL} />
                <h4>{user.displayName}</h4>

                

            </div>
   
             
            <IconButton>
                <AddIcon />
                </IconButton>
                 
                <IconButton>
                <ForumIcon />
                </IconButton>

                <IconButton>
                <NotificationsActiveIcon />
                </IconButton>

                <IconButton>
                <ExpandMoreIcon />
            </IconButton>

        </div>
    </div>
)}

export default Header;


/* https://cdn-icons-png.flaticon.com/512/124/124010.png */