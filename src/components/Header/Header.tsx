import { AppBar, Avatar, Badge, Box, Toolbar, Typography } from "@mui/material";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import styles from "./Header.module.scss";
import { CustomBreadCrumbs } from "../CustomBreadcrumbs";

export const Header = () => {
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
