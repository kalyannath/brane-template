'use client'

import ActiveProjects from "./activeProjects";
import CompanyDetails from "./companyDetails";

const Dashboard = () => {
    return (
        <div className="w-full flex flex-col gap-5">
            <div className="w-full flex gap-5 flex-col lg:flex-row">
                <div className="w-full lg:w-6/12">
                    <CompanyDetails />
                </div>
                <div className="w-full lg:w-6/12">
                    <ActiveProjects />
                </div>
            </div>
            <div className="w-full flex flex-col gap-2">
                <div className="font-bold">Teams</div>
                <div className="flex">
                    <div>card1</div>
                    <div>card2</div>
                    <div>card3</div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;