import { FaUsers } from "react-icons/fa";
import { HiOutlineRectangleStack, HiOutlineWrench } from "react-icons/hi2";
import { IoHome, IoPersonAdd } from "react-icons/io5";
import { PiBuildingApartment } from "react-icons/pi";

export const Routes1 = [
    {
        route: "/",
        icon: <IoHome size={25} />
    },
    {
        route: "/route1",
        icon: <HiOutlineRectangleStack size={25} />
    },
    {
        route: "/route2",
        icon: <HiOutlineWrench size={25} />
    },
]

export const Routes2 = [
    {
        route: "/route3",
        icon: <PiBuildingApartment size={25} />
    },
    {
        route: "/route4",
        icon: <FaUsers size={25} />
    },
    {
        route: "/route5",
        icon: <IoPersonAdd size={25} />
    },
]