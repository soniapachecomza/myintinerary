import "./App.css";
import Home from "./pages/Home/Home.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Cities from "./pages/Cities/Cities";
import Component404 from "./pages/Componente404/Componente404";
import DetailsCity from "./pages/Cities/DetailsCity";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cities", element: <Cities /> },
      { path: "/details/:id", element: <DetailsCity /> },
    ],
  },
  {
    path: "*",
    element: <Component404 />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
