"use client";

import { Alert, AlertColor, Snackbar } from "@mui/material";
import { createContext, ReactNode, useEffect, useState } from "react";

interface IToastContext {
  showToast: (message: string, severity?: AlertColor) => void;
}

export const ToastContext = createContext<IToastContext | null>(null);

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<{
    message: string;
    severity: AlertColor;
  }>({
    message: "",
    severity: "success",
  });

  const showToast = (message: string, severity: AlertColor = "success") => {
    setToast({ message, severity });
  };

  useEffect(() => {
    let timeOut: NodeJS.Timeout;

    if (toast.message) {
      timeOut = setTimeout(() => {
        setToast((prev) => ({ ...prev, message: "" }));
      }, 3000);
    }

    return () => {
      if (timeOut) clearTimeout(timeOut);
    };
  }, [toast.message]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Snackbar
        open={Boolean(toast.message)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={toast?.severity} variant="filled">
          {toast?.message}
        </Alert>
      </Snackbar>

      {children}
    </ToastContext.Provider>
  );
}
