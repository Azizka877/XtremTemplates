import { ACCEUIL_PATH, BADGE_PATH, BOUTON_PATH, CARD_PATH, ALERT_PATH, TABLE_PATH, FORM_PATH, BREAD_PATH, ABOUT_PATH, GRID_PATH } from "./navigationPaths";
import { HiBan, HiBell, HiChartBar, HiFilter, HiFolderRemove, HiHome, HiInbox, HiTable, HiViewGrid, HiWifi } from "react-icons/hi";

/*
|--------------------------------------------------------------------------
! Sidebar Items
|--------------------------------------------------------------------------
|
| Ici se trouve tous les liens et icons qui doivent etre sur le sidebar
| de SplitShell
*/
export const links = [
    { path: ACCEUIL_PATH, icon: HiHome, label: "Acceuil" },
    { path: ALERT_PATH, icon: HiBell, label: "ALERT" },
    { path: BADGE_PATH, icon: HiFilter, label: "Badge" },
    { path: BOUTON_PATH, icon: HiWifi, label: "Boutons" },
    { path: CARD_PATH, icon: HiInbox, label: "Cards" },
    { path: GRID_PATH, icon: HiViewGrid, label: "Grid" },
    { path: TABLE_PATH, icon: HiTable, label: "Table" },
    { path: FORM_PATH, icon: HiFolderRemove, label: "Forms" },
    { path: BREAD_PATH, icon: HiChartBar, label: "Beadcrumbs" },
    { path: ABOUT_PATH, icon: HiBan, label: "About" },

]
