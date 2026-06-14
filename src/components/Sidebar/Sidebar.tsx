// import {
//   Box,
//   Drawer,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Typography,
// } from "@mui/material";
// import type React from "react";
// import { NavLink } from "react-router-dom";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import AccountTreeIcon from "@mui/icons-material/AccountTree";
// import TaskIcon from "@mui/icons-material/Task";

// const Sidebar: React.FC = () => {
//   const drawerWidth = 240;

//   const menuItems = [
//     { path: "/dashboard", name: "داشبورد", icon: DashboardIcon },
//     {
//       path: "/organizationChart",
//       name: "ساختار سازمانی",
//       icon: AccountTreeIcon,
//     },
//     { path: "/tasks", name: "کارها", icon: TaskIcon },
//   ];

//   return (
//     <Drawer
//       variant="permanent"
//       anchor="right"
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: drawerWidth,
//           boxSizing: "border-box",
//           bgcolor: "white",
//           borderLeft: "1px solid #9ea2a7",
//           borderRight: "none",
//           mt: "64px",
//           height: "calc(100% - 64px)",
//         },
//       }}
//     >
//       <Box sx={{ p: 2 }}>
//         <Typography
//           variant="subtitle1"
//           sx={{
//             fontWeight: 500,
//             color: "#4a5568",
//             textAlign: "center",
//             pb: 2,
//             mb: 1,
//             borderBottom: "1px solid #9ea2a7",
//           }}
//         >
//           منوی اصلی
//         </Typography>

//         <List sx={{ direction: "rtl" }}>
//           {menuItems.map((item) => {
//             const Icon = item.icon;
//             return (
//               <ListItemButton
//                 key={item.path}
//                 component={NavLink}
//                 to={item.path}
//                 sx={{
//                   borderRadius: 2,
//                   mb: 0.5,
//                   "&.active": {
//                     backgroundColor: "#1976d2",
//                     color: "white",
//                     "& .MuiListItemIcon-root": {
//                       color: "white",
//                     },
//                     "&:hover": {
//                       backgroundColor: "#1565c0",
//                     },
//                   },
//                   "&:hover": {
//                     backgroundColor: "#e2e8f0",
//                   },
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 25,
//                     color: "#4a5568",
//                   }}
//                 >
//                   <Icon />
//                 </ListItemIcon>
//                 <ListItemText primary={item.name} />
//               </ListItemButton>
//             );
//           })}
//         </List>
//       </Box>
//     </Drawer>
//   );
// };

// export default Sidebar;

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
                // className={({ isActive }) =>
                //   `${styles.menuItem} ${isActive ? styles.active : ""}`
                // }
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
