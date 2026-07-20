import { Box } from "@mui/material";
import Link from "next/link";

export default function Header() {
  return (
    <Box
      sx={{
        backgroundColor: "inherit",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link href={"/"} style={{ textDecoration: "none", fontSize: "2rem" }}>
        Home
      </Link>

      <Link href={"/add"} style={{ textDecoration: "none", fontSize: "2rem" }}>
        Add Task
      </Link>
    </Box>
  );
}
