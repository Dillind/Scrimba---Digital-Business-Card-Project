import Main from "../src/components/Main";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import "../src/css/main.css";

export default function App() {
  return (
    <div className="app--container">
      <div className="app--container--two">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
