'use client'

import { useSelector } from "react-redux";
import RightSideBar from "./rightSideBar";
import Sidebar from "./sidebar";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const MainBody = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const authState = useSelector((state: RootState) => state.authReducer.isLoggedIn);
    const router = useRouter()

    useEffect(() => {
        if (!authState) {
            router.push("/login");
        }
    }, [authState])

    return (

        <div className="bg-bodyBackground flex-1 w-full overflow-x-hidden overflow-y-hidden flex justify-center px-1 py-5 gap-5">
            {authState && <Sidebar />}
            <div className="block xl:flex flex-1 px-2 lg:px-0 gap-5 overflow-y-auto h-full">
                <div className={`w-full xl:w-${authState ? "9/12" : "full"} overflow-y-hidden xl:overflow-y-auto`}>
                    {children}
                </div>
                {authState && <RightSideBar />}
            </div>
        </div>
    )
}

export default MainBody;