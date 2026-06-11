// import { Box, Tab, Tabs } from "@mui/material";
// import React from "react";

// import { NavLink, Outlet, useLocation } from "react-router-dom";

// const OrganizationChartPage: React.FC = () => {
//   const location = useLocation();
//   const currentLocation = location.pathname.includes("/personal")
//     ? "personal"
//     : "position";
//   return (
//     <Box>
//       <Tabs value={currentLocation}>
//         <Tab
//           label="چارت سازمانی"
//           value="position"
//           component={NavLink}
//           to="position"
//           sx={{
//             fontWeight: 600,
//             color: "#4a5568",
//           }}
//         />
//         <Tab
//           label="چارت پرسنلی"
//           value="personal"
//           component={NavLink}
//           to="personal"
//           sx={{
//             fontWeight: 600,
//             color: "#4a5568",
//           }}
//         />
//       </Tabs>

//       <Outlet />
//     </Box>
//   );
// };
// export default OrganizationChartPage;

import { Box, Tab, Tabs } from "@mui/material";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import styles from "./OrganizationChartPage.module.scss";

const OrganizationChartPage = () => {
  const location = useLocation();

  const currentTab = location.pathname.includes("/personal")
    ? "personal"
    : "position";

  return (
    <Box className={styles.wrapper}>
      <Tabs value={currentTab}>
        <Tab
          label="چارت سازمانی"
          value="position"
          component={NavLink}
          to="position"
        />

        <Tab
          label="چارت پرسنلی"
          value="personal"
          component={NavLink}
          to="personal"
        />
      </Tabs>

      <Box className={styles.content}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default OrganizationChartPage;
