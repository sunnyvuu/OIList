import type { ManhwaCard } from "../../../interfaces/manhwa";

function ManhwaCard(props: ManhwaCard) {
  const { title, img_url } = props;

  return (
    <div className="manhwa-card">
      <div className="manhwa-card-img-container">
        <img src={img_url} className="manhwa-card-img" />
      </div>
      <h4 className="manhwa-title"> {title} </h4>
    </div>
  );
}

export default ManhwaCard;
