'use client'

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const AppHome = () => {
    const router = useRouter()
    return (
        <div>
            <Button variant="flat" onClick={() => router.push("/singup")}>
                Sign Up
            </Button>
            <Button variant="flat" onClick={() => router.push("/login")}>
                Login
            </Button>
        </div>
    )
}

export default AppHome;