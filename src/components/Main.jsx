import emailLogo from "../img/email-icon.png";
import linkedinLogo from "../img/linkedin-icon.png";

export default function Main() {
  return (
    <main className="main--container">
      <h1 className="main--heading main--content">Dylan Lindsay</h1>
      <h3 className="main--job main--content">Frontend Developer</h3>
      <span className="main--span--two main--content">
        dylanlindsay.website
      </span>

      <div className="btn--container">
        <button className="main--btn btn--email">
          <img src={emailLogo} alt="email logo" className="email" />
          Email
        </button>
        <button className="main--btn btn--linkedin">
          <img src={linkedinLogo} alt="email logo" className="linkedin" />
          LinkedIn
        </button>
      </div>
      <div className="main--about--interests">
        <h3>About</h3>
        <p>
          I am an aspiring self-taught frontend developer that is currently
          learning ReactJS in order to enhance my employability. I thrive on
          learning new things and am always challenging myself to be better!
        </p>
        <h3>Interests</h3>
        <p>
          Love to cook. Gaming nerd. Gym-goer. Book reader. Movie & TV buff.
          Coffee enjoyer. Music scholar.
        </p>
      </div>
    </main>
  );
}
