import React from 'react'
import './chat.css'
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MicOutlined, MoreHoriz, SearchOutlined } from '@material-ui/icons';

function Chat() {
    return (
        <div className="Chat">
            <div className="Chat__header">
                <Avatar src="https://api.time.com/wp-content/uploads/2015/02/cats.jpg?quality=85&w=1024&h=512&crop=1" />
                <div className="Chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="Chat__headerRight">
                    <IconButton className="IconButton">
                        <SearchOutlined />
                    </IconButton>
                    <IconButton className="IconButton">
                        <AttachFile />
                    </IconButton>
                    <IconButton className="IconButton">
                        <MoreHoriz />
                    </IconButton>
                </div>
            </div>
            <div className="Chat__body">
                <p className="Chat__message">
                    <span className="Chat__name">Gubrasu</span>
                    A message
                    <span className="Chat__timestamp">now</span>
                </p>
                <p className=" Chat__message Chat__receiver">
                    <span className="Chat__name">Gubrasu</span>
                    A message
                    <span className="Chat__timestamp">now</span>
                </p>
                <p className="Chat__message">
                    <span className="Chat__name">Gubrasu</span>
                    A message
                    <span className="Chat__timestamp">now</span>
                </p>
            </div>
            <div className="Chat__footer">
                <InsertEmoticon />
                <form action="">
                    <input type="text" placeholder="Type a message" />
                    <button type="submit">Send a message.</button>
                </form>
                <MicOutlined />
            </div>
        </div >
    )
}

export default Chat
