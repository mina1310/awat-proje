import { Box, Typography, Paper } from "@mui/material";
import { InfoOutlined as InfoIcon } from "@mui/icons-material";

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60vh",
      }}
    >
      <Paper
        sx={{
          p: 6,
          textAlign: "center",
          borderRadius: 3,
          bgcolor: "#f5f5f5",
          alignItems: "center",
        }}
      >
        <InfoIcon sx={{ fontSize: 64, color: "#9e9e9e", mb: 2 }} />
        <Typography variant="h6" color="textSecondary" gutterBottom>
          داده‌ای برای نمایش وجود ندارد
        </Typography>
        <Typography variant="body2" color="textSecondary">
          به زودی اطلاعات در این بخش قرار خواهد گرفت
        </Typography>
      </Paper>
    </Box>
  );
};

export default Dashboard;
