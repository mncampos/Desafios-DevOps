import { Typography } from "@mui/material";
export function Logo() {
  return (
    <Typography
      variant="h4"
      component="a"
      href="/"
      sx={{
        mr: 2,
        fontFamily: "Open Sans",
        fontWeight: 700,
        letterSpacing: "rem",
        color: "#6f42c1",
        textDecoration: "none",
      }}
    >
      ANI
      <Typography
        variant="h4"
        component='span'
        sx={{
          mr: 2,
          fontFamily: "Open Sans",
          fontWeight: 700,
          color: "#ccc",
          textDecoration: "none",
        }}
      >
        CRESCER
      </Typography>
    </Typography>
  );
}
