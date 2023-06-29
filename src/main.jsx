import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: "About",
			},
			{
				path: "/showcase",
				element: "showcase",
			},
			{
				path: "/blog",
				element: "blog",
			},
			{
				path: "/contact",
				element: "contact",
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router}></RouterProvider>
);
