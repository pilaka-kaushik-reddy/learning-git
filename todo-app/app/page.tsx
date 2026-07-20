import { Box, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      sx={{
        width: "100%",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h6">this is home page of Todo App</Typography>{" "}
    </Box>
  );
}
