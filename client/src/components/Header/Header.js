import mainLogo from "../../imgs/logo.png";
import sherpaLogo from "../../imgs/sherpa2.png";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="sherpa-container">
        <h1 className="title">System Sherpa</h1>
        <img className="sherpa-logo" src={sherpaLogo} alt="sherpa" />
      </div>
      <img className="logo" src={mainLogo} alt="logo" />
    </div>
  );
};
