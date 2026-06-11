// import { useLocation } from "react-router-dom";
// import generateBreadcrumbs from "../utils/generateBreadcrumbs";
// import { Breadcrumbs, Link, Typography } from "@mui/material";
// import { Link as routeLink } from "react-router-dom";
// import { useMemo } from "react";

// const CustomBreadCrumbs: React.FC = () => {
//   const location = useLocation();
//   const breadcrumbs = useMemo(
//     () => generateBreadcrumbs(location.pathname),
//     [location.pathname],
//   );
//   return (
//     <Breadcrumbs
//       aria-label="breadcrumb"
//       separator="›"
//       sx={{
//         color: "#666",
//         "& .MuiBreadcrumbs-separator": {
//           mx: 1,
//           color: "#999",
//         },
//       }}
//     >
//       <Link
//         component={routeLink}
//         to="/dashboard"
//         underline="hover"
//         sx={{ color: "#1976d2", display: "flex", alignItems: "center" }}
//       >
//         منوی اصلی
//       </Link>
//       {breadcrumbs.map((crumb) =>
//         crumb.isLastPath ? (
//           <Typography
//             key={crumb.moveTo}
//             sx={{ color: "#333", fontWeight: 500 }}
//           >
//             {crumb.name}
//           </Typography>
//         ) : (
//           <Link
//             component={routeLink}
//             to={crumb.moveTo}
//             key={crumb.moveTo}
//             underline="hover"
//             sx={{ color: "#1976d2" }}
//           >
//             {crumb.name}
//           </Link>
//         ),
//       )}
//     </Breadcrumbs>
//   );
// };
// export default CustomBreadCrumbs;

import { useMemo } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Breadcrumbs, Link, Typography } from "@mui/material";

import generateBreadcrumbs from "../../utils/generateBreadcrumbs";

import styles from "./CustomBreadcrumbs.module.scss";

const CustomBreadCrumbs: React.FC = () => {
  const location = useLocation();

  const breadcrumbs = useMemo(
    () => generateBreadcrumbs(location.pathname),
    [location.pathname],
  );

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator="›"
      className={styles.breadcrumbs}
    >
      <Link
        component={RouterLink}
        to="/dashboard"
        underline="hover"
        color="primary"
        className={styles.link}
      >
        منوی اصلی
      </Link>

      {breadcrumbs.map((crumb) =>
        crumb.isLastPath ? (
          <Typography
            key={crumb.moveTo}
            variant="body2"
            color="text.primary"
            className={styles.currentPage}
          >
            {crumb.name}
          </Typography>
        ) : (
          <Link
            key={crumb.moveTo}
            component={RouterLink}
            to={crumb.moveTo}
            underline="hover"
            color="primary"
            className={styles.link}
          >
            {crumb.name}
          </Link>
        ),
      )}
    </Breadcrumbs>
  );
};

export default CustomBreadCrumbs;
