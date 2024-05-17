import { useState } from "react";
import Button from "../../shared-components/Button";
import TropeTable from "./components/TropeTable";
import "./AdminPage.css";
import AddTropeForm from "./components/AddTropeForm";

function AdminPage() {
  const [viewAddTrope, setViewAddTrope] = useState(false);

  function handleViewAddTrope() {
    if (viewAddTrope) {
      setViewAddTrope(false);
    } else {
      setViewAddTrope(true);
    }
  }

  return (
    <div className="admin-pg">
      <h2> ADMIN PORTAL </h2>

      <div className="admin-body">
        <div>
          <div className="table-header">
            {" "}
            <div className="table-title"> Trope Table :3c </div>
            <div className="btns">
              {" "}
              <Button value={"Add Trope"} onClick={handleViewAddTrope} />
            </div>
          </div>
          <TropeTable />
        </div>

        {viewAddTrope && <AddTropeForm onClick={handleViewAddTrope} />}
      </div>
    </div>
  );
}

export default AdminPage;
