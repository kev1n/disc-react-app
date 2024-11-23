import "./App.css";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Nav />
      <div id="main-body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
