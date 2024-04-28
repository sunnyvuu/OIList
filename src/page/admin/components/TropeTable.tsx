import { useEffect, useState } from "react";
import { getTropes } from "../../../services/trope.service";
import { Trope } from "../../../interfaces/trope";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../AdminPage.css";
import { boolToString } from "../../../util";

function TropeTable() {
  const [data, setData] = useState<Trope[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const tropeData = await getTropes();
      setData(tropeData);
    };
    fetchData();
  }, []);

  const StyledTableRow = styled(TableRow)(() => ({
    "&:nth-of-type(even)": {
      backgroundColor: "#fcf7f7",
    },
  }));
  return (
    <>
      <div className="table">
        <TableContainer
          component={Paper}
          sx={{
            minWidth: 650,
            maxWidth: 800,
            border: 1,
            borderColor: "#c47a7a",
            borderRadius: 2,
          }}
        >
          <Table
            sx={{ minWidth: 650, maxWidth: 900 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell> Name </TableCell>
                <TableCell align="left">Spoiler</TableCell>
                <TableCell align="left"> Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((trope, id) => (
                <StyledTableRow
                  key={id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={{ width: 150 }}>
                    {trope.name}
                  </TableCell>
                  <TableCell sx={{ width: 50, alignItems: "center" }}>
                    {boolToString(trope.is_spoiler)}
                  </TableCell>
                  <TableCell align="left">{trope.description}</TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {/* <div className="table">
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
      </div> */}
    </>
  );
}

export default TropeTable;
