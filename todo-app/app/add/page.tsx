"use client";
import { useToast } from "@/components/utils/useToast";
import { Box, Button, Input, Typography } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { AddTask } from "./actions/TaskActions";
import { useRouter } from "next/navigation";

export default function AddPage() {
  const [taskName, setTaskName] = useState("");
  const router = useRouter();
  const { showToast } = useToast();
  const handleSubmit = async (e: SyntheticEvent) => {
    try {
      e.preventDefault();
      setTaskName("");
      await AddTask({ id: ` ${Math.random() * 1000}`, name: taskName });
      showToast("Form has been submitted", "success");
      router.push("/");
    } catch {
      showToast("Failed to submit Task", "error");
    }
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
