'use client'

import ActiveProjects from "./activeProjects";
import CompanyDetails from "./companyDetails";
import Teams from "./teams";

const Dashboard = () => {
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