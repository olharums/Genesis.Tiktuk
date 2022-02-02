import { FormControlLabel, FormGroup } from "@mui/material";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { MaterialUISwitch } from "./styles";

export const ThemeSwitch: FC<{ changeTheme: () => void }> = observer(
  ({ changeTheme }) => {
    const themeName = JSON.parse(
      window.localStorage.getItem("theme") || ""
    )?.name;

    return (
      <FormGroup>
        <FormControlLabel
          control={
            <MaterialUISwitch sx={{ m: 1 }} checked={themeName === "Light"} />
          }
          label=""
          onChange={changeTheme}
        />
      </FormGroup>
    );
  }
);
