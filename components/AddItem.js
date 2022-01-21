import AddBoxIcon from "@material-ui/icons/AddBox"
import { styled } from "@mui/material/styles"
import Button from '@mui/material/Button';

const AddBoxIconWrapper = styled("div")(({ theme }) => ({
  // padding: theme.spacing(0, 2),
  height: "100%",
  // position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}))

export default function AddItemIcon() {
  return (
    <AddBoxIconWrapper>
      <Button variant="contained">
        <AddBoxIcon fontSize="Large" />
      </Button>
    </AddBoxIconWrapper>
  )
}
