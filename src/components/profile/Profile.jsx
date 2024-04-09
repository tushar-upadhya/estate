import Chat from "../chat/Chat";
import List from "../list/List";
import "./profile.scss";

const Profile = () => {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>

          <div className="info">
            <span>
              Avatar :{" "}
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt=""
              />
            </span>

            <span>
              Username: <b>John doe</b>
            </span>
            <span>Email: JohnDoe@gamil.com</span>
          </div>

          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>

          <List />

          <div className="title">
            <h1>Saved List</h1>
            {/* <button>Create New Post</button> */}
          </div>

          <List />
        </div>
      </div>

      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Profile;
