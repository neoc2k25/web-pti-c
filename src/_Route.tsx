import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import TimPage from "./pages/TimPage";
import TimById from "./pages/TimById";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/tim",
    element: <TimPage />,
  },
  {
    path: "/tim/:id",
    element: <TimById />,
  },
]);

export default Routes;
