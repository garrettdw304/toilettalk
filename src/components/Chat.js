import React, { useState, useEffect } from "react";
import "./Chat.css";
import Navbar from "./Navbar";

const MAX_CHAR_LIMIT = 300;

const ChatPage = () => {
  const currentUser = {
    id: "user123",
    username: "ToiletKing42"
  };

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);

  const fetchMessagesFromBackend = async () => {
    return [
      {
        id: "1",
        sender: "Anonymous",
        text: "This stall has no toilet paper.",
        userId: "user456",
        timestamp: "2025-04-25T12:00:00Z"
      },
      {
        id: "2",
        sender: "ToiletKing42",
        text: "Appreciate the heads-up!",
        userId: "user123",
        timestamp: "2025-04-25T12:05:00Z"
      }
    ];
  };

  const sendMessageToBackend = async (message) => {
    const fakeMessage = {
      ...message,
      id: Date.now().toString()
    };
    return fakeMessage;
  };

  const deleteMessageFromBackend = async (id) => {
    console.log(`Deleted message with id ${id}`);
    return true;
  };

  useEffect(() => {
    const loadMessages = async () => {
      const fetchedMessages = await fetchMessagesFromBackend();
      setMessages(fetchedMessages);
    };
    loadMessages();
  }, []);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || newMessage.length > MAX_CHAR_LIMIT) return;

    const messageToSend = {
      text: newMessage,
      sender: isAnonymous ? "Anonymous" : currentUser.username,
      timestamp: new Date().toISOString(),
      userId: currentUser.id
    };

    const savedMessage = await sendMessageToBackend(messageToSend);
    setMessages((prev) => [...prev, savedMessage]);
    setNewMessage("");
  };

  const handleDelete = async (id) => {
    await deleteMessageFromBackend(id);
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  return (
    <div>
      <Navbar />
      <div className="chat-container">
        <div className="chat-box">
          <h1 className="chat-title">ToiletTalk Chat Room</h1>
          <div className="message-log">
            {messages.map((msg) => (
                <div key={msg.id} className="message">
  <div className="message-content">
    <span className="sender">{msg.sender}:</span>
    <span className="text">{msg.text}</span>
  </div>
  {msg.userId === currentUser.id && (
    <button className="delete-btn" onClick={() => handleDelete(msg.id)}>Delete</button>
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



