import Button from "../../shared-components/Button";
import TropeTable from "./components/TropeTable";
import "./AdminPage.css";
import AddTropeForm from "./components/AddTropeForm";

function AdminPage() {
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
              <Button value={"Add Trope"} />
              <Button value={"Delete Trope(s)"} />
              <Button value={"Edit Trope"} />
            </div>
          </div>
          <TropeTable />
        </div>

        <AddTropeForm />
      </div>
    </div>
  );
}

export default AdminPage;
