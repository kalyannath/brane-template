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

const Sidebar = () => {
    const pathName = usePathname();
    return (
        <div className="flex items-center flex-col gap-6 overflow-y-auto bg-foreground text-background h-full px-6 py-8 rounded-xl">
            <Link href="/" className={`rounded-full p-2 ${pathName === "/" && "bg-activeItemBackground"}`}>
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
    )
}

export default Sidebar;