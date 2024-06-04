import { Skeleton } from "@nextui-org/react"

const RightSidebarSkeleton = () => {
    return (
        <div className="mt-4 xl:mt-0 flex flex-col gap-4 w-full xl:w-4/12 h-full rounded-lg border-[0.5px] border-borderColor1/50 py-6 px-4 bg-background2">
            <Skeleton className="w-full rounded-lg">
                <div className="h-10 rounded-lg bg-default-200"></div>
            </Skeleton>
            <div className="w-full flex-1 overflow-y-auto px-2">
                {
                    [...Array(10)].map((i, index) => (
                        <div key={index} className={`px-4 py-6 w-full flex gap-4 items-center bg-cardBodyBackground/20 rounded-lg border-[0.5px] border-borderColor1/50 mb-2`}
                        >
                            <Skeleton className="w-12 rounded-full">
                                <div className="h-12 rounded-lg bg-default-200"></div>
                            </Skeleton>
                            <div className={`flex flex-col flex-1 gap-1`}>
                                <Skeleton className="w-6/12 rounded-lg">
                                    <div className="h-4 rounded-lg bg-default-200"></div>
                                </Skeleton>
                                <Skeleton className="w-6/12 rounded-lg">
                                    <div className="h-4 rounded-lg bg-default-200"></div>
                                </Skeleton>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RightSidebarSkeleton;