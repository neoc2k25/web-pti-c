import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import TimPage from "./pages/TimPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/tim",
    element: <TimPage />,
  },
  
]);

export default Routes;
