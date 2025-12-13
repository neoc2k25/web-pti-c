import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import 'animate.css';
import Routes from "./_Route";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={Routes} />
);

