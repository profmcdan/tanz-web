import React, { Fragment } from 'react';

const Feature = () => {
  return (
    <section className="featured-courses horizontal-column courses-wrap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <header className="heading flex justify-content-between align-items-center">
              <h2 className="entry-title">Featured Courses</h2>

              <a className="btn mt-4 mt-sm-0" href="#!">
                view all
              </a>
            </header>
          </div>

          <div className="col-12 col-lg-6">
            <div className="course-content flex flex-wrap justify-content-between align-content-lg-stretch">
              <figure className="course-thumbnail">
                <a href="#!">
                  <img src="images/1.jpg" alt="" />
                </a>
              </figure>

              <div className="course-content-wrap">
                <header className="entry-header">
                  <div className="course-ratings flex align-items-center">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>

                    <span className="course-ratings-count">(4 votes)</span>
                  </div>

                  <h2 className="entry-title">
                    <a href="#!">The Complete Web Developer Course</a>
                  </h2>

                  <div className="entry-meta flex flex-wrap align-items-center">
                    <div className="course-author">
                      <a href="#!">Daniel Ale </a>
                    </div>

                    <div className="course-date">January 21, 2020</div>
                  </div>
                </header>

                <footer className="entry-footer flex justify-content-between align-items-center">
                  <div className="course-cost">
                    <span className="free-cost">Free</span>
                  </div>
                </footer>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="course-content flex flex-wrap justify-content-between align-content-lg-stretch">
              <figure className="course-thumbnail">
                <a href="#!">
                  <img src="images/2.jpg" alt=""></img>{' '}
                </a>
              </figure>

              <div className="course-content-wrap">
                <header className="entry-header">
                  <div className="course-ratings flex align-items-center">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>

                    <span className="course-ratings-count">(5 votes)</span>
                  </div>

                  <h2 className="entry-title">
                    <a href="#!">Learn Django, REST & GrapQL</a>
                  </h2>

                  <div className="entry-meta flex flex-wrap align-items-center">
                    <div className="course-author">
                      <a href="#!">Daniel Ale</a>
                    </div>

                    <div className="course-date">Aug 21, 2020</div>
                  </div>
                </header>

                <footer className="entry-footer flex justify-content-between align-items-center">
                  <div className="course-cost">
                    $32 <span className="price-drop">$59</span>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
