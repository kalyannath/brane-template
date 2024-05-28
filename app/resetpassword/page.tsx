'use client'

import { Button, Divider } from "@nextui-org/react";
import TypeInput from "../formUtils/typeInput";
import { UserLoginModelType } from "../models/AuthModel";
import { SubmitHandler, useForm } from "react-hook-form";
import { BraneLogo } from "../icons/braneLogo";
import { BraneLogoText } from "../icons/braneLogoText";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { PasswordResetFormValidations } from "./services/passwordResetValidations";
import toast from 'react-hot-toast';
import ToastMessage from "../components/toastMessage";

const Login = () => {

    const {
        control,
        handleSubmit,
        reset,
        register,
        watch,
        setValue,
    } = useForm<UserLoginModelType>();

    const onSubmit: SubmitHandler<UserLoginModelType> = (data) => {
        console.log("form data::::::::", data);
        toast.custom((t) => (<ToastMessage message="Password reset link sent successfully." t={t} />));
    }

    return (
        <div className="w-full h-full flex justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 rounded-lg border-[0.5px] border-borderColor1/50 p-8">
                <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center gap-4">
                        <BraneLogo width={25} height={25} />
                        <BraneLogoText size={100} />
                    </div>
                    <Divider orientation="vertical" />
                    <div className="font-semibold text-md">
                        App name
                    </div>
                </div>
                <Divider />
                <div className="flex flex-col gap-4">
                    <TypeInput
                        name="email"
                        control={control}
                        rules={PasswordResetFormValidations.email}
                        label="Email"
                        type="email"
                        required={true}
                        startContent={<HiOutlineMail size={20} />}
                        size="lg"
                    />
                </div>
                <div className="flex flex-col gap-4 items-space justify-between items-center">
                    <Button type="submit" color="primary" variant="solid" onClick={handleSubmit(onSubmit)}>
                        Reset
                    </Button>
                    <Link href="/login" className="text-sm text-blue-500">Go back to login</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;