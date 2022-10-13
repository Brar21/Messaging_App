import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../Context/ChatContext";

const Chat = () => {
    const { data } = useContext(ChatContext);

    return (
        <div className="chat">
            <div className="chatInfo">
                <span>{data.user?.displayName}</span>
                <div className="chatIcons">
                    <img src="https://e1.pngegg.com/pngimages/929/197/png-clipart-button-ui-system-icons-facetime-video-call-icon.png" alt="camera" />
                    <img src="https://www.clipartmax.com/png/middle/41-410452_add-friend-comments-add-friend-icon-free.png" alt="add_friend" />
                    <img src="https://www.shareicon.net/download/2015/09/20/104317_detail_512x512.png" alt="more" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    );
};

export default Chat;

   