import Checkbox from "@mui/material/Checkbox/Checkbox";

interface TropeItem {
  tropeName: string;
  isSpoiler: string;
  tropeDescription: string;
}

function TropeItemRow({ tropeName, isSpoiler, tropeDescription }: TropeItem) {
  return (
    <tr className="tropeItem">
      <td className="select-box">
        <Checkbox />
      </td>
      <td className="trope-name">{tropeName}</td>
      <td className="is-spoiler">{isSpoiler}</td>
      <td className="trope-descript">{tropeDescription}</td>
    </tr>
  );
}

export default TropeItemRow;
