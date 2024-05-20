'use client'

import { IoHome } from "react-icons/io5";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { HiOutlineWrench } from "react-icons/hi2";
import { Divider } from "@nextui-org/react";
import { PiBuildingApartment } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { toggle } from "../redux/features/sidedrawer-state-slice";
import { useEffect, useState } from "react";

const Sidebar = () => {
    const pathName = usePathname();
    const drawerState = useSelector((state: RootState) => state.sideDrawerReducer.isOpen);
    const dispatch = useDispatch<AppDispatch>();
    const [drawerBackground, setDrawerBackground] = useState<string>("");

    useEffect(() => {
        console.log("drawer state changed", drawerState);
        setTimeout(() => {
            if (drawerState) {
                setDrawerBackground("bg-foreground/30");
            } else {
                setDrawerBackground("");
            }
        }, 300)
    }, [drawerState])
    return (
        <div className={`${drawerBackground} sm:bg-transparent transition-all duration-[1000ms] absolute sm:static top-0 ${drawerState ? "left-0" : "-left-28"} h-full w-full flex sm:w-auto`}>
            <div className={`transition-all duration-[1000ms] h-full px-1 py-5 pt-20 sm:px-0 sm:py-0`}>
                <div className="h-full bg-foreground text-background px-6 py-8 rounded-xl overflow-y-auto overflow-x-hidden flex items-center flex-col gap-6 ">
                    <Link href="/" className={`rounded-full p-3 ${pathName === "/" && "bg-activeItemBackground"}`}>
                        <IoHome size={25} />
                    </Link>
                    <Link href="/route1" className={`rounded-full p-2 ${pathName === "/route1" && "bg-activeItemBackground"}`}>
                        <HiOutlineRectangleStack size={25} />
                    </Link>
                    <Link href="/route2" className={`rounded-full p-2 ${pathName === "/route2" && "bg-activeItemBackground"}`}>
                        <HiOutlineWrench size={25} />
                    </Link>
                    <Divider className="bg-background" />
                    <Link href="/route3" className={`rounded-full p-2 ${pathName === "/route3" && "bg-activeItemBackground"}`}>
                        <PiBuildingApartment size={25} />
                    </Link>
                    <Link href="/route4" className={`rounded-full p-2 ${pathName === "/route4" && "bg-activeItemBackground"}`}>
                        <FaUsers size={25} />
                    </Link>
                    <Link href="/route5" className={`rounded-full p-2 ${pathName === "/route5" && "bg-activeItemBackground"}`}>
                        <IoPersonAdd size={25} />
                    </Link>
                </div>
            </div>
            <div className={`flex-1 sm:flex-none ${!drawerState && "flex-none"}`} onClick={() => { dispatch(toggle()); }}></div>
        </div>
    )
}

export default Sidebar;