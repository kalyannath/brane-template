"use client"

import { Card } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { setTeam } from "../redux/features/teams-slice";
import { toggleRightSidebarSkeleton } from "../redux/features/skeleton-slice";
import { TeamsUtils } from "../utils/teamsUtils";
import { useEffect } from "react";

const Teams = () => {
    const dispatch = useDispatch<AppDispatch>();
    const teamState = useSelector((state: RootState) => state.TeamsStateReducer);

    useEffect(() => {
        dispatch(setTeam("Propulsion Engineers"))
    }, [])

    const onClickTeam = (team: string) => {
        console.log("clicked", team);
        // update global state for team slice
        if (team != teamState.teamName) {
            dispatch(setTeam(team));
            dispatch(toggleRightSidebarSkeleton(true));
            setTimeout(() => {
                dispatch(toggleRightSidebarSkeleton(false));
            }, 1000)
        }
    }

    return (
        <div className="flex flex-col gap-4 bg-background2 rounded-lg border-[0.5px] border-borderColor1/50 py-2 px-4">
            <div className="text-contentIconsColor font-semibold text-lg">Teams</div>
            <div className="flex gap-4 overflow-x-auto">
                {
                    TeamsUtils.map((t, index) => (
                        <Card key={index} className={`max-w-fit rounded-xl 
                            ${t.title === teamState.teamName ? "bg-gradient-to-r from-activeItemBackground/50 to-background" : "bg-background"} 
                            text-contentIconsColor border-[0.5px] border-borderColor1/50 justify-between p-4`} onPress={() => { onClickTeam(t.title) }} isPressable isHoverable >
                            {t.icon}
                            <div className="flex justify-between gap-10 items-end">
                                <div className="font-semibold text-sm md:text-lg">{t.title}</div>
                                <div className="font-semibold text-xl md:text-2xl text-end">{t.number}</div>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Teams;