// import { AppBar, Avatar, Badge, Box, Toolbar, Typography } from "@mui/material";
// import CustomBreadCrumbs from "../CustomBreadcrumbs";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

// const Header = () => {
//   return (
//     <AppBar
//       position="fixed"
//       sx={{
//         zIndex: (theme) => theme.zIndex.drawer + 1,
//         bgcolor: "white",
//         boxShadow: 1,
//         direction: "rtl",
//       }}
//     >
//       <Toolbar
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           width: "100%",
//         }}
//       >
//         <Typography
//           variant="h6"
//           sx={{ color: "#1a1a1a", fontWeight: 600, minWidth: "fit-content" }}
//         >
//           سازمان آوات
//         </Typography>
//         <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
//           <CustomBreadCrumbs />
//         </Box>
//         <Box
//           sx={{
//             display: "flex",
//             gap: 1,
//             minWidth: "fit-content",
//             ml: { xs: 5 },
//           }}
//         >
//           <Badge
//             badgeContent={3}
//             color="error"
//             sx={{
//               "& .MuiBadge-badge": {
//                 position: "absolute",
//                 top: 5,
//                 right: 3,
//               },
//             }}
//           >
//             <NotificationsNoneIcon sx={{ color: "#555" }} />
//           </Badge>
//           <Avatar
//             sx={{
//               bgcolor: "#1976d2",
//               width: 30,
//               height: 30,
//             }}
//           >
//             م
//           </Avatar>
//           <Typography
//             variant="subtitle1"
//             sx={{ color: "#1976d2", fontWeight: 500 }}
//           >
//             مینا کاویانی
//           </Typography>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };
// export default Header;
import { AppBar, Avatar, Badge, Box, Toolbar, Typography } from "@mui/material";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CustomBreadCrumbs from "../CustomBreadcrumbs/CustomBreadcrumbs";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      className={styles.header}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: "background.paper",
        color: "text.primary",
      }}
    >
      <Toolbar className={styles.toolbar}>
        <Typography variant="h6" className={styles.logo}>
          سازمان آوات
        </Typography>

        <Box className={styles.breadcrumbContainer}>
          <CustomBreadCrumbs />
        </Box>

        <Box className={styles.userSection}>
          <Badge
            badgeContent={3}
            color="error"
            className={styles.notification}
            sx={{
              "& .MuiBadge-badge": {
                top: 4,
                right: 2,
              },
            }}
          >
            <NotificationsNoneIcon color="action" />
          </Badge>

          <Avatar
            className={styles.avatar}
            sx={{
              bgcolor: "primary.main",
              width: 36,
              height: 36,
            }}
          >
            م
          </Avatar>

          <Typography
            variant="subtitle1"
            color="primary"
            className={styles.userName}
          >
            مینا کاویانی
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
