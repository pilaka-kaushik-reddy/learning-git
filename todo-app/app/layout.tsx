import type { Metadata } from "next";
import { Box, Paper } from "@mui/material";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToastProvider from "@/components/utils/ToastProvider";

export const metadata: Metadata = {
  title: "Todo App",
  description:
    "This is App allows you to add tasks and remove them once completed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Paper sx={{ m: 2, p: 2, backgroundColor: "#ccc", width: "95%" }}>
          <Header />
          <ToastProvider>
            <Box sx={{ height: "80vh" }}>{children}</Box>
          </ToastProvider>
          <Footer />
        </Paper>
      </body>
    </html>
  );
}
