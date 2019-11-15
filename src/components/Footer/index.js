import React, { Fragment } from 'react';
import logo from '../../images/logos/TANZ TECHNOLOGIES LTD-05.png';
import appStoreLogo from '../../images/app-store.png';
import playStoreLogo from '../../images/play-store.png';
import {
  FaFacebook,
  FaTwitter,
  FaGooglePlus,
  FaInstagram,
  FaHeart,
} from 'react-icons/fa';

export default function index() {
  return (
    <Fragment>
      <footer className="site-footer">
        <div className="footer-widgets">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="foot-about">
                  <a className="foot-logo" href="#!">
                    <img src={logo} height="60" width="120" alt="" />
                  </a>

                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia dese mollit anim id est laborum.
                  </p>

                  <p className="footer-copyright">
                    Copyright &copy;
                    <script>document.write(new Date().getFullYear());</script>
                    All rights reserved |
                    <FaHeart />
                    <a href="#!">Tanz Technologies Limited</a>
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                <div className="foot-contact">
                  <h2>Contact Us</h2>

                  <ul>
                    <li>Email: info@tanztechnologies.com</li>
                    <li>Phone: (+234) 813 1890 341</li>
                    <li>
                      Address: 11, Olaoluwa Ogundimu Street, Genesis Estate,
                      Ipaja, Lagos
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
                <div className="quick-links flex flex-wrap">
                  <h2 className="w-100">Quick Links</h2>

                  <ul className="w-50">
                    <li>
                      <a href="#!">About </a>
                    </li>
                    <li>
                      <a href="#!">Terms of Use </a>
                    </li>
                    <li>
                      <a href="#!">Privacy Policy </a>
                    </li>
                    <li>
                      <a href="#!">Contact Us</a>
                    </li>
                  </ul>

                  <ul className="w-50">
                    <li>
                      <a href="#!">Documentation</a>
                    </li>
                    <li>
                      <a href="#!">Forums</a>
                    </li>
                    <li>
                      <a href="#!">Language Packs</a>
                    </li>
                    <li>
                      <a href="#!">Release Status</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
                <div className="follow-us">
                  <h2>Follow Us</h2>

                  <ul className="follow-us flex flex-wrap align-items-center">
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://fb.me/tanztechnologies"
                      >
                        <FaFacebook size="2em" />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <FaGooglePlus size="2em" />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <FaInstagram size="2em" />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <FaTwitter size="2em" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bar">
          <div className="container">
            <div className="row flex-wrap justify-content-center justify-content-lg-between align-items-center">
              <div className="col-12 col-lg-6">
                <div className="download-apps flex flex-wrap justify-content-center justify-content-lg-start align-items-center">
                  <a href="#!">
                    <img src={appStoreLogo} alt="" />
                  </a>
                  <a href="#!">
                    <img src={playStoreLogo} alt="" />
                  </a>
                </div>
              </div>

              <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                <div className="footer-bar-nav">
                  <ul className="flex flex-wrap justify-content-center justify-content-lg-end align-items-center">
                    <li>
                      <a href="#!">DPA</a>
                    </li>
                    <li>
                      <a href="#!">Terms of Use</a>
                    </li>
                    <li>
                      <a href="#!">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
