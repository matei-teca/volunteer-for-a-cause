import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";    
import allReducer from "./redux/reducers";
import LandingPage from "./pages/landing/landingPage";
import ContactPage from "./pages/contact/contactPage";
import ErrorPage from "./pages/error/errorPage";
import LegalPage from "./pages/legal/legalPage";
import Layout from "./pages/layout/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/legal",
        element: <LegalPage />,
      }
    ]
  }
]);

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
