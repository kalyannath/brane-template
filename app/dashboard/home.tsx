'use client'

import { Card, CardBody } from "@nextui-org/react";

const Dashboard = () => {
    return (
        <div className="flex gap-5">
            <div className="flex flex-col flex-1 gap-5">
                <div className="flex gap-5">
                    <div>card1</div>
                    <div>card2</div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="font-bold">Teams</div>
                    <div className="flex">
                        <div>card1</div>
                        <div>card2</div>
                        <div>card3</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div>card1</div>
                <div>card2</div>
                <div>card3</div>
            </div>
        </div>
    )
}

export default Dashboard;