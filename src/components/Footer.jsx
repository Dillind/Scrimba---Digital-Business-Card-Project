import Twitter from "../img/twitter-icon.png";
import Facebook from "../img/facebook-icon.png";
import Instagram from "../img/instagram-icon.png";
import Github from "../img/github-icon.png";

export default function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--items">
        <img src={Twitter} alt="twitter logo" className="footer--icon" />
        <img src={Facebook} alt="facebook logo" className="footer--icon" />
        <a href="https://www.instagram.com/_dylanlindsay_/">
          <img src={Instagram} alt="instagram logo" className="footer--icon" />
        </a>
        <a href="https://github.com/Dillind">
          <img src={Github} alt="github logo" className="footer--icon" />
        </a>
      </div>
    </footer>
  );
}
