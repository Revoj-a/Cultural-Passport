import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import PhraseBook from "./components/PhraseBook";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "phrasebook", element: <PhraseBook /> },
    ],
  },
]);

export default router;
