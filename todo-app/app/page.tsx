"use client";
import { useToast } from "@/components/utils/useToast";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { deleteTask, getTask } from "./add/actions/TaskActions";

export interface ITaskInfo {
  id: string;
  name: string;
}
export default function HomePage() {
  const [taskData, setTaskData] = useState<ITaskInfo[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [deletedId, setDeletedId] = useState<string>("");
  const { showToast } = useToast();
  const fetchData = async () => {
    const data = await getTask();
    setTaskData(data);
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteTask(id);
      await fetchData();
      showToast("Sucessfully Delete Task", "success");
      handleCloseModal();
    } catch {
      showToast("Failed to  Delete Task", "error");
    }
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <Box>
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
      {taskData?.map((task) => {
        return (
          <Box
            key={task?.id}
            sx={{
              display: "flex",
              m: 2,
              gap: 2,
              alignItems: "center",
              width: "20%",
              justifyContent: "space-between",
            }}
          >
            <Typography>{task.name}</Typography>
            <Button
              onClick={() => {
                setOpen(true);
                setDeletedId(task?.id);
              }}
              variant="contained"
              color="error"
            >
              Done
            </Button>
          </Box>
        );
      })}
      <Dialog open={open} onClose={handleCloseModal}>
        <DialogTitle> Delete Task</DialogTitle>
        <DialogContent>
          <DialogContentText
            color="info"
            sx={{ fontWeight: "bold" }}
            id="alert-dialog-description"
          >
            Are you sure you want to delete this task?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="inherit"
            onClick={handleCloseModal}
            autoFocus
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleDelete(deletedId)}
            variant="contained"
            color="error"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
