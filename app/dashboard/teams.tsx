import { Card } from "@nextui-org/react";
import { PropulsionEngineerIcon } from "../icons/propulsionEngineerIcon";
import { DesignEngineerIcon } from "../icons/designEngineerIcon";
import { AutonomyEngineerIcon } from "../icons/autonomyEngineerIcon";

const Teams = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="text-contentIconsColor font-semibold text-lg">Teams</div>
            <div className="flex gap-4 overflow-x-auto">
                <Card className="min-w-fit rounded-xl bg-gradient-to-r from-activeItemBackground/50 to-background text-contentIconsColor border-[0.5px] border-borderColor1/50 justify-between p-4">
                    <PropulsionEngineerIcon size={80} />
                    <div className="flex justify-between gap-10 items-end">
                        <div className="font-semibold text-sm md:text-lg">Propulsion Engineer</div>
                        <div className="font-semibold text-xl md:text-2xl text-end">12</div>
                    </div>
                </Card>
                <Card className="min-w-fit rounded-xl bg-gradient-to-r from-activeItemBackground/50 to-background text-contentIconsColor border-[0.5px] border-borderColor1/50 justify-between p-4">
                    <DesignEngineerIcon size={80} />
                    <div className="flex justify-between gap-10 items-end">
                        <div className="font-semibold text-sm md:text-lg">Design Engineer</div>
                        <div className="font-semibold text-md md:text-2xl text-end">12</div>
                    </div>
                </Card>
                <Card className="min-w-fit rounded-xl bg-gradient-to-r from-activeItemBackground/50 to-background text-contentIconsColor border-[0.5px] border-borderColor1/50 justify-between p-4">
                    <AutonomyEngineerIcon size={80} />
                    <div className="flex justify-between gap-10 items-end">
                        <div className="font-semibold text-sm md:text-lg">Autonomy Engineer</div>
                        <div className="font-semibold text-md md:text-2xl text-end">12</div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Teams;