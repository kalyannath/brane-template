'use client'

import { useSelector } from "react-redux";
import ActiveProjects from "./activeProjects";
import CompanyDetails from "./companyDetails";
import Teams from "./teams";
import { RootState } from "../redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
    const authState = useSelector((state: RootState) => state.authReducer.isLoggedIn);
    const router = useRouter()

    useEffect(() => {
        if (!authState) {
            router.push("/login");
        }
    }, [authState])

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="w-full flex gap-5 flex-col lg:flex-row">
                <div className="w-full lg:w-6/12">
                    <CompanyDetails />
                </div>
                <div className="w-full lg:w-6/12">
                    <ActiveProjects />
                </div>
            </div>
            <div className="w-full">
                <Teams />
            </div>
        </div>
    )
}

export default Dashboard;