import { Box } from "@mui/material";
import { memo } from "react";

import styles from "./PositionChart.module.scss";
import type { DataPositions, TreeNode } from "../../position.type";
import type { UserData } from "../../../user/user.type";
import { useLocation } from "react-router-dom";

type PositionWithUser = DataPositions & {
  user?: UserData | null;
};

export type PositionChartProps<T extends PositionWithUser> = {
  nodes: TreeNode<T>[];
  onFilter: () => void;
  isFiltered: boolean;
};

export const PositionChart = memo(
  <U extends PositionWithUser>({
    nodes,
    onFilter,
    isFiltered,
  }: PositionChartProps<U>) => {
    const location = useLocation();
    const havePosition = location.pathname.includes(
      "organizationChart/position",
    );
    return (
      <>
        <Box className={styles.filter}>
          <button
            type="button"
            className={styles.filterButton}
            onClick={onFilter}
          >
            {isFiltered && "✓"}
          </button>

          <span>
            {havePosition
              ? "سمت های فعال نمایش داده شود"
              : "جایگاه های فعال نمایش داده شود"}
          </span>
        </Box>

        <Box component="ul" className={styles.tree} data-testid="position-tree">
          {nodes.map(({ node, level, key, isFake }) => {
            const fullName = node.user
              ? `${node.user.firstName ?? ""} ${node.user.lastName ?? ""}`
              : "";

            return (
              <li
                key={key ?? node.id}
                className={styles.item}
                style={{
                  marginRight: `${level * 40}px`,
                }}
              >
                <Box
                  className={`${styles.node} ${
                    node.status === "inactive"
                      ? styles.inactive
                      : isFake
                        ? styles.isFake
                        : ""
                  } }`}
                  title={node.title}
                >
                  {node.title}({fullName})
                </Box>
              </li>
            );
          })}
        </Box>
      </>
    );
  },
);
