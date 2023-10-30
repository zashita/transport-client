import React from "react";
import Main from "../pages/Main";
import Ads from "../pages/Ads";
import {
    createBrowserRouter,
} from "react-router-dom";
import DriverProfile from "../pages/DriverProfile";
import LogIn from "../pages/LogIn";

export interface IRoute{
    path: string;
    component: React.FC;

}

export enum Routes {
    MAIN = `/`,
    ADS = `/ads`,
    DRIVERS = `/driver`,
    LOGIN = '/login'
}

export const router = createBrowserRouter([
    {path: Routes.MAIN, element: <Main/>},
    {path: Routes.ADS, element: <Ads/>},
    {path: Routes.DRIVERS, element: <DriverProfile/>},
    {path: Routes.LOGIN, element: <LogIn/>}
])
