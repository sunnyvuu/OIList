import { useEffect, useState } from "react";
import { getTropes } from "../../services/trope.service";
import TropeItem from "./components/TropeItem";
import Button from "../../shared-components/Button";
import { Trope } from "../../interfaces/trope";
import "./AdminPage.css";

function AdminPage() {
  const [data, setData] = useState<Trope[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const tropeData = await getTropes();
      setData(tropeData);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2> ADMIN PORTAL </h2>
      <div className="btns">
        {" "}
        <Button value={"Add Trope"} />
        <Button value={"Delete Trope(s)"} />
        <Button value={"Edit Trope"} />
      </div>

      <div className="table">
        {" "}
        <table className="table-responsive">
          <thead>
            <tr>
              <th className="select-box">Select</th>
              <th className="trope-name">Trope Name</th>
              <th className="is-spoiler">Spoiler</th>
              <th className="trope-descript">Description</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through your data and create a row for each item */}
            {data.map((item, id) => (
              <TropeItem
                key={id}
                name={item.name}
                is_spoiler={item.is_spoiler}
                description={item.description}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminPage;
