import { useNavigate } from "react-router-dom";
import ProfilePicture from "./ProfilePicture";

export default function Nav() {
  const navigate = useNavigate();

  return (
    <nav>
      <img
        src="https://i.ibb.co/Fg8YsBQ/Screenshot-2024-10-10-at-7-42-27-PM.png"
        alt="Logo"
        width="151"
      />
      <button id="search-container">
        <div>Search</div>
      </button>
      <ProfilePicture
        diameter={30}
        image="https://i.dailymail.co.uk/1s/2024/04/19/18/83860575-13328233-Mark_Zuckerberg_has_been_teased_online_for_hitting_puberty_late_-a-15_1713546465289.jpg"
        alt="mark zuckerberg"
        onClick={() => navigate("/profile")}
      />
    </nav>
  );
}
