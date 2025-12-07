import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import TimPage from "./pages/TimPage";
import TimById from "./pages/TimById";
import PositronPage from "./pages/PositronPage";
import KontakPage from "./pages/KontakPage";
import AlbumPage from "./pages/AlbumPage";

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
  {
    path: "/positron",
    element: <PositronPage />,
  },
  {
    path: "/album",
    element: <AlbumPage />,
  },
  {
    path: "/kontak",
    element: <KontakPage />,
  },
]);

export default Routes;
