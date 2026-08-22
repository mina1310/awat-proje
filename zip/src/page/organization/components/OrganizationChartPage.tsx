import { Box, Tab, Tabs } from "@mui/material";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import styles from "./OrganizationChartPage.module.scss";

export const OrganizationChartPage = () => {
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
