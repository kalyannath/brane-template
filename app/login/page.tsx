'use client'

import { Button, Divider } from "@nextui-org/react";
import TypeInput from "../formUtils/typeInput";
import { UserLoginModel, UserLoginModelType } from "../models/AuthModel";
import { SubmitHandler, useForm } from "react-hook-form";

const Login = () => {
    const { handleSubmit, control, reset, watch, setValue } = useForm<UserLoginModelType>({
        defaultValues: UserLoginModel,
    });

    const onSubmit: SubmitHandler<UserLoginModelType> = (data) => console.log(data)
    return (
        <div className="w-full h-full flex justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 rounded-lg border-[0.5px] border-borderColor1/50 py-4 px-6">
                <div className="font-bold text-start">
                    Login
                </div>
                <Divider />
                <div className="flex flex-col gap-5">
                    <TypeInput
                        name="email"
                        control={control}
                        rules={{ required: true }}
                        label="Email"
                        placeholder="Enter email"
                        type="email"
                    />
                    <TypeInput
                        name="password"
                        control={control}
                        rules={{ required: true }}
                        label="Password"
                        placeholder="Enter password"
                        type="password"
                    />
                </div>
                <div className="flex flex-wrap gap-4 items-space justify-between">
                    <Button type="submit" color="primary" variant="solid" onClick={handleSubmit(onSubmit)}>
                        Sign Up
                    </Button>
                    <Button color="primary" variant="light">
                        Already have an account? Login
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Login;