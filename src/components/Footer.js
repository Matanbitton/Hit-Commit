import Icon from "../assets/logo.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <nav className="footer-nav">
        <img
          className="logo"
          datatype="footer-logo"
          src={Icon}
          alt="icon"
        ></img>
        <p className="copyright"> @2022 GitGud .inc</p>
        <button className="footer-nav-button">Terms</button>
        <button className="footer-nav-button">Privacy</button>
        <button className="footer-nav-button">Security</button>
        <button className="footer-nav-button">Status</button>
        <button className="footer-nav-button">Contact GitGud</button>
        <button className="footer-nav-button">Pricing</button>
      </nav>
    </div>
  );
}
