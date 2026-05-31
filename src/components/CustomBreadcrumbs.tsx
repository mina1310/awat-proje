import { useLocation } from "react-router-dom";
import generateBreadcrumbs from "../utils/generateBreadcrumbs";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Link as routeLink } from "react-router-dom";

const CustomBreadCrumbs: React.FC = () => {
  const location = useLocation();
  const breadcrumbs = generateBreadcrumbs(location.pathname);
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator="›"
      sx={{
        color: "#666",
        "& .MuiBreadcrumbs-separator": {
          mx: 1,
          color: "#999",
        },
      }}
    >
      <Link
        component={routeLink}
        to="/dashboard"
        underline="hover"
        sx={{ color: "#1976d2", display: "flex", alignItems: "center" }}
      >
        منوی اصلی
      </Link>
      {breadcrumbs.map((crumb) =>
        crumb.isLastPath ? (
          <Typography
            key={crumb.moveTo}
            sx={{ color: "#333", fontWeight: 500 }}
          >
            {crumb.name}
          </Typography>
        ) : (
          <Link
            component={routeLink}
            to={crumb.moveTo}
            key={crumb.moveTo}
            underline="hover"
            sx={{ color: "#1976d2" }}
          >
            {crumb.name}
          </Link>
        ),
      )}
    </Breadcrumbs>
  );
};
export default CustomBreadCrumbs;
