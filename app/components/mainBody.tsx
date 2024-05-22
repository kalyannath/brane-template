'use client'

const MainBody = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="w-full xl:w-9/12 overflow-y-hidden xl:overflow-y-auto">
            {children}
        </div>
    )
}

export default MainBody;