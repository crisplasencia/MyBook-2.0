import React from 'react';
import SidebarRow from './SidebarRow/SidebarRow';
import './Sidebar.css';
import { ExpandMoreOutlined } from '@material-ui/icons';

import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { useStateValue } from '../../StateProvider';


function Sidebar() {
  const [{user} , dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow
        src={user.photoURL}
        title={user.displayName}
      />

      <SidebarRow Icon={EmojiFlagsIcon} title="Paginas" />
      <SidebarRow Icon={PeopleIcon} title="Amigos" />
      <SidebarRow Icon={ChatIcon} title="Mensajes" />
      <SidebarRow Icon={StorefrontIcon} title="Tienda" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Mas" />

    </div>


 
  );
  
}

export default Sidebar;
