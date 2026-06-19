import { Box } from "@mui/material";
import { memo } from "react";

import type { PositionNode } from "../../position.type";

import styles from "./PositionChart.module.scss";

export const PositionChart = memo(({ nodes }: { nodes: PositionNode[] }) => {
  return (
    <Box component="ul" className={styles.tree}>
      {nodes.map((node) => (
        <li key={node.id}>
          <Box className={styles.node} title={node.title}>
            {node.title}
          </Box>

          {node.children.length > 0 && <PositionChart nodes={node.children} />}
        </li>
      ))}
    </Box>
  );
});
