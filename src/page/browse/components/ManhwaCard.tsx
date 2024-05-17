import { useState } from "react";
import type { ManhwaCard } from "../../../interfaces/manhwa";

function ManhwaCard(props: ManhwaCard) {
  const { title, img_url, synopsis } = props;

  const [showMore, setShowMore] = useState(false);
  let data;

  if (synopsis != null) {
    data = synopsis;
  } else {
    data = "Naur synopsis";
  }

  return (
    <div className="manhwa-card">
      <h2> {title} </h2>
      <div className="manhwa-card-img-container">
        <img src={img_url} className="manhwa-card-img" />
      </div>
      <p>
        {" "}
        {showMore ? data : data.substring(0, 250)}...{" "}
        <button className="showMore-btn" onClick={() => setShowMore(!showMore)}>
          {" "}
          {showMore ? "show less" : "show more"}
        </button>
      </p>
    </div>
  );
}

export default ManhwaCard;
