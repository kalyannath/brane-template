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
                    <BraneLogo width={180}/>
                </NavbarBrand>
                <Divider orientation="vertical"/>
            </NavbarContent>
            


            <NavbarContent className="hidden md:flex gap-10" justify="center">
                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            disableRipple
                            className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                            radius="sm"
                            variant="light"
                            endContent={<BsChevronDown />}
                        >
                            Features
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="ACME features"
                        className="w-[340px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem
                            key="autoscaling"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            startContent={<LuScaling size={30} color="green" />}
                        >
                            Autoscaling
                        </DropdownItem>
                        <DropdownItem
                            key="usage_metrics"
                            description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                            startContent={<FaChartPie size={30} color="red" />}
                        >
                            Usage Metrics
                        </DropdownItem>
                        <DropdownItem
                            key="production_ready"
                            description="ACME runs on ACME, join us and others serving requests at web scale."
                            startContent={<FaAvianex size={30} color="purple" />}
                        >
                            Production Ready
                        </DropdownItem>
                        <DropdownItem
                            key="99_uptime"
                            description="Applications stay on the grid with high availability and high uptime guarantees."
                            startContent={<FaFulcrum size={30} color="orange" />}
                        >
                            +99% Uptime
                        </DropdownItem>
                        <DropdownItem
                            key="supreme_support"
                            description="Overcome any challenge with a supporting team ready to respond."
                            startContent={<FaJedi size={30} color="blue" />}
                        >
                            +Supreme Support
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem isActive={pathname === '/'}>
                    <Link href="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === '/route1'}>
                    <Link href="/route1">
                        Route 1
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === '/route2'}>
                    <Link href="/route2">
                        Route 2
                    </Link>
                </NavbarItem>
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
                        <div className="flex items-center gap-1 bg-foreground text-background px-1 rounded-full">
                            <Avatar
                                as="button"
                                className="transition-transform w-6 h-6 text-tiny"
                                color="secondary"
                                name="Jason Hughes"
                                size="sm"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                            <div className="p-1">Hi, Name</div>
                            <RiArrowDownSLine />
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
                {MenuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`} isActive={pathname === `${item.route}`}>
                        <Link
                            className="w-full"
                            href={item.route}
                        >
                            {item.title}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}

export default AppNavBar;