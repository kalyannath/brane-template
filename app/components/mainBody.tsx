'use client'

import { useDispatch, useSelector } from "react-redux";
import RightSideBar from "./rightSideBar";
import Sidebar from "./sidebar";
import { AppDispatch, RootState } from "../redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from 'js-cookie';
import { setTokenFromCookie } from "../redux/features/auth-slice";
import { usePathname } from "next/navigation";
import { toggleRightSidebarSkeleton } from "../redux/features/skeleton-slice";
import RightSidebarSkeleton from "./skeletons/rightSidebarSkeleton";

const MainBody = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const pathName = usePathname();
    const authState = useSelector((state: RootState) => state.authReducer);
    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>();

    const skeletonState = useSelector((state: RootState) => state.skeletonStateReducer);

    const apiCallRightSidebar = () => {
        dispatch(toggleRightSidebarSkeleton(true));
        setTimeout(() => {
            dispatch(toggleRightSidebarSkeleton(false));
        }, 4000)
    }

    useEffect(() => {
        const cookie = Cookies.get("access_token");
        if (cookie) {
            if (!pathName.includes("dashboard")) {
                router.push("/dashboard");
            }
            setTimeout(() => {
                dispatch(setTokenFromCookie({ access_token: cookie }));
                apiCallRightSidebar();
            }, 1000)
        } else {
            if (pathName.includes("dashboard")) {
                router.push("/");
            }
        }
    }, [authState.access_token])

    return (

        <div className="bg-bodyBackground flex-1 w-full overflow-x-hidden overflow-y-hidden flex justify-center px-1 py-5 gap-2">
            {authState.access_token && <Sidebar />}
            <div className="block xl:flex flex-1 px-2 xl:px-0 gap-2 overflow-y-auto h-full">
                <div className={`pr-0 lg:pr-2 w-full xl:w-${authState ? "8/12" : "full"} overflow-y-hidden xl:overflow-y-auto`}>
                    {children}
                </div>
                {authState.access_token ?
                    skeletonState.rightSidebarSkeleton ? <RightSidebarSkeleton /> :
                        <RightSideBar /> : null}
            </div>
        </div>
    )
}

export default MainBody;