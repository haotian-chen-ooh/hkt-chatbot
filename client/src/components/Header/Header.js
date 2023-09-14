import mainLogo from "../../imgs/logo.png";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header-container">
      <h1 className="title">System Sherpa</h1>
      <img className="logo" src={mainLogo} alt="logo" />
    </div>
  );
};
