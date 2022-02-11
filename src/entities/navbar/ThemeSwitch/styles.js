import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

export const MaterialUISwitch = styled(Switch)(() => ({
  width: 78,
  height: 58,
  marginTop: "0 !important",
  marginBottom: "0 !important",
  "@media (max-width: 577px)": {
    width: 58,
    height: 55,
    marginRight: "-10px !important",
    marginLeft: "0px !important",
  },
  "& .MuiSwitch-switchBase": {
    top: "10px",
    margin: 1,
    padding: 0,
    transform: "translateX(10px)",
    "@media (max-width: 577px)": {
      margin: 0,
    },

    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(30px)",
      "@media (max-width: 577px)": {
        transform: "translateX(10px)",
      },
      "& .MuiSwitch-thumb:before": {
        borderRadius: "50%",
        backgroundImage: `url("https://i.ibb.co/jH4yCGj/sun.png")`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#bbbbbb",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 35,
    height: 35,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url("https://i.ibb.co/JszLjKV/moon-1.png")`,
      borderRadius: "50%",
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#bbbbbb",
    borderRadius: "30px",
  },
}));
