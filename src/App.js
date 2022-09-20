import logo from "./img/logo-white.svg";
import "./css/base.scss";
import "./css/header.scss";
import "./css/home.scss";
import "./css/footer.scss";

function App() {
  return (
    <div className="dark-bg">
      <header className="header">
        <a href="/">
          {/* <img src={logo} className="app-logo" alt="logo" /> */}
        </a>
      </header>
      <section className="intro-section">
        <div className="container">
          <h1 className="h1-heading">Begin your Crypto Trading Journey Now!</h1>
          <p className="text text-big">Better trading Better life</p>
          <div className="btn-group">
            <a href="/" className="btn btn-blue-fill">
              Get Started
            </a>
            <a href="/" className="btn btn-white">
              Spot
            </a>
          </div>
        </div>
      </section>
      <section className="table-section"></section>
      <footer className="footer">
        <div className="container">
          <div className="footer-row">
            <img src={logo} className="app-logo" alt="logo" />
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
