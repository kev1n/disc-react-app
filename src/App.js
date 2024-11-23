import "./App.css";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";
function App() {
  return (
    <div className="App">
      <Nav />
      <div id="main-body">
        <Sidebar />
        <div className="posts">
          <Post />
        </div>
      </div>
    </div>
  );
}

export default App;
