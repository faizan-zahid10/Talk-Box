import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ChattingStyle.css';

const chats = [
    { id: 1, name: 'Ali', message: 'Okay, try to come up with useful equipment' },
    { id: 2, name: 'Asad Khalid', message: 'How are you?' },
    { id: 3, name: 'Kamran Shahid', message: 'I am excited about cricket match taking place tonight ' },
    { id: 4, name: 'Hamid Hassan', message: 'Project deadline is getting closer' },
    { id: 5, name: 'Imran Butt', message: 'Are you free?' },
];

const messagesData = {
    1: [
        { id: 1, sender: 'Ali', text: 'Everything alright? You have not reached yet', time: '6:35 PM' },
        { id: 2, sender: 'You', text: 'My car broke down on the way to home', time: '6:42 PM' },
        { id: 3, sender: 'Ali', text: 'Send me your location, I will be there soon', time: '6:42 PM' },
        { id: 4, sender: 'You', text: 'Okay, try to come up with useful equipment', time: '6:43 PM' },
    ],
    2: [
        { id: 1, sender: 'Asad Khalid', text: 'Hey, how are you?', time: '3:15 PM' },
    ],
    3: [
        { id: 1, sender: 'Kamran Shahid', text: 'I am excited about the cricket match tonight!', time: '4:20 PM' },
    ],
    4: [
        { id: 1, sender: 'Hamid Hassan', text: 'Project deadline is getting closer', time: '2:50 PM' },
    ],
    5: [
        { id: 1, sender: 'Imran Butt', text: 'Are you free?', time: '1:10 PM' },
    ],
};

function ChatApp() {
    const [selectedChat, setSelectedChat] = useState(null);
    const [messageInput, setMessageInput] = useState('');
    const [messages, setMessages] = useState(messagesData);

    const handleChatClick = (chatId) => {
        setSelectedChat(chatId);
    };

    const handleSendMessage = () => {
        if (messageInput.trim() !== '') {
            const newMessage = {
                id: messages[selectedChat].length + 1,
                sender: 'You', 
                text: messageInput,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };

            setMessages({
                ...messages,
                [selectedChat]: [...messages[selectedChat], newMessage]
            });

            setMessageInput('');
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 col-lg-3 p-0 border-right chat-sidebar">
                    <div className="bg-light p-3 border-bottom">
                        <input type="text" className="form-control" placeholder="Search or start new chat" />
                    </div>
                    <div className="list-group list-group-flush">
                        {chats.map(chat => (
                            <button key={chat.id} className="list-group-item list-group-item-action" onClick={() => handleChatClick(chat.id)}>
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">{chat.name}</h5>
                                </div>
                                <p className="mb-1">{chat.message}</p>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="col-md-8 col-lg-9 p-0 chat-window">
                    {selectedChat && (
                        <>
                            <div className="bg-light p-3 border-bottom">
                                <h5>{chats.find(chat => chat.id === selectedChat).name}</h5>
                            </div>
                            <div className="chat-message p-3">
                                {messages[selectedChat].map(message => (
                                    <div key={message.id} className="message-box mb-3 bg-light rounded px-3">
                                        <small className="text-primary">{message.sender} - {message.time}</small>
                                        <p className="m-0 message-content">{message.text}</p>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    {!selectedChat && (
                        <div className="bg-light p-3 border-bottom">
                            <h5>Select a chat to start messaging</h5>
                        </div>
                    )}
                    <div className="bg-light p-3 border-top">
                        <div className="input-group">
                            <div className="input-group-prepend dropup">
                                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" >
                                    <i className="bi bi-paperclip"></i>
                                </button>
                                
                            </div>
                            <input
                                type="text"
                                className="form-control rounded-5"
                                placeholder="Type a message"
                                value={messageInput}
                                onChange={(e) => setMessageInput(e.target.value)}
                            />
                            <div className="input-group-append">
                                <button className="btn" type="button" onClick={handleSendMessage}><i className="bi bi-send"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatApp;
