import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import logo from "./img/logo-white.svg";
import account from "./img/icons/account.svg";
import accountInfo from "./img/icons/account-info.svg";
import accountSecurity from "./img/icons/security.svg";
import accountVerification from "./img/icons/verification.svg";
import accountReferrals from "./img/icons/referrals.svg";
import accountLogout from "./img/icons/logout.svg";
import slide1 from "./img/slider/slide-1.jpg";
import slide2 from "./img/slider/slide-2.jpg";
import ios from "./img/icons/ios.svg";
import android from "./img/icons/android.svg";
import qr from "./img/qr.png";
import screens from "./img/screens.png";
import capital from "./img/logos/capital-support.svg";
import snk from "./img/logos/snk.svg";
import anlan from "./img/logos/anlan.svg";
import fb from "./img/socials/facebook.svg";
import twitter from "./img/socials/twitter.svg";
import github from "./img/socials/github.svg";
import reddit from "./img/socials/reddit.svg";
import medium from "./img/socials/medium.svg";
import steemit from "./img/socials/steemit.svg";
import "./css/base.scss";
import "./css/form.scss";
import "./css/table.scss";
import "./css/home.scss";
import "./css/app.scss";
import "./css/partner.scss";
import "./css/subscribe.scss";

const Home = () => {
  useEffect(() => {
    // addclass to body
    document.body.classList.add("dark-bg");

    const introSwiper = new Swiper(".intro-swiper", {
      // Optional parameters
      slidesPerView: 1.13,
      spaceBetween: 15,
      breakpoints: {
        576: {
          slidesPerView: 1.5,
          spaceBetween: 25,
        },
      },

      // Navigation arrows
      navigation: {
        nextEl: ".intro-swiper-button-next",
        prevEl: ".intro-swiper-button-prev",
      },
    });

    // tabs
    function Tabs() {
      let bindAll = function () {
        let menuElements = document.querySelectorAll("[data-tab]");
        for (let i = 0; i < menuElements.length; i++) {
          menuElements[i].addEventListener("click", change, false);
        }
      };

      let clear = function () {
        let menuElements = document.querySelectorAll("[data-tab]");
        for (let i = 0; i < menuElements.length; i++) {
          menuElements[i].classList.remove("active");
          let id = menuElements[i].getAttribute("data-tab");
          document.getElementById(id).classList.remove("active");
        }
      };

      let change = function (e) {
        clear();
        e.target.classList.add("active");
        e.preventDefault();
        let id = e.currentTarget.getAttribute("data-tab");
        document.getElementById(id).classList.add("active");
      };

      bindAll();
    }
    let connectTabs = new Tabs();

    // header burger
    if (window.screen.width <= 992) {
      // Set Elements
      let menu = document.getElementById("slideout-menu");
      let toggleButton = document.getElementById("slideout-toggle");
      let closeButton = document.getElementById("slideout-close");

      // Toggle Menu
      toggleButton.addEventListener("click", function (e) {
        e.preventDefault();
        menu.classList.toggle("is-open");
        document.body.classList.add("header-open");
      });

      // Close Menu
      closeButton.addEventListener("click", function (e) {
        e.preventDefault();
        menu.classList.remove("is-open");
        document.body.classList.remove("header-open");
      });
    }

    // header settings change
    const lang = document.querySelectorAll(".website-settings-lang");
    const currency = document.querySelectorAll(".website-settings-currency");
    lang.forEach(function (el) {
      el.addEventListener("click", function () {
        document.querySelector(".website-language").textContent =
          el.textContent;
      });
    });
    currency.forEach(function (el) {
      el.addEventListener("click", function () {
        document.querySelector(".website-currency").textContent =
          el.textContent;
      });
    });

    document
      .querySelector(".account-settings-name-id")
      .addEventListener("click", function () {
        // Get the text field
        var copyText = document.querySelector(
          ".account-settings-name-id-number"
        ).textContent;

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText);

        // Alert the copied text
        console.log("Copied the text: " + copyText);
      });
  }, []);
  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <nav className="nav">
            <a href="/" className="logo"></a>
            <a id="slideout-close" className="slideout-close" href="#">
              &times;
            </a>
            <div className="nav-list-links slideout-menu" id="slideout-menu">
              <ul className="nav-list">
                <li className="nav-list-item">
                  <a href="#">Exchange</a>
                </li>
                <li className="nav-list-item">
                  <a href="#">Market</a>
                </li>
                <li className="nav-list-item">
                  <a href="#">Support</a>
                </li>
                <li className="nav-list-item">
                  <a href="#">Buy crypto</a>
                </li>
                <li className="nav-list-item">
                  <a href="#">Rewards</a>
                </li>
              </ul>
              <ul className="nav-list nav-list-right">
                <li className="nav-list-item">
                  <a href="#">Sign In</a>
                </li>
                <li className="nav-list-item">
                  <a href="#" className="btn btn-blue-fill">
                    Get Started
                  </a>
                </li>
                <li className="nav-list-item account-settings-select">
                  <a href="#">
                    <img src={account} alt="" />
                  </a>

                  <div className="account-settings">
                    <div className="account-settings-id">
                      <div className="account-settings-avatar">
                        <span>as</span>
                      </div>
                      <div className="account-settings-name">
                        <span className="account-settings-name-email">
                          asd*****@gmail.com
                        </span>
                        <span className="account-settings-name-id">
                          UID:{" "}
                          <span className="account-settings-name-id-number">
                            0000000001
                          </span>
                        </span>
                      </div>
                    </div>
                    <ul className="account-settings-list">
                      <li>
                        <a href="#">
                          <img src={accountInfo} alt="" /> Account information
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={accountSecurity} alt="" /> Security Settings
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={accountVerification} alt="" /> Verification
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={accountReferrals} alt="" /> Referrals
                        </a>
                      </li>
                    </ul>
                    <ul className="account-settings-list">
                      <li>
                        <a href="#">
                          <img src={accountLogout} alt="" /> Log Out
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-list-item website-settings-select">
                  <a href="#">
                    <span className="website-language">English</span>{" "}
                    <span className="text-lightgrey">/</span>{" "}
                    <span className="text-lightgrey website-currency">USD</span>
                  </a>
                  <form action="" className="website-settings-choice">
                    <div className="website-settings-col">
                      <span className="website-settings-heading">Language</span>
                      <ul className="website-settings-list">
                        <li>
                          <label className="form-label website-settings-lang">
                            English
                            <input type="radio" name="lang" />
                            <span className="form-label-checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label className="form-label website-settings-lang">
                            Deutsch
                            <input type="radio" name="lang" />
                            <span className="form-label-checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label className="form-label website-settings-lang">
                            Français
                            <input type="radio" name="lang" />
                            <span className="form-label-checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label className="form-label website-settings-lang">
                            한국어
                            <input type="radio" name="lang" />
                            <span className="form-label-checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label className="form-label website-settings-lang">
                            Español
                            <input type="radio" name="lang" />
                            <span className="form-label-checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label className="form-label website-settings-lang">
                            Türkçe
                            <input type="radio" name="lang" />
                            <span className="form-label-checkmark"></span>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className="website-settings-col">
                      <span className="website-settings-heading">Currency</span>
                      <ul className="website-settings-list">
                        <li>
                          <label className="form-label website-settings-currency">
                            USD
                            <input type="radio" name="currency" />
                            <span className="form-label-checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label className="form-label website-settings-currency">
                            EUR
                            <input type="radio" name="currency" />
                            <span className="form-label-checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label className="form-label website-settings-currency">
                            GBR
                            <input type="radio" name="currency" />
                            <span className="form-label-checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label className="form-label website-settings-currency">
                            JPY
                            <input type="radio" name="currency" />
                            <span className="form-label-checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label className="form-label website-settings-currency">
                            KRW
                            <input type="radio" name="currency" />
                            <span className="form-label-checkmark"></span>
                          </label>
                        </li>
                        <li>
                          <label className="form-label website-settings-currency">
                            CNY
                            <input type="radio" name="currency" />
                            <span className="form-label-checkmark"></span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
          </nav>
          <a id="slideout-toggle" className="slideout-toggle" href="#">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </header>
      <section className="intro-section">
        <div className="container">
          <div className="intro-row">
            <div className="intro-col">
              <h1 className="h1-heading">
                Begin your Crypto Trading Journey Now!
              </h1>
              <p className="text text-big text-lightgrey">
                Better trading Better life
              </p>
              <div className="btn-group">
                <a href="/" className="btn btn-blue-fill">
                  Get Started
                </a>
                <a href="/" className="btn btn-white">
                  Spot
                </a>
              </div>
            </div>
            <div className="intro-col">
              <div className="swiper intro-swiper">
                <div className="swiper-wrapper intro-swiper-wrapper">
                  <div className="swiper-slide intro-swiper-slide">
                    <img src={slide1} alt="" />
                  </div>
                  <div className="swiper-slide intro-swiper-slide">
                    <img src={slide2} alt="" />
                  </div>
                </div>
                <div className="swiper-button-prev intro-swiper-button-prev"></div>
                <div className="swiper-button-next intro-swiper-button-next"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="table-section">
        <div className="container">
          <div className="table-wrapper">
            <div className="table-above-text">
              <a href="" className="hot-link">
                (Individual Competition) Introductio
              </a>
              <a href="" className="hot-link">
                Kudx Launches Global Innovation Z
              </a>
              <a href="">Announcement on the Suspension of D</a>
              <a href="" className="more-link">
                More
              </a>
            </div>
            <div className="table-container">
              <div className="tabs-nav">
                <a href="#usdt" data-tab="usdt" className="b-nav-tab active">
                  USDT
                </a>
                <a href="#usdc" data-tab="usdc" className="b-nav-tab">
                  USDC
                </a>
                <a href="#btc" data-tab="btc" className="b-nav-tab">
                  BTC
                </a>
              </div>
              <div id="usdt" className="b-tab active">
                <table className="table">
                  <tbody>
                    <tr>
                      <th className="table-heading">Futures</th>
                      <th className="table-heading">Last Price</th>
                      <th className="table-heading">24H Change</th>
                      <th className="table-heading">24H Low</th>
                      <th className="table-heading">24H High</th>
                      <th className="table-heading">24H VOL</th>
                    </tr>
                    <tr>
                      <td className="table-item">
                        BTC/<span className="text-darkblue">USDT</span>
                      </td>
                      <td className="table-item">
                        21,852.07{" "}
                        <span className="text-darkblue">$21,857.97</span>
                      </td>
                      <td className="table-item">
                        <span className="profit-badge">+7.37%</span>
                      </td>
                      <td className="table-item">21,210.57</td>
                      <td className="table-item">22,077.92</td>
                      <td className="table-item">72,992,921.92</td>
                    </tr>
                    <tr>
                      <td className="table-item">
                        BTC/<span className="text-darkblue">USDT</span>
                      </td>
                      <td className="table-item">
                        21,852.07{" "}
                        <span className="text-darkblue">$21,857.97</span>
                      </td>
                      <td className="table-item">
                        <span className="profit-badge decrease">+7.37%</span>
                      </td>
                      <td className="table-item">21,210.57</td>
                      <td className="table-item">22,077.92</td>
                      <td className="table-item">72,992,921.92</td>
                    </tr>
                    <tr>
                      <td className="table-item">
                        BTC/<span className="text-darkblue">USDT</span>
                      </td>
                      <td className="table-item">
                        21,852.07{" "}
                        <span className="text-darkblue">$21,857.97</span>
                      </td>
                      <td className="table-item">
                        <span className="profit-badge decrease">+7.37%</span>
                      </td>
                      <td className="table-item">21,210.57</td>
                      <td className="table-item">22,077.92</td>
                      <td className="table-item">72,992,921.92</td>
                    </tr>
                    <tr>
                      <td className="table-item">
                        BTC/<span className="text-darkblue">USDT</span>
                      </td>
                      <td className="table-item">
                        21,852.07{" "}
                        <span className="text-darkblue">$21,857.97</span>
                      </td>
                      <td className="table-item">
                        <span className="profit-badge">+7.37%</span>
                      </td>
                      <td className="table-item">21,210.57</td>
                      <td className="table-item">22,077.92</td>
                      <td className="table-item">72,992,921.92</td>
                    </tr>
                    <tr>
                      <td className="table-item">
                        BTC/<span className="text-darkblue">USDT</span>
                      </td>
                      <td className="table-item">
                        21,852.07{" "}
                        <span className="text-darkblue">$21,857.97</span>
                      </td>
                      <td className="table-item">
                        <span className="profit-badge decrease">+7.37%</span>
                      </td>
                      <td className="table-item">21,210.57</td>
                      <td className="table-item">22,077.92</td>
                      <td className="table-item">72,992,921.92</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="usdc" className="b-tab">
                <table className="table">
                  <tbody>
                    <tr>
                      <th className="table-heading">Futures</th>
                      <th className="table-heading">Last Price</th>
                      <th className="table-heading">24H Change</th>
                      <th className="table-heading">24H Low</th>
                      <th className="table-heading">24H High</th>
                      <th className="table-heading">24H VOL</th>
                    </tr>
                    <tr>
                      <td className="table-item">
                        BTC/<span className="text-darkblue">USDC</span>
                      </td>
                      <td className="table-item">
                        21,852.07{" "}
                        <span className="text-darkblue">$21,857.97</span>
                      </td>
                      <td className="table-item">
                        <span className="profit-badge">+7.37%</span>
                      </td>
                      <td className="table-item">21,210.57</td>
                      <td className="table-item">22,077.92</td>
                      <td className="table-item">72,992,921.92</td>
                    </tr>
                    <tr>
                      <td className="table-item">
                        BTC/<span className="text-darkblue">USDC</span>
                      </td>
                      <td className="table-item">
                        21,852.07{" "}
                        <span className="text-darkblue">$21,857.97</span>
                      </td>
                      <td className="table-item">
                        <span className="profit-badge decrease">+7.37%</span>
                      </td>
                      <td className="table-item">21,210.57</td>
                      <td className="table-item">22,077.92</td>
                      <td className="table-item">72,992,921.92</td>
                    </tr>
                    <tr>
                      <td className="table-item">
                        BTC/<span className="text-darkblue">USDC</span>
                      </td>
                      <td className="table-item">
                        21,852.07{" "}
                        <span className="text-darkblue">$21,857.97</span>
                      </td>
                      <td className="table-item">
                        <span className="profit-badge decrease">+7.37%</span>
                      </td>
                      <td className="table-item">21,210.57</td>
                      <td className="table-item">22,077.92</td>
                      <td className="table-item">72,992,921.92</td>
                    </tr>
                    <tr>
                      <td className="table-item">
                        BTC/<span className="text-darkblue">USDC</span>
                      </td>
                      <td className="table-item">
                        21,852.07{" "}
                        <span className="text-darkblue">$21,857.97</span>
                      </td>
                      <td className="table-item">
                        <span className="profit-badge">+7.37%</span>
                      </td>
                      <td className="table-item">21,210.57</td>
                      <td className="table-item">22,077.92</td>
                      <td className="table-item">72,992,921.92</td>
                    </tr>
                    <tr>
                      <td className="table-item">
                        BTC/<span className="text-darkblue">USDC</span>
                      </td>
                      <td className="table-item">
                        21,852.07{" "}
                        <span className="text-darkblue">$21,857.97</span>
                      </td>
                      <td className="table-item">
                        <span className="profit-badge decrease">+7.37%</span>
                      </td>
                      <td className="table-item">21,210.57</td>
                      <td className="table-item">22,077.92</td>
                      <td className="table-item">72,992,921.92</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="btc" className="b-tab">
                <table className="table">
                  <tbody>
                    <tr>
                      <th className="table-heading">Futures</th>
                      <th className="table-heading">Last Price</th>
                      <th className="table-heading">24H Change</th>
                      <th className="table-heading">24H Low</th>
                      <th className="table-heading">24H High</th>
                      <th className="table-heading">24H VOL</th>
                    </tr>
                    <tr>
                      <td className="table-item">
                        BTC/<span className="text-darkblue">BTC</span>
                      </td>
                      <td className="table-item">
                        21,852.07{" "}
                        <span className="text-darkblue">$21,857.97</span>
                      </td>
                      <td className="table-item">
                        <span className="profit-badge">+7.37%</span>
                      </td>
                      <td className="table-item">21,210.57</td>
                      <td className="table-item">22,077.92</td>
                      <td className="table-item">72,992,921.92</td>
                    </tr>
                    <tr>
                      <td className="table-item">
                        BTC/<span className="text-darkblue">BTC</span>
                      </td>
                      <td className="table-item">
                        21,852.07{" "}
                        <span className="text-darkblue">$21,857.97</span>
                      </td>
                      <td className="table-item">
                        <span className="profit-badge decrease">+7.37%</span>
                      </td>
                      <td className="table-item">21,210.57</td>
                      <td className="table-item">22,077.92</td>
                      <td className="table-item">72,992,921.92</td>
                    </tr>
                    <tr>
                      <td className="table-item">
                        BTC/<span className="text-darkblue">BTC</span>
                      </td>
                      <td className="table-item">
                        21,852.07{" "}
                        <span className="text-darkblue">$21,857.97</span>
                      </td>
                      <td className="table-item">
                        <span className="profit-badge decrease">+7.37%</span>
                      </td>
                      <td className="table-item">21,210.57</td>
                      <td className="table-item">22,077.92</td>
                      <td className="table-item">72,992,921.92</td>
                    </tr>
                    <tr>
                      <td className="table-item">
                        BTC/<span className="text-darkblue">BTC</span>
                      </td>
                      <td className="table-item">
                        21,852.07{" "}
                        <span className="text-darkblue">$21,857.97</span>
                      </td>
                      <td className="table-item">
                        <span className="profit-badge">+7.37%</span>
                      </td>
                      <td className="table-item">21,210.57</td>
                      <td className="table-item">22,077.92</td>
                      <td className="table-item">72,992,921.92</td>
                    </tr>
                    <tr>
                      <td className="table-item">
                        BTC/<span className="text-darkblue">BTC</span>
                      </td>
                      <td className="table-item">
                        21,852.07{" "}
                        <span className="text-darkblue">$21,857.97</span>
                      </td>
                      <td className="table-item">
                        <span className="profit-badge decrease">+7.37%</span>
                      </td>
                      <td className="table-item">21,210.57</td>
                      <td className="table-item">22,077.92</td>
                      <td className="table-item">72,992,921.92</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="app-section">
        <div className="container">
          <div className="app-row">
            <div className="app-col">
              <h2 className="h2-heading">Trade on the go</h2>
              <p className="text text-big">
                Extraordinary trading experience on mobile
              </p>
              <p className="text text-lightgrey">
                Download now to get easy access to the secure digital financial
                service.
              </p>
              <div className="app-get">
                <div className="app-link-container">
                  <a href="" className="app-link">
                    <img src={ios} className="" alt="" />
                    <span className="app-link-text">
                      <span>Scan to download</span>
                      <b>iOS App</b>
                    </span>
                  </a>
                  <a href="" className="app-link">
                    <img src={android} className="" alt="" />
                    <span className="app-link-text">
                      <span>Scan to download</span>
                      <b>Android App</b>
                    </span>
                  </a>
                </div>
                <div className="app-qr">
                  <img src={qr} className="app-qr-img" alt="" />
                </div>
              </div>
            </div>
            <div className="app-col">
              <img src={screens} className="app-screens" alt="logo" />
            </div>
          </div>
        </div>
      </section>
      <section className="partner-section">
        <div className="container">
          <div className="partner-row">
            <img src={capital} className="partner-row-img" alt="" />
            <img src={snk} className="partner-row-img" alt="" />
            <img src={anlan} className="partner-row-img" alt="" />
          </div>
        </div>
      </section>
      <section className="subscribe-section">
        <div className="container">
          <h2 className="h2-heading">
            Join traders around the world and reshape your finances
          </h2>
          <form action="" className="subscribe-form">
            <input
              type="email"
              className="form-input"
              placeholder="Enter email address"
            />
            <input
              type="submit"
              className="btn btn-white-fill"
              value="Get started"
            />
          </form>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer-row">
            <div className="footer-col-logo">
              <img src={logo} className="footer-logo" alt="logo" />
            </div>
            <div className="footer-col">
              <h6 className="h6-heading">About Us</h6>
              <div className="footer-link">
                <a href="/">About Coinwan</a>
                <a href="/">Careers</a>
                <a href="/">Business Contacts</a>
              </div>
            </div>
            <div className="footer-col">
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
            <div className="footer-col">
              <h6 className="h6-heading">Service</h6>
              <div className="footer-link">
                <a href="/">Help Center</a>
                <a href="/">Fees</a>
                <a href="/">Referrals</a>
                <a href="/">API Service</a>
              </div>
            </div>
            <div className="footer-col">
              <h6 className="h6-heading">Support</h6>
              <div className="footer-link">
                <a href="/">Submit a Request</a>
                <a href="/">Knowledge Base</a>
              </div>
            </div>
            <div className="footer-col">
              <h6 className="h6-heading">Community</h6>
              <div className="footer-link social-icons">
                <a href="/">
                  <img src={fb} alt="" />
                </a>
                <a href="/">
                  <img src={twitter} alt="" />
                </a>
                <a href="/">
                  <img src={github} alt="" />
                </a>
                <a href="/">
                  <img src={reddit} alt="" />
                </a>
                <a href="/">
                  <img src={medium} alt="" />
                </a>
                <a href="/">
                  <img src={steemit} alt="" />
                </a>
              </div>
              <h6 className="h6-heading">Community</h6>
              <div className="footer-link">
                <span>
                  Support Service：
                  <a href="mailto:support@kudx.com">support@kudx.com</a>
                </span>
                <span>
                  Token Listings：
                  <a href="mailto:listing@kudx.com">listing@kudx.com</a>
                </span>
                <span>
                  Business Offers：
                  <a href="mailto:business@kudx.com">business@kudx.com</a>
                </span>
              </div>
              <h6 className="h6-heading">Volume (24H)</h6>
              <div className="footer-link">
                <span>107,354,400.29 USDT 107,383,385.98 USD</span>
                <span>
                  Token Listings：
                  <a href="mailto:listing@kudx.com">listing@kudx.com</a>
                </span>
                <span>2022-09-15 04:54:51 (GMT+0) 30.7ms</span>
              </div>
            </div>
          </div>
          <p className="copyright-text">
            © 2022 KU DIGITAL SOLUTIONS LIMITED. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
