"use client"

import { useState } from "react";
import { Navbar, NavbarBrand, NavbarMenu, NavbarContent, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Divider } from "@nextui-org/react";
import { ThemeSwitcher } from "./themeSwitcher";
import { BraneLogo } from "./braneLogo";
import { RiArrowDownSLine } from "react-icons/ri";
import { BraneLogoText } from "./braneLogoText";
import Sidebar from "./sidebar";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

const AppNavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <Navbar
            isBordered
            maxWidth={'full'}
            className="relative"
        >
            <NavbarContent justify="center" className="sm:hidden">
                <Button className="text-foreground" variant="light" isIconOnly onClick={() => { setIsMenuOpen(!isMenuOpen) }} >
                    {!isMenuOpen ? <CiMenuBurger size={25} /> : <TfiClose size={20} />}
                </Button>
            </NavbarContent>

            <NavbarContent justify="center">
                <NavbarBrand>
                    <BraneLogo width={30} height={30} />
                    <span className="hidden md:block">
                        <BraneLogoText width={100} height={50} />
                    </span>
                </NavbarBrand>
                <Divider orientation="vertical" />
            </NavbarContent>

            <NavbarContent className="font-bold" justify="center">
                App name
            </NavbarContent>

            <NavbarContent as="div" justify="end">
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
                <ThemeSwitcher />
            </NavbarContent>

            <div className={`transition-all duration-[500ms] h-screen absolute top-[4rem] ${!isMenuOpen ? "-left-80" : "left-0"} `}>
                <div className="pl-2">
                    <Sidebar />
                </div>
            </div>
        </Navbar>
    )
}

export default AppNavBar;