import { createBrowserRouter } from "react-router";
import { DesktopLayout } from "./components/DesktopLayout";
import { SetupScreen } from "./screens/SetUpScreen";
import { DashboardScreen } from "./screens/DashboardScreen";
import { SettingsScreen } from "./screens/SettingsScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DesktopLayout,
    children: [
      { index: true, Component: SetupScreen },
      { path: "dashboard", Component: DashboardScreen },
      { path: "settings", Component: SettingsScreen },
    ],
  },
]);