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
                paddingRight: `${level * 50}px`,
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
            <TableCell>شناسه</TableCell>
            <TableCell align="center">وظیفه</TableCell>
            <TableCell>وضعیت</TableCell>
            <TableCell>تاریخ انجام</TableCell>
            <TableCell>مسئول</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>{renderRows(nodes)}</TableBody>
      </Table>
    </TableContainer>
  );
});
