import React from 'react';

export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 align-content-lg-stretch">
            <header className="heading">
              <h2 className="entry-title">About Us</h2>

              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </p>
            </header>

            <div className="entry-content ezuca-stats">
              <div className="stats-wrap flex flex-wrap justify-content-lg-between">
                <div className="stats-count">
                  50<span>M+</span>
                  <p>STUDENTS LEARNING</p>
                </div>

                <div className="stats-count">
                  30<span>K+</span>
                  <p>ACTIVE COURSES</p>
                </div>

                <div className="stats-count">
                  340<span>M+</span>
                  <p>INSTRUCTORS ONLINE</p>
                </div>

                <div className="stats-count">
                  20<span>+</span>
                  <p>Country Reached</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 flex align-content-center mt-5 mt-lg-0">
            <div className="ezuca-video position-relative">
              <div className="video-play-btn position-absolute">
                <img src="images/video-icon.png" alt="Video Play" />
              </div>

              <img src="images/video-screenshot.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
