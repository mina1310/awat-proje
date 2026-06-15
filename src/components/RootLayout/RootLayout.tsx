import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import styles from "./RootLayout.module.scss";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

export const RootLayout = () => {
  return (
    <Box className={styles.layout}>
      <Header />
      <Sidebar />
      <Box component="main" className={styles.main}>
        <Container maxWidth="lg" className={styles.content}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};
