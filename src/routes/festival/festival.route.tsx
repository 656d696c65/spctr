import { createRoute } from "@tanstack/react-router"
import { FestivalPage } from "../../features/festival/festivalPage"
import { navigationLayoutRoute } from "../navigation.layout"


export const festivalRoute = createRoute({
    getParentRoute: () => navigationLayoutRoute,
    path: '/festival',
    component: () => <FestivalPage />
})
