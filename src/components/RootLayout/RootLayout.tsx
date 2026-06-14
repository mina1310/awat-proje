// import React from "react";
// import Header from "../Header/Header";
// import Sidebar from "../Sidebar/Sidebar";
// import { Outlet } from "react-router-dom";
// import { Box, Container } from "@mui/material";

// const RootLayout: React.FC = () => {
//   return (
//     <Box sx={{ display: "flex", direction: "rtl" }}>
//       <Header />
//       <Sidebar />
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           mt: "64px",
//           backgroundColor: "#f7f7f7",
//           minHeight: "calc(100vh - 64px)",
//           overflow: "auto",
//         }}
//       >
//         <Container
//           maxWidth="lg"
//           sx={{
//             py: 3,
//             px: { xs: 2, sm: 3, md: 4 },
//           }}
//         >
//           <Outlet />
//         </Container>
//       </Box>
//     </Box>
//   );
// };
// export default RootLayout;

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
