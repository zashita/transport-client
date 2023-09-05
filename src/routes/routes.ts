import React from "react";
import Main from "../pages/Main";
import Ads from "../pages/Ads";

export interface IRoute{
    path: string;
    component: React.FC;

}

export enum Routes {
    MAIN = `/main`,
    ADS = `/ads`,
}

export const routes: IRoute[] = [
    {path: Routes.MAIN, component: Main},
    {path: Routes.ADS, component: Ads}
]
