import { Box, Paper, Typography } from "@mui/material";
import { InfoOutlined as InfoIcon } from "@mui/icons-material";
import styles from "./Dashboard.module.scss";

export const Dashboard = () => {
  return (
    <Box className={styles.container}>
      <Paper className={styles.card}>
        <InfoIcon className={styles.icon} fontSize="inherit" />

        <Typography variant="h6" gutterBottom>
          داده‌ای برای نمایش وجود ندارد
        </Typography>

        <Typography variant="body2" color="text.secondary">
          به زودی اطلاعات در این بخش قرار خواهد گرفت
        </Typography>
      </Paper>
    </Box>
  );
};
