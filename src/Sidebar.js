import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ChatIcon from '@material-ui/icons/Chat';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMore';
import { useStatevalue } from './StateProvider'; 
function Sidebar() {

    const [{user} , dispatch] = useStatevalue()
    return (
        <div className='sidebar'>
         <SidebarRow src={user.photoURL}   title={user.displayName}/>
         <SidebarRow  Icon={LocalHospitalIcon} 
         title=' Dengue Information Center'/>
         <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
         <SidebarRow Icon={PeopleIcon} title='Friends'/>
         <SidebarRow Icon={ChatIcon} title='Messenger'/>
         <SidebarRow Icon={StorefrontIcon} title='Market place'/>
         <SidebarRow Icon={VideoLibraryIcon} title='Video'/>
         <SidebarRow Icon={ExpandMoreOutlined} title='Find more'/>
        </div>
    )
}

export default Sidebar

