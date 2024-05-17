'use client'

import { Card, CardBody } from "@nextui-org/react";

const Dashboard = () => {
    return (
        <div className="flex gap-5">
            <div className="flex flex-col flex-1 gap-5">
                <div className="flex gap-5">
                    <div>
                        <Card>
                            <CardBody>
                                <p>Company details</p>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <CardBody>
                                <p>Active projects</p>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="font-bold">Teams</div>
                    <div className="flex">
                        <Card>
                            <CardBody>
                                <p>Card1</p>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <p>Card2</p>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <p>Card3</p>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <Card>
                    <CardBody>
                        <p>Card1</p>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <p>Card2</p>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <p>Card3</p>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default Dashboard;