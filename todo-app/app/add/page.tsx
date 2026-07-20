"use client";
import { useToast } from "@/components/utils/useToast";
import { Box, Button, FormControl, Input, Typography } from "@mui/material";
import { SyntheticEvent, useState } from "react";

export default function AddPage() {
  const [taskName, setTaskName] = useState("");
  const { showToast } = useToast();
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setTaskName("");
    showToast("Form has been submitted", "success");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        width: "100%",
        maxWidth: 400,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography sx={{ fontWeight: 500 }}>Task:</Typography>
        <Input
          type="text"
          value={taskName}
          name="task"
          onChange={(e) => setTaskName(e.target.value)}
          sx={{ flexGrow: 1 }}
        />
      </Box>

      <Box>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
}
