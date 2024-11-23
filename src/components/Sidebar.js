import { ReactComponent as Discover } from "../svgs/discover.svg";
import { ReactComponent as Home } from "../svgs/home.svg";
import { ReactComponent as Chat } from "../svgs/chat.svg";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div id="sidebar">
      <div>
        <ul>
          <li className="li-image">
            <Home />
            <span className="text">Home</span>
          </li>
          <Link to="/discover">
            <li className="li-image">
              <Discover />
              <span className="text highlight">Discover</span>
            </li>
          </Link>
          <li className="li-image">
            <Chat />
            <span className="text">Chats</span>
          </li>
        </ul>

        <button id="post-button">Post</button>
      </div>
    </div>
  );
}
