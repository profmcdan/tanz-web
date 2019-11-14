import React from 'react';

export default function Overlay() {
  return (
    <div className="hero-content-overlay">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hero-content-wrap flex flex-column justify-content-center align-items-start">
              <header className="entry-header">
                <h4>Get started with tanz technologies</h4>
                <h1>
                  best technology
                  <br />
                  company in Africa
                </h1>
              </header>

              <div className="entry-content">
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium
                </p>
              </div>

              <footer className="entry-footer read-more">
                <a href="#!">read more</a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
