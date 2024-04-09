import { useState } from "react";
import "./chat.scss";

const Chat = () => {
  const [chat, setChat] = useState(true);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>

        <div className="message">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="image"
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sir ...</p>
        </div>

        <div className="message">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="image"
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sir ...</p>
        </div>

        <div className="message">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="image"
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sir ...</p>
        </div>
      </div>

      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="image"
              />
              John Doe
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>

          <div className="center">
            <div className="chatMessage">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                voluptatibus ex unde natus repellat,
              </p>
              <span>1 Hour ago</span>
            </div>

            <div className="chatMessage own">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                voluptatibus ex unde natus repellat,
              </p>
              <span>1 Hour ago</span>
            </div>

            <div className="chatMessage">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                voluptatibus ex unde natus repellat,
              </p>
              <span>1 Hour ago</span>
            </div>

            <div className="chatMessage own">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                voluptatibus ex unde natus repellat,
              </p>
              <span>1 Hour ago</span>
            </div>

            <div className="chatMessage">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                voluptatibus ex unde natus repellat,
              </p>
              <span>1 Hour ago</span>
            </div>
          </div>

          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
