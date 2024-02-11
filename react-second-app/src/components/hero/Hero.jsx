import "./index.css";
import Button from "../button/Button";

const Hero = () => {
  return (
    <div className="hero">
      <img
        src="https://images.unsplash.com/photo-1682685797898-6d7587974771?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="hero"
      />
      <div className="hero-text">
        <h2>This is my first website with React.js</h2>
        <p>Hope you like it!</p>
        <Button textContent="Clicca qui!" color="white" />
      </div>
    </div>
  );
};

export default Hero;
