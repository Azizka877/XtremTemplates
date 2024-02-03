/* eslint-disable react/react-in-jsx-scope */
import HomePage from "pages/Home/HomePage";
import { ACCEUIL_PATH, BADGE_PATH, BOUTON_PATH, CARD_PATH, ALERT_PATH, TABLE_PATH,
     FORM_PATH, BREAD_PATH, ABOUT_PATH, GRID_PATH } from "../navigationPaths";
import RequireAuth from "layouts/RequireAuth";
import ErrorBoundary from "components/ErrorBoundary/ErrorBoundary";
import { Navigate } from "react-router-dom";
import SplitShell from "layouts/AppShells/SplitShell";

/*
|---------------------------------------------------------------
| Les routes privates
|---------------------------------------------------------------
| Toute page qui necessite une authentification doit etre ici
|
*/
export const privateRoutes = [
    {
        path: ACCEUIL_PATH,
        errorElement: <ErrorBoundary />,
        element: <RequireAuth />,
        children: [
            {
                path: "",
                element: <SplitShell />,
                children: [
                    {
                        path: "*",
                        element: <Navigate to={ACCEUIL_PATH} />
                    },
                    {
                        path: "",
                        element: <HomePage />
                    },
                    {
                        path: ALERT_PATH,
                        element: <p>Hello from me</p>
                    },
                    {
                        path: BADGE_PATH,
                        element: <p>Hello from me</p>
                    },
                    {
                        path: BOUTON_PATH,
                        element: <p>Hello from me</p>
                    },
                    {
                        path: CARD_PATH,
                        element: <p>Hello from me</p>
                    },
                    {
                        path: GRID_PATH,
                        element: <p>Hello from me</p>
                    },
                    {
                        path: TABLE_PATH,
                        element: <p>Hello from me</p>
                    },
                    {
                        path: FORM_PATH,
                        element: <p>Hello from me</p>
                    },
                    {
                        path: BREAD_PATH,
                        element: <p>Hello from me</p>
                    },
                    {
                        path: ABOUT_PATH,
                        element: <p>Hello from me</p>
                    },
                ]
            }
        ]
    },
];