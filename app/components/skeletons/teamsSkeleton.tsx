import { Skeleton } from "@nextui-org/react"

const TeamsSkeleton = () => {
    return (
        <div className="flex flex-col gap-4 bg-background2 rounded-lg border-[0.5px] border-borderColor1/50 py-2 px-4">
            <Skeleton className="w-3/5 rounded-lg">
                <div className="h-8 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <div className="w-full flex gap-4">
                <Skeleton className="rounded-lg w-4/12">
                    <div className="h-32 w-4/12 rounded-lg bg-secondary"></div>
                </Skeleton>
                <Skeleton className="rounded-lg w-4/12">
                    <div className="h-32 w-4/12 rounded-lg bg-secondary"></div>
                </Skeleton>
                <Skeleton className="rounded-lg w-4/12">
                    <div className="h-32 w-4/12 rounded-lg bg-secondary"></div>
                </Skeleton>
            </div>
        </div>
    )
}

export default TeamsSkeleton;