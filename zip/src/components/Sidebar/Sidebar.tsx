import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import TaskIcon from "@mui/icons-material/Task";

import styles from "./Sidebar.module.scss";

const drawerWidth = 240;

const menuItems = [
  {
    path: "/dashboard",
    name: "داشبورد",
    icon: DashboardIcon,
  },
  {
    path: "/organizationChart",
    name: "ساختار سازمانی",
    icon: AccountTreeIcon,
  },
  {
    path: "/tasks",
    name: "کارها",
    icon: TaskIcon,
  },
];

export const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="right"
      className={styles.drawer}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
        },
      }}
    >
      <Box className={styles.container}>
        <Typography variant="subtitle1" className={styles.title}>
          منوی اصلی
        </Typography>

        <List className={styles.menu}>
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <ListItemButton
                key={item.path}
                component={NavLink}
                to={item.path}
              >
                <ListItemIcon className={styles.icon}>
                  <Icon />
                </ListItemIcon>

                <ListItemText primary={item.name} />
              </ListItemButton>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};
