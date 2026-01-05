import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import PhraseBook from "./components/PhraseBook";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "phrasebook", element: <PhraseBook /> },
    ],
  },
]);

export default router;
