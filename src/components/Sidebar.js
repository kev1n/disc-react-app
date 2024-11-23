import { ReactComponent as Discover } from "../svgs/discover.svg";
import { ReactComponent as Home } from "../svgs/home.svg";
import { ReactComponent as Chat } from "../svgs/chat.svg";

export default function Sidebar() {
  return (
    <div id="sidebar">
      <div>
        <ul>
          <li className="li-image">
            <Home />
            <span className="text">Home</span>
          </li>
          <li className="li-image">
            <Discover />
            <span className="text">Discover</span>
          </li>
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
