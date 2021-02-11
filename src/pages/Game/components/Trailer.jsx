import React from "react";

const Trailer = ({ clip }) => (
  <div data-aos="fade-up" className="row">
    {clip && clip.clips.full && (
      <div className="col">
        <h2>TRAILER</h2>
        <div id="trailer" className="d-flex justify-content-center">
          <video controls src={clip.clips.full}>
            Trailer
          </video>
        </div>
      </div>
    )}
  </div>
);

export default Trailer;
