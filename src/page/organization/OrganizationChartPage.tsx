import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

import { NavLink, Outlet, useLocation } from "react-router-dom";

const OrganizationChartPage: React.FC = () => {
  const location = useLocation();
  const currentLocation = location.pathname.includes("/personal")
    ? "personal"
    : "position";
  return (
    <Box>
      <Tabs value={currentLocation}>
        <Tab
          label="چارت سازمانی"
          value="position"
          component={NavLink}
          to="position"
          sx={{
            fontWeight: 600,
            color: "#4a5568",
          }}
        />
        <Tab
          label="چارت پرسنلی"
          value="personal"
          component={NavLink}
          to="personal"
          sx={{
            fontWeight: 600,
            color: "#4a5568",
          }}
        />
      </Tabs>

      <Outlet />
    </Box>
  );
};
export default OrganizationChartPage;
