import React from 'react';
import { FaMapMarker, FaCalendar } from 'react-icons/fa';
import eventOneImage from '../../images/event-1.jpg';
import eventTwoImage from '../../images/event-2.jpg';
import eventThreeImage from '../../images/event-3.jpg';

export default function News() {
  return (
    <section class="latest-news-events">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <header class="heading flex justify-content-between align-items-center">
              <h2 class="entry-title">Latest News & Events</h2>
            </header>
          </div>

          <div class="col-12 col-lg-6">
            <div class="featured-event-content">
              <figure class="event-thumbnail position-relative m-0">
                <a href="#!">
                  <img src={eventOneImage} alt="" />
                </a>

                <div class="posted-date position-absolute">
                  <div class="day">20</div>
                  <div class="month">Dec</div>
                </div>
              </figure>

              <header class="entry-header flex flex-wrap align-items-center">
                <h2 class="entry-title">
                  <a href="#!">
                    The Complete Financial Analyst Training & Investing Course
                  </a>
                </h2>

                <div class="event-location">
                  <FaMapMarker />
                  EKO Hotel and Suites, Lagos Island, Nigeria
                </div>

                <div class="event-duration">
                  <FaCalendar /> 20 Dec - 24 Dec
                </div>
              </header>
            </div>
          </div>

          <div class="col-12 col-lg-6 mt-5 mt-lg-0">
            <div class="event-content flex flex-wrap justify-content-between align-content-stretch">
              <figure class="event-thumbnail">
                <a href="#!">
                  <img src={eventTwoImage} alt="" />
                </a>
              </figure>

              <div class="event-content-wrap">
                <header class="entry-header">
                  <div class="posted-date">
                    <FaCalendar /> 22 Mar 2019
                  </div>

                  <h2 class="entry-title">
                    <a href="#!">Personalized online learning experience</a>
                  </h2>

                  <div class="entry-meta flex flex-wrap align-items-center">
                    <div class="post-author">
                      <a href="#!">Kehinde Adelugba </a>
                    </div>

                    <div class="post-comments">02 Comments </div>
                  </div>
                </header>

                <div class="entry-content">
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt.
                  </p>
                </div>
              </div>
            </div>

            <div class="event-content flex flex-wrap justify-content-between align-content-lg-stretch">
              <figure class="event-thumbnail">
                <a href="#!">
                  <img src={eventThreeImage} alt="" />
                </a>
              </figure>

              <div class="event-content-wrap">
                <header class="entry-header">
                  <div class="posted-date">
                    <FaCalendar /> 22 Oct 2019
                  </div>

                  <h2 class="entry-title">
                    <a href="#!">
                      Which investment project should my company choose?
                    </a>
                  </h2>

                  <div class="entry-meta flex flex-wrap align-items-center">
                    <div class="post-author">
                      <a href="#!">Akinwale Ibiyemi </a>
                    </div>

                    <div class="post-comments">02 Comments </div>
                  </div>
                </header>

                <div class="entry-content">
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
