"use client"

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Popover, PopoverTrigger, PopoverContent, Divider } from "@nextui-org/react";
import { BsChevronDown } from "react-icons/bs";
import { LuScaling } from "react-icons/lu";
import { FaAvianex, FaChartPie, FaFulcrum, FaJedi } from "react-icons/fa";
import Link from "next/link";
import { MenuItems } from "../utils/menuItems";
import { ThemeSwitcher } from "./themeSwitcher";
import { useRouter } from 'next/navigation'
import { BraneLogo } from "./braneLogo";
import { RiArrowDownSLine } from "react-icons/ri";
import { BraneLogoText } from "./braneLogoText";
import Sidebar from "./sidebar";

const AppNavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const pathname = usePathname();
    const router = useRouter();
    return (
        <Navbar
            classNames={{
                item: [
                    "flex",
                    "relative",
                    "h-full",
                    "items-center",
                    "data-[active=true]:after:content-['']",
                    "data-[active=true]:after:absolute",
                    "data-[active=true]:after:bottom-0",
                    "data-[active=true]:after:left-0",
                    "data-[active=true]:after:right-0",
                    "data-[active=true]:after:h-[2px]",
                    "data-[active=true]:after:rounded-[2px]",
                    "data-[active=true]:after:bg-primary",
                ],
            }}
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            maxWidth={'full'}
        >
            <NavbarContent className="md:hidden" justify="center">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent justify="center">
                <NavbarBrand>
                    <BraneLogo width={30} height={30}/>
                    <span className="hidden md:block">
                        <BraneLogoText width={100} height={50}/>
                    </span>
                </NavbarBrand>
                <Divider orientation="vertical"/>
            </NavbarContent>
            


            <NavbarContent className="font-bold" justify="center">
                App name
            </NavbarContent>

            <NavbarContent as="div" justify="end">
                <Popover placement="bottom" showArrow offset={10}>
                    <PopoverTrigger>
                        <Button color="primary">Themes</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <ThemeSwitcher />
                    </PopoverContent>
                </Popover>
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <div className="flex items-center gap-1 bg-foreground text-background p-1 rounded-full cursor-pointer">
                            <Avatar
                                as="button"
                                className="transition-transform w-6 h-6 text-tiny"
                                color="secondary"
                                name="Jason Hughes"
                                size="sm"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                            <div className="hidden md:block p-1">Hi, Name</div>
                            <RiArrowDownSLine size={20} className="hidden sm:block p-1" />
                        </div>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">zoey@example.com</p>
                        </DropdownItem>
                        <DropdownItem key="settings">My Settings</DropdownItem>
                        <DropdownItem key="team_settings">Team Settings</DropdownItem>
                        <DropdownItem key="analytics">Analytics</DropdownItem>
                        <DropdownItem key="system">System</DropdownItem>
                        <DropdownItem key="configurations">Configurations</DropdownItem>
                        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>

            <NavbarMenu>
                <Sidebar />
            </NavbarMenu>
        </Navbar>
    )
}

export default AppNavBar;