import React, { useState } from "react";
import "./scss/modal-video.scss";
const Movie = ({ id, name, image, info, rating, traillink }) => {
  const [readMore, setReadMore] = useState(false);
  const [isOpen, setOpen] = useState(false);

  /*   const playLink = () => {
    if (link) {
      setLink(
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="L61p2uyiMSo"
          onClose={() => setOpen(false)}
        />
      );
    } else {
      setLink("error");
    }
  }; */

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{rating}/10</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 150)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        {/* <h3>{link}</h3> */}
      </footer>
    </article>
  );
};

export default Movie;
