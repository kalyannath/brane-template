import { Skeleton } from "@nextui-org/react"
import ProjectSkeleton from "./projectSkeleton";

const ActiveProjectsSkeleton = () => {
    return (
        <div className="duration-[500ms] w-full h-full flex flex-col rounded-lg border-[0.5px] border-borderColor1/50 py-4 px-6 bg-background2 justify-between">
            <Skeleton className="w-3/5 rounded-lg">
                <div className="h-6 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <div className="w-full flex overflow-x-auto gap-2">
                <ProjectSkeleton />
                <ProjectSkeleton />
                <ProjectSkeleton />
            </div>
        </div>
    )
}

export default ActiveProjectsSkeleton;