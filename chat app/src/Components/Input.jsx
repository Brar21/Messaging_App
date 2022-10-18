import React, { useContext, useState } from "react";
import Picker from 'emoji-picker-react';
import { AuthContext } from "../Context/AuthContext";
import { ChatContext } from "../Context/ChatContext";
import {
    arrayUnion,
    doc,
    serverTimestamp,
    Timestamp,
    updateDoc,
} from "firebase/firestore";
import { db, storage } from "../Firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import '../App.css';
const Input = () => {
    const [text, setText] = useState("");
    const [img, setImg] = useState(null);
    const [inputStr, setInputStr] = useState('');
    const [showPicker, setShowPicker] = useState(false);

    const onEmojiClick = (event, emojiObject) => {
        setInputStr(prevInput => prevInput + emojiObject.emoji);
        setShowPicker(false);
    };
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const handleSend = async () => {
        if (img) {
            const storageRef = ref(storage, uuid());

            const uploadTask = uploadBytesResumable(storageRef, img);

            uploadTask.on(
                (error) => {
                    //TODO:Handle Error
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateDoc(doc(db, "chats", data.chatId), {
                            messages: arrayUnion({
                                id: uuid(),
                                text,
                                senderId: currentUser.uid,
                                date: Timestamp.now(),
                                img: downloadURL,
                            }),
                        });
                    });
                }
            );
        } else {
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now(),
                }),
            });
        }

        await updateDoc(doc(db, "userChats", currentUser.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", data.user.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });

        setText("");
        setImg(null);
    };
    return (
        <div className="input">
            <input
                type="text"
                placeholder="Type something..."
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <div className="send">
                {/* <img src="https://www.freeiconspng.com/thumbs/add-icon-png/add-1-icon--office-iconset--custom-icon-design-14.png" style={{ width: "24px", height: "24px" }} alt="addFile_logo" /> */}
                <div className="picker-container">
                    <input
                        type="text"
                        id="Text"
                        className="input-style"
                        value={inputStr}
                        onChange={e => setInputStr(e.target.value)} />
                    <label htmlFor="Text">
                        <img
                            className="emoji-icon"
                            src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg" alt="emoji"
                            onClick={() => setShowPicker(val => !val)} />
                    </label>
                  
                    {showPicker && <Picker
                        pickerStyle={{ width: '100%' }}
                        onEmojiClick={onEmojiClick} />}
                </div>
                <div>
                <input
                    type="file"
                    style={{ display: "none" }}
                    id="file"
                    onChange={(e) => setImg(e.target.files[0])}
                />
                <label htmlFor="file">
                    <img src="https://www.freeiconspng.com/thumbs/add-icon-png/add-1-icon--office-iconset--custom-icon-design-14.png" style={{ width: "24px", height: "24px" }} alt="addFile_logo" />
                </label>
                <button onClick={handleSend}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Input;

<img src="https://www.freeiconspng.com/thumbs/add-icon-png/add-1-icon--office-iconset--custom-icon-design-14.png" style={{ width: "24px", height: "24px" }} alt="addFile_logo" />
