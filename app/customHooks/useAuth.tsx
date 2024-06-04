import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";
import { setTokenFromCookie } from "../redux/features/auth-slice";

export const UseAuth = () => {
    const [authernicated, setAuthenticated] = useState<boolean>(false);
    const router = useRouter()
    const pathName = usePathname();
    const authState = useSelector((state: RootState) => state.authReducer);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const cookie = Cookies.get("access_token");
        if (cookie) {
            console.log(pathName);
            if (!pathName.includes("dashboard") && pathName !== "/") {
                router.push("/dashboard");
            }
            setTimeout(() => {
                dispatch(setTokenFromCookie({ access_token: cookie }));
                setAuthenticated(true);
            }, 1000)
        } else {
            if (pathName.includes("dashboard")) {
                router.push("/");
            }
        }
    }, [authState.access_token])

    return authernicated;
}

