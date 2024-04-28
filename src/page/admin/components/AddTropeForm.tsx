import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import FormGroup from "@mui/material/FormGroup";
import { styled } from "@mui/material/styles";
import { Fade } from "@mui/material";

import "../AdminPage.css";
import Btn from "../../../shared-components/Button";
interface buttonProps {
  onClick: () => void;
}
function AddTropeForm(props: buttonProps) {
  const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 150,
    },
  });

  //   const handleAddClick = () => {
  //     console.log("Add button clicked");
  //   };

  const handleDeleteClick = () => {
    console.log("Delete button clicked");
  };

  return (
    <div className="trope-form">
      <div className="form-title">EDITING TROPE NAME</div>

      <FormControl fullWidth margin="normal">
        <FormLabel>Name</FormLabel>
        <TextField
          label="Trope Name"
          size="small"
          fullWidth
          margin="normal"
          style={{ width: 250, marginBottom: 25 }}
        />
        <FormLabel>Description</FormLabel>
        <TextField
          label="Description"
          placeholder="Write a brief description."
          multiline
          fullWidth
          margin="normal"
          style={{ marginBottom: 25 }}
        />

        <div className="spoiler">
          <CustomWidthTooltip
            title="Does the detail emerges later in the narrative or is a plot twist?"
            arrow
            placement="top"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 300 }}
            sx={{ textAlign: "center" }}
          >
            <Button> Spoiler?</Button>
          </CustomWidthTooltip>

          <FormGroup>
            <Checkbox defaultChecked />
          </FormGroup>
        </div>

        <div className="form-btns">
          <Btn value={"Cancel"} onClick={props.onClick} />
          <Btn value={"Save"} onClick={handleDeleteClick} />
        </div>
      </FormControl>
    </div>
  );
}

export default AddTropeForm;
