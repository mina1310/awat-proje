import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { OrganizationChartPage } from "../page/organization/components";
import { DashboardPage } from "../page/dashboard/components";
import PositionPage from "../page/position/PositionPage";
import EmployeePositionPage from "../page/employee/EmployeePositionPage";
import TaskPage from "../page/tasks/TaskPage";
import { RootLayout } from "../components/RootLayout";

export const AppRoutes: React.FC = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Navigate to="organizationChart" replace /> },
        { path: "/dashboard", element: <DashboardPage /> },
        {
          path: "organizationChart",
          element: <OrganizationChartPage />,
          children: [
            { index: true, element: <Navigate to="position" replace /> },
            { path: "position", element: <PositionPage /> },
            { path: "personal", element: <EmployeePositionPage /> },
          ],
        },
        { path: "tasks", element: <TaskPage /> },
      ],
    },
  ]);
  return <RouterProvider router={route} />;
};
