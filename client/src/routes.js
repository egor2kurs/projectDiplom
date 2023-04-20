import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import Platform from "./pages/Platform"
import WorkPage from "./pages/WorkPage"
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, PLATFORM_ROUTE, REGISTRATION_ROUTE, WORK_ROUTE } from "./utils/consts"

export const authRoutes = [
        {
            path : ADMIN_ROUTE,
            Component : Admin

        },

        {
            path: BASKET_ROUTE,
            Component : Basket
        }
]
export const publicRoutes = [

    {
        path : PLATFORM_ROUTE,
        Component : Platform

    },

    {
        path : LOGIN_ROUTE,
        Component : Auth
    },

    {
        path : REGISTRATION_ROUTE,
        Component : Auth
    },

    {
        path : WORK_ROUTE + '/:id',
        Component : WorkPage
    },


]