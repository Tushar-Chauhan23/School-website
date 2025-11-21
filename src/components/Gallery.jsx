// import React from 'react';
import '../css/GalleryPage.css';
import tour from "../assets/tour.mp4"
import annual from "../assets/videoplayback.mp4"
import library from "../assets/library.jpg"
import samantha from "../assets/samantha-gades.jpg"
import classroom from "../assets/classroom.jpg"
import science from  "../assets/scienceexp.jpg"
import sports from  "../assets/sportsday.jpg"
const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <header className="header">
        <h1>Gallery</h1>
      </header>
      <section className="gallery">
        <div className="photos">
          <h2>Photos</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src={sports} alt="Students participating in various sports events" />
              <div className="overlay">
                <p>Students participating in various sports events.</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src={science} alt="Students presenting their science projects" />
              <div className="overlay">
                <p>Students presenting their science projects.</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src={samantha} alt="Students performing in the cultural fest" />
              <div className="overlay">
                <p>Students performing in the cultural fest.</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src={classroom} alt="A glimpse of our interactive classrooms" />
              <div className="overlay">
                <p>A glimpse of our interactive classrooms.</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src={library} alt="Students reading and studying in the school library" />
              <div className="overlay">
                <p>Students reading and studying in the school library.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="videos">
          <h2>Videos</h2>
          <div className="video-grid">
            <div className="video-item">
              <video autoPlay loop muted>
                <source src={tour} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-overlay">
                <p>Virtual tour of Bright Home Public School.</p>
              </div>
            </div>
            <div className="video-item">
              <video autoPlay loop muted>
                <source src={annual} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-overlay">
                <p>Highlights from the Annual Function 2023.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
