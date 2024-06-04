import { Divider, Skeleton } from "@nextui-org/react"

const ProjectSkeleton = () => {
    return (
        <div className="w-full flex flex-col px-2 py-2 pt-4 rounded-xl items-center justify-between gap-2">
            <Skeleton className="w-full rounded-lg">
                <div className="h-12 rounded-lg bg-default-200"></div>
            </Skeleton>
            <div className="w-full bg-default-200 px-4 py-2 rounded-xl flex flex-col justify-center gap-2">
                <Skeleton className="rounded-lg">
                    <div className="h-3 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Divider orientation="horizontal" />
                <Skeleton className="rounded-lg">
                    <div className="h-6 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Divider orientation="horizontal" />
                <Skeleton className="rounded-lg">
                    <div className="h-12 rounded-lg bg-secondary"></div>
                </Skeleton>
            </div>
        </div>
    )
}

export default ProjectSkeleton;