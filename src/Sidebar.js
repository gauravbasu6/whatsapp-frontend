import React from 'react'
import './sidebar.css'
import ChatIcon from '@material-ui/icons/Chat';
import { DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat';
function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="Sidebar__header">
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHxLg1bREyL3KY1clK2HR8uthsB5yfxdzFkQ&usqp=CAU" />
                <div className="Sidebar__headerRight">
                    <IconButton className="IconButton">
                        <ChatIcon />
                    </IconButton>
                    <IconButton className="IconButton">
                        <DonutLarge />
                    </IconButton>
                    <IconButton className="IconButton">
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="Sidebar__search">
                <div className="Sidebar__searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or start new chat" />
                </div>
            </div>
            <div className="Sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
