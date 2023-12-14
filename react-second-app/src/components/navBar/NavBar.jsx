import "./index.css";
const NavBar = () => {
  return (
    <div className="nav-bar">
      <img
        src="https://cdn.worldvectorlogo.com/logos/svg-6.svg"
        alt="logo-ipsum"
      />
      <ul className="nav-list">
        <a href="">
          <li className="list">Home</li>
        </a>
        <a href="">
          <li className="list">About us</li>
        </a>
        <input className="search-box" type="text" placeholder="Search" />
      </ul>
    </div>
  );
};

export default NavBar;
