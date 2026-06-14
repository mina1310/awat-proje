// import { Box } from "@mui/material";
// import type { PositionNode } from "../position.type";
// import { memo } from "react";
// const PositionChart = memo(({ nodes }: { nodes: PositionNode[] }) => {
//   return (
//     <Box
//       component="ul"
//       sx={{
//         direction: "rtl",
//         listStyle: "none",
//         m: 0,
//         mt: 1,
//         p: 0,
//         "& ul": {
//           listStyle: "none",
//           mr: 3,
//           borderRight: "1px dashed #ccc",
//         },
//         "& li": {
//           display: "flex",
//           alignItems: "flex-start",
//           position: "relative",
//           mb: 1,
//           listStyle: "none",
//           "&::before": {
//             content: '""',
//             position: "absolute",
//             right: -10,
//             top: "30",
//             width: 5,
//             height: 1,
//             bgcolor: "#ccc",
//           },
//         },
//       }}
//     >
//       {nodes.map((node) => (
//         <li key={node.id}>
//           <Box
//             sx={{
//               width: 130,
//               minWidth: 130,
//               maxWidth: 160,
//               py: 0.6,
//               px: 1,
//               borderRadius: 1.5,
//               border: "1px solid #ddd",
//               bgcolor: "#fff",
//               fontSize: "0.85rem",
//               textAlign: "center",
//               whiteSpace: "nowrap",
//               overflow: "hidden",
//               textOverflow: "ellipsis",
//               cursor: "pointer",
//               "&:hover": {
//                 bgcolor: "#f5f5f5",
//                 borderColor: "#1976d2",
//               },
//             }}
//             title={node.title}
//           >
//             {node.title}
//           </Box>
//           {node.children.length > 0 && <PositionChart nodes={node.children} />}
//         </li>
//       ))}
//     </Box>
//   );
// });

// export default PositionChart;

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
