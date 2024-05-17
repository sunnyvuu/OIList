import { useEffect, useState } from "react";
import { Manhwa } from "../../../interfaces/manhwa";
import { getManhwas } from "../../../services/manhwa.service";
import ManhwaCard from "./ManhwaCard";
import "../Manhwas.css";

function Manhwas() {
  const [manhwas, setManhwas] = useState<Manhwa[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const manhwaData = await getManhwas();
      setManhwas(manhwaData);
    };
    fetchData();
  }, []);

  return (
    <div className="manhwa-display">
      {" "}
      {manhwas.length > 0 ? (
        manhwas.map((manhwa) => (
          <div key={manhwa.manhwa_id}>
            <ManhwaCard
              title={manhwa.title}
              img_url={manhwa.img_url}
              synopsis={manhwa.synopsis}
            />{" "}
          </div>
        ))
      ) : (
        <p> naur manhwas </p>
      )}
    </div>
  );
}

export default Manhwas;
