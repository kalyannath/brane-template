'use client'

const MainBody = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="w-full lg:w-9/12 overflow-y-auto">
            {children}
        </div>
    )
}

export default MainBody;