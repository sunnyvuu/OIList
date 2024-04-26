import TropeItem from "./components/TropeItem";
import "./AdminPage.css";
import data from "./tropedata.json";
import Button from "../../components/Button";

function AdminPage() {
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
            {data.map((item, index) => (
              <TropeItem
                key={index}
                tropeName={item.tropeName}
                isSpoiler={item.isSpoiler}
                tropeDescription={item.tropeDescription}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminPage;
