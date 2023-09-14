import mainLogo from "../../imgs/logo.png";
import sherpaLogo from "../../imgs/sherpa.png";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header-container">
      <h1 className="title">System Sherpa</h1>
      <div>
        <img className="logo" src={mainLogo} alt="logo" />
        <img className="sherpa-logo" src={sherpaLogo} alt="sherpa" />
      </div>
    </div>
  );
};
