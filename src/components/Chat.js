import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Chat.css";
import Navbar from "./Navbar";
import api from "../api"

const MAX_CHAR_LIMIT = 300;

const ChatPage = () => {
  const navigate = useNavigate();
  const state = useLocation().state;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);

  const getChats = () => {
    api.post('/getChats/', {
      page: 1
    }).then((res) => {
      console.log(res.data)
      setMessages(res.data)
    }).catch((err) => {
      if (err.response && err.response.data)
        alert("Error: " + err.response.data.error)
      else
        alert("Error: " + err)
    })
  };

  const createChat = (message) => {
    if (!state) {
      navigate("/")
      return;
    }
    api.post('/createChat/', {
      accessToken: state.accessToken,
      text: message,
      anon: isAnonymous
    }).then((res) => {
      console.log(res.data)
      getChats()
    }).catch((err) => {
      alert("Error: " + err.response.data.error)
    })
  };

  const deleteChat = (id) => {
    api.post('/deleteChat/', {
      accessToken: state.accessToken,
      chatid: id
    }).then((res) => {
      console.log(res.data)
      getChats()
    }).catch((err) => {
      alert("Error: " + err.response.data.error)
    })
  };

  useEffect(() => {
    getChats()
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    if (!newMessage.trim() || newMessage.length > MAX_CHAR_LIMIT) return;

    createChat(newMessage);
    setNewMessage("");
  };

  return (
    <div>
      <Navbar />
      <div className="chat-container">
        <div className="chat-box">
          <h1 className="chat-title">ToiletTalk Chat Room</h1>
          <div className="message-log">
            {messages.map((msg) => (
                <div key={msg.chatid} className="message">
  <div className="message-content">
    <span className="sender" style={msg.anon ? {color:"grey"} : {}}>{msg.username + " at " + msg.datetime}:</span>
    <span className="text">{msg.text}</span>
  </div>
  {state && msg.userid === state.userid && (
    <button className="delete-btn" onClick={() => deleteChat(msg.chatid)}>Delete</button>
  )}
</div>
            ))}
          </div>
          <form className="chat-form" onSubmit={handleSend}>
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              maxLength={MAX_CHAR_LIMIT}
              required
            ></textarea>
            <div className="chat-controls">
              <label>
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={() => setIsAnonymous(!isAnonymous)}
                />
                Post as Anonymous
              </label>
              <span className="char-counter">
                {newMessage.length}/{MAX_CHAR_LIMIT}
              </span>
              <button type="submit" className="send-btn">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;



