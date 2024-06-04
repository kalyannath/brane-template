import { Skeleton } from "@nextui-org/react"

const CompanyDetailsSkeleton = () => {
    return (
        <div className="transition-all duration-[500ms] w-full h-full flex flex-col rounded-lg border-[0.5px] border-borderColor1/50 py-4 px-6 bg-background2 justify-between gap-2">
            <Skeleton className="w-3/5 rounded-lg">
                <div className="h-6 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-3/5 rounded-lg">
                <div className="h-6 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4">
                <Skeleton className="rounded-lg">
                    <div className="h-20 rounded-lg bg-secondary"></div>
                </Skeleton>
                <Skeleton className="rounded-lg">
                    <div className="h-20 rounded-lg bg-secondary"></div>
                </Skeleton>
                <Skeleton className="rounded-lg">
                    <div className="h-20 rounded-lg bg-secondary"></div>
                </Skeleton>
                <Skeleton className="rounded-lg">
                    <div className="h-20 rounded-lg bg-secondary"></div>
                </Skeleton>
            </div>
        </div>
    )
}

export default CompanyDetailsSkeleton;