import Header from "./Header";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
    </div>
  );
}

function Navbar() {
  return (
    <div className="nav">
      <h1>MGC</h1>

      <ul>
        <li>
          <a href="#">Upload Music</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
      </ul>
    </div>
  );
}ś