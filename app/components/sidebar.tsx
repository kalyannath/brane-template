'use client'

import { Divider } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { toggle } from "../redux/features/sidedrawer-state-slice";
import { useEffect, useState } from "react";
import { Routes1, Routes2 } from "../utils/routes";

const Sidebar = () => {
    const pathName = usePathname();
    const drawerState = useSelector((state: RootState) => state.sideDrawerReducer.isOpen);
    const dispatch = useDispatch<AppDispatch>();
    const [drawerBackground, setDrawerBackground] = useState<string>("");

    useEffect(() => {
        console.log("drawer state changed", drawerState);
        setTimeout(() => {
            if (drawerState) {
                setDrawerBackground("bg-black/50");
            } else {
                setDrawerBackground("");
            }
        }, drawerState ? 300 : 0)
    }, [drawerState])
    return (
        <div className={`${drawerBackground} sm:bg-transparent transition-all duration-[500ms] absolute sm:static top-0 ${drawerState ? "left-0" : "-left-28"} h-full ${drawerState && "w-full"} sm:w-auto flex`}>
            <div className={`transition-all duration-[500ms] h-full px-1 py-5 pt-20 sm:px-0 sm:py-0`}>
                <div className="h-full bg-foreground text-background px-6 py-8 rounded-xl overflow-y-auto overflow-x-hidden flex items-center flex-col gap-6 ">
                    {Routes1.map((r, index) => (
                        <Link key={index} href={r.route} className={`rounded-full text-sideBarIconsColor p-3 ${pathName === r.route && "bg-activeItemBackground "}`}>
                            {r.icon}
                        </Link>
                    ))}
                    <Divider className="bg-sideBarIconsColor" />
                    {Routes2.map((r, index) => (
                        <Link key={index} href={r.route} className={`rounded-full text-sideBarIconsColor p-3 ${pathName === r.route && "bg-activeItemBackground "}`}>
                            {r.icon}
                        </Link>
                    ))}
                </div>
            </div>
            <div className={`flex-1 sm:flex-none ${!drawerState && "flex-none"}`} onClick={() => { dispatch(toggle()); }}></div>
        </div>
    )
}

export default Sidebar;