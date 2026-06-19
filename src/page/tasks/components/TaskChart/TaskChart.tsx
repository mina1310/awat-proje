// import type { TaskNode } from "../../task.type";

// interface Props {
//   nodes: TaskNode[];
// }

// import { memo, useState } from "react";

// import {
//   IconButton,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
// } from "@mui/material";

// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// import styles from "./TaskChart.module.scss";

// export const TaskChart = memo(({ nodes }: Props) => {
//   const [openNodes, setOpenNodes] = useState<Set<string>>(new Set());

//   const toggleNode = (id: string) => {
//     setOpenNodes((prev) => {
//       const next = new Set(prev);

//       if (next.has(id)) {
//         next.delete(id);
//       } else {
//         next.add(id);
//       }

//       return next;
//     });
//   };

//   const renderRows = (nodes: TaskNode[], level = 0): React.ReactNode[] => {
//     return nodes.map((node) => {
//       const hasChildren = node.children.length > 0;
//       const isOpen = openNodes.has(node.id);

//       return [
//         <TableRow
//           key={node.id}
//           className={
//             node.status === "انجام شده" ? styles.completed : styles.pending
//           }
//         >
//           <TableCell width={50}>
//             {hasChildren && (
//               <IconButton size="small" onClick={() => toggleNode(node.id)}>
//                 {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//               </IconButton>
//             )}
//           </TableCell>

//           <TableCell className={styles.id}>
//             <span
//               className={styles.idIndent}
//               style={{ paddingRight: `${level * 25}px` }}
//             >
//               {node.id}
//             </span>
//           </TableCell>

//           <TableCell className={styles.title}>{node.title}</TableCell>

//           <TableCell
//             className={
//               node.status === "انجام شده" ? styles.success : styles.warning
//             }
//           >
//             {node.status === "انجام شده" ? "✅ انجام شده" : "⏳ انجام نشده"}
//           </TableCell>

//           <TableCell className={styles.date}>
//             {node.done_date
//               ? new Date(node.done_date).toLocaleDateString("fa-IR")
//               : "-"}
//           </TableCell>

//           <TableCell className={styles.assignee}>{node.assignee}</TableCell>
//         </TableRow>,

//         ...(hasChildren && isOpen ? renderRows(node.children, level + 1) : []),
//       ];
//     });
//   };

//   return (
//     <TableContainer>
//       <Table className={styles.wrapper}>
//         <TableHead>
//           <TableRow className={styles.header}>
//             <TableCell />

//             <TableCell className={styles.id}>شناسه</TableCell>

//             <TableCell className={styles.title}>وظیفه</TableCell>

//             <TableCell className={styles.status}>وضعیت</TableCell>

//             <TableCell className={styles.date}>تاریخ انجام</TableCell>

//             <TableCell className={styles.assignee}>مسئول</TableCell>
//           </TableRow>
//         </TableHead>

//         <TableBody>{renderRows(nodes)}</TableBody>
//       </Table>
//     </TableContainer>
//   );
// });

import { memo, useState } from "react";

import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import type { TaskNode } from "../../task.type";

import styles from "./TaskChart.module.scss";

interface Props {
  nodes: TaskNode[];
}

export const TaskChart = memo(({ nodes }: Props) => {
  const [openNodes, setOpenNodes] = useState<Set<string>>(new Set());

  const toggleNode = (id: string) => {
    setOpenNodes((prev) => {
      const next = new Set(prev);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  };

  const renderRows = (nodes: TaskNode[], level = 0): React.ReactNode[] => {
    return nodes.flatMap((node) => {
      const hasChildren = node.children.length > 0;
      const isOpen = openNodes.has(node.id);

      return [
        <TableRow
          key={node.id}
          className={
            node.status === "انجام شده"
              ? styles.completedRow
              : styles.pendingRow
          }
        >
          <TableCell className={styles.expandColumn}>
            {hasChildren && (
              <IconButton size="small" onClick={() => toggleNode(node.id)}>
                {isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
              </IconButton>
            )}
          </TableCell>

          <TableCell className={styles.idColumn}>{node.id}</TableCell>

          <TableCell className={styles.titleColumn}>
            <span
              className={styles.titleIndent}
              style={{
                marginRight: `${level * 50}px`,
              }}
            >
              {node.title}{" "}
            </span>
          </TableCell>

          <TableCell
            className={
              node.status === "انجام شده"
                ? styles.doneStatus
                : styles.pendingStatus
            }
          >
            {node.status === "انجام شده" ? "✅ انجام شده" : "⏳ انجام نشده"}
          </TableCell>

          <TableCell className={styles.dateColumn}>
            {node.done_date
              ? new Date(node.done_date).toLocaleDateString("fa-IR")
              : "-"}
          </TableCell>

          <TableCell className={styles.assigneeColumn}>
            {node.assignee}
          </TableCell>
        </TableRow>,

        ...(hasChildren && isOpen ? renderRows(node.children, level + 1) : []),
      ];
    });
  };

  return (
    <TableContainer className={styles.container}>
      <Table className={styles.table}>
        <TableHead>
          <TableRow className={styles.headerRow}>
            <TableCell className={styles.expand} />

            <TableCell className={styles.id}>شناسه</TableCell>

            <TableCell className={styles.title}>وظیفه</TableCell>

            <TableCell className={styles.status}>وضعیت</TableCell>

            <TableCell className={styles.date}>تاریخ انجام</TableCell>

            <TableCell className={styles.assignee}>مسئول</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>{renderRows(nodes)}</TableBody>
      </Table>
    </TableContainer>
  );
});
