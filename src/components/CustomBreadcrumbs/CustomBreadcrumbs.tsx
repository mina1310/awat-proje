import { useMemo } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Breadcrumbs, Link, Typography } from "@mui/material";

import generateBreadcrumbs from "../../utils/generateBreadcrumbs";

import styles from "./CustomBreadcrumbs.module.scss";

export const CustomBreadCrumbs: React.FC = () => {
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
