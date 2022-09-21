import { useEffect } from "react";
import logo from "./img/logo-white.svg";
import fb from "./img/socials/facebook.svg";
import twitter from "./img/socials/twitter.svg";
import github from "./img/socials/github.svg";
import reddit from "./img/socials/reddit.svg";
import medium from "./img/socials/medium.svg";
import steemit from "./img/socials/steemit.svg";
import "./css/base.scss";
import "./css/home.scss";

const Home = () => {
  useEffect(() => {
    document.body.classList.add("dark-bg");
    // return () => {
    //   document.body.classList.remove('dark-bg')
    // }
  }, []);
  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <nav className="nav">
            <a href="/" className="logo"></a>
            <ul className="nav-list">
              <li className="nav-list-item">
                <a href="">Exchange</a>
              </li>
              <li className="nav-list-item">
                <a href="">Market</a>
              </li>
              <li className="nav-list-item">
                <a href="">Support</a>
              </li>
              <li className="nav-list-item">
                <a href="">Buy crypto</a>
              </li>
              <li className="nav-list-item">
                <a href="">Rewards</a>
              </li>
            </ul>
            <ul className="nav-list nav-list-right">
              <li className="nav-list-item">
                <a href="">Sign In</a>
              </li>
              <li className="nav-list-item">
                <a href="" className="btn btn-blue-fill">
                  Get Started
                </a>
              </li>
            </ul>
          </nav>
        </div>
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
            <div className="col">
              <h6 className="h6-heading">About Us</h6>
              <div className="footer-link">
                <a href="/">About Coinwan</a>
                <a href="/">Careers</a>
                <a href="/">Business Contacts</a>
              </div>
            </div>
            <div className="col">
              <h6 className="h6-heading">Legal</h6>
              <div className="footer-link">
                <a href="/">Privacy Policy</a>
                <a href="/">Terms of Use</a>
                <a href="/">Legal Statement</a>
                <a href="/">Security</a>
                <a href="/">AML&amp;CFT Policy</a>
                <a href="/">Cookies Policy</a>
                <a href="/">Risk Warning</a>
              </div>
            </div>
            <div className="col">
              <h6 className="h6-heading">Service</h6>
              <div className="footer-link">
                <a href="/">Help Center</a>
                <a href="/">Fees</a>
                <a href="/">Referrals</a>
                <a href="/">API Service</a>
              </div>
            </div>
            <div className="col">
              <h6 className="h6-heading">Support</h6>
              <div className="footer-link">
                <a href="/">Submit a Request</a>
                <a href="/">Knowledge Base</a>
              </div>
            </div>
            <div className="col">
              <h6 className="h6-heading">Community</h6>
              <div className="footer-link social-icons">
                <a href="/"><img src={fb} alt="" /></a>
                <a href="/"><img src={twitter} alt="" /></a>
                <a href="/"><img src={github} alt="" /></a>
                <a href="/"><img src={reddit} alt="" /></a>
                <a href="/"><img src={medium} alt="" /></a>
                <a href="/"><img src={steemit} alt="" /></a>
              </div>
              <h6 className="h6-heading">Community</h6>
              <div className="footer-link">
                <span>Support Service：<a href="mailto:support@kudx.com">support@kudx.com</a></span>
                <span>Token Listings：<a href="mailto:listing@kudx.com">listing@kudx.com</a></span>
                <span>Business Offers：<a href="mailto:business@kudx.com">business@kudx.com</a></span>
              </div>
              <h6 className="h6-heading">Volume (24H)</h6>
              <div className="footer-link">
                <span>107,354,400.29 USDT  107,383,385.98 USD</span>
                <span>Token Listings：<a href="mailto:listing@kudx.com">listing@kudx.com</a></span>
                <span>2022-09-15 04:54:51 (GMT+0) 30.7ms</span>
              </div>
            </div>
          </div>
          <p className="copyright-text">© 2022 KU DIGITAL SOLUTIONS LIMITED. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
