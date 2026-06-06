import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Menu } from "./pages/Menu";
import { Gallery } from "./pages/Gallery";
import { Reviews } from "./pages/Reviews";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "menu", Component: Menu },
      { path: "gallery", Component: Gallery },
      { path: "reviews", Component: Reviews },
      { path: "contact", Component: Contact },
    ],
  },
]);
