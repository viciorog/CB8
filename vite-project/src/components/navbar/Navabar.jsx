import "./index.css";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="Navbar">
      <img src="src/facebook.png" alt="facebook-logo" width="40px" />
      <li>
        <a href="#" onClick={scrollToTop}>
          Home
        </a>
      </li>
      <li>About</li>
      <li>Events</li>
      <li>Photos</li>
      <li>Videos</li>
    </nav>
  );
};

export default Navbar;
