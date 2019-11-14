import React from 'react';
import { TiUser, TiFolder, TiBook, TiWorld } from 'react-icons/ti';
import { FaLongArrowAltRight } from 'react-icons/fa';

export default function Services() {
  return (
    <div className="icon-boxes">
      <div className="container-fluid">
        <div className="flex flex-wrap align-items-stretch">
          <div className="icon-box">
            <div className="icon">
              <TiUser />
            </div>

            <header className="entry-header">
              <h2 className="entry-title">Learn From The Experts</h2>
            </header>

            <div className="entry-content">
              <p>
                Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humour.
              </p>
            </div>

            <footer className="entry-footer read-more">
              <a href="#!">
                read more <FaLongArrowAltRight />
              </a>
            </footer>
          </div>

          <div className="icon-box">
            <div className="icon">
              <TiFolder />
            </div>

            <header className="entry-header">
              <h2 className="entry-title">ML Service</h2>
            </header>

            <div className="entry-content">
              <p>
                Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humour.
              </p>
            </div>

            <footer className="entry-footer read-more">
              <a href="#!">
                read more <FaLongArrowAltRight />
              </a>
            </footer>
          </div>

          <div className="icon-box">
            <div className="icon">
              <TiBook />
            </div>

            <header className="entry-header">
              <h2 className="entry-title">Data Driven Solution</h2>
            </header>

            <div className="entry-content">
              <p>
                Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humour.
              </p>
            </div>

            <footer className="entry-footer read-more">
              <a href="#!">
                read more <FaLongArrowAltRight />
              </a>
            </footer>
          </div>

          <div className="icon-box">
            <div className="icon">
              <TiWorld />
            </div>

            <header className="entry-header">
              <h2 className="entry-title">Educational Solutions</h2>
            </header>

            <div className="entry-content">
              <p>
                Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humour.
              </p>
            </div>

            <footer className="entry-footer read-more">
              <a href="#!">
                read more <FaLongArrowAltRight />
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
