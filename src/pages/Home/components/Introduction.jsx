import React from "react";

const Introduction = () => (
  <div className="introduction mb-5">
    <h2 className="mb-5">Welcome,</h2>

    <p>
      The Hyper Progame is the world’s premier event for computer and video
      games and related products. At The Hyper Progame, the video game
      industry’s top talent pack the Los Angeles Convention Center, connecting
      tens of thousands of the best, brightest, and most innovative in the
      interactive entertainment industry. For three exciting days, leading-edge
      companies, groundbreaking new technologies, and never-before-seen products
      will be showcased. The Hyper Progame connects you with both new and
      existing partners, industry executives, gamers, and social influencers
      providing unprecedented exposure.
    </p>

    <div className="select-platform">
      <select id="selectPlatform">
        <option selected value="">
          Platform : Any{" "}
        </option>
      </select>
      <i className="fas fa-caret-down"></i>
    </div>
  </div>
);

export default Introduction;
