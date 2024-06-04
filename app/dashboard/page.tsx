'use client'

import ActiveProjects from "./activeProjects";
import CompanyDetails from "./companyDetails";
import Teams from "./teams";
import { useEffect } from "react";
import CompanyDetailsSkeleton from "../components/skeletons/companyDetailsSkeleton";
import ActiveProjectsSkeleton from "../components/skeletons/activeProjectsSkeleton";
import TeamsSkeleton from "../components/skeletons/teamsSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { toggleActiveProjectsSkeleton, toggleCompanyDetailsSkeleton, toggleTeamsSkeleton } from "../redux/features/skeleton-slice";

const Dashboard = () => {
    const dispatch = useDispatch<AppDispatch>();
    const skeletonState = useSelector((state: RootState) => state.skeletonStateReducer);

    const apiCallCompanyDetails = () => {
        dispatch(toggleCompanyDetailsSkeleton(true));
        setTimeout(() => {
            dispatch(toggleCompanyDetailsSkeleton(false));
        }, 1000)
    }

    const apiCallActiveProjects = () => {
        dispatch(toggleActiveProjectsSkeleton(true));
        setTimeout(() => {
            dispatch(toggleActiveProjectsSkeleton(false));
        }, 2000)
    }

    const apiCallTeams = () => {
        dispatch(toggleTeamsSkeleton(true));
        setTimeout(() => {
            dispatch(toggleTeamsSkeleton(false));
        }, 3000)
    }

    useEffect(() => {
        apiCallCompanyDetails();
        apiCallActiveProjects();
        apiCallTeams();
    }, [])

    return (
        <div className="w-full flex flex-col gap-2">
            <div className="w-full flex gap-2 flex-col lg:flex-row">
                <div className="w-full lg:w-6/12">
                    {skeletonState.companyDetailsSkeleton ? <CompanyDetailsSkeleton /> : <CompanyDetails />}
                </div>
                <div className="w-full lg:w-6/12">
                    {skeletonState.activeProjectsSkeleton ? <ActiveProjectsSkeleton /> : <ActiveProjects />}
                </div>
            </div>
            <div className="w-full">
                {skeletonState.teamsSkeleton ? <TeamsSkeleton /> : <Teams />}
            </div>
        </div>
    )
}

export default Dashboard;