import { Button, Divider } from "@nextui-org/react";
import { ReactNode } from "react";
import { Toast } from "react-hot-toast";
import toast from "react-hot-toast";
import { CgClose } from "react-icons/cg";

export const ToastMessage = ({ message, t, canDismiss = true }: { message: string | ReactNode, t: Toast, canDismiss?: boolean }) => {

    return (
        <div
            className={`${t.visible ? 'animate-enter' : 'animate-leave'
                } bg-foreground text-sideBarIconsColor shadow-lg flex justify-center items-center p-2 rounded-lg border-[0.5px] border-borderColor1/50 text-sm gap-4`}
        >
            <div className="px-2">
                {message}
            </div>
            {canDismiss && <Divider orientation="vertical" className="bg-sideBarIconsColor" />}
            {canDismiss && <Button className="text-sideBarIconsColor" isIconOnly color="primary" variant="light" onPress={() => { toast.remove(t.id) }}>
                <CgClose size={20} />
            </Button>}
        </div>
    )
}

export default ToastMessage;