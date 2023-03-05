import { createTheme } from "@mui/material/styles";
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

export const theme = createTheme({
  palette: {
    primary: createColor('#5a2e98'),
    secondary: createColor('#1c1c1c'),
    purple: createColor('#6f42c1'),
    light: createColor('#ccc')
  }
});