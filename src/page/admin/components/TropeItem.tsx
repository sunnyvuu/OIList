import Checkbox from "@mui/material/Checkbox/Checkbox";
import { Trope } from "../../../interfaces/trope";
import { boolToString } from "../../../util";

function TropeItemRow({ name, is_spoiler, description }: Trope) {
  return (
    <tr className="tropeItem">
      <td className="select-box">
        <Checkbox />
      </td>
      <td className="trope-name">{name}</td>
      <td className="is-spoiler">{boolToString(is_spoiler)}</td>
      <td className="trope-descript">{description}</td>
    </tr>
  );
}

export default TropeItemRow;
