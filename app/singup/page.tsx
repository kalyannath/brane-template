'use client'

import { Button, Divider, Image, } from "@nextui-org/react";
import { useState } from "react";
import { UserRegModel, UserRegistrationModelType } from "../models/AuthModel";
import TypeInput from "../formUtils/typeInput";
import { useForm, SubmitHandler } from "react-hook-form";

const SignUp = () => {
    const { handleSubmit, control, reset, watch, setValue } = useForm<UserRegistrationModelType>({
        defaultValues: UserRegModel,
    });

    const onSubmit: SubmitHandler<UserRegistrationModelType> = (data) => console.log(data)
    return (
        <div className="flex flex-col w-full h-full md:flex-row p-10 gap-10">
            <div className="hidden md:flex justify-center items-center flex-1">
                <Image
                    alt="Woman listing to music"
                    className="object-cover"
                    height={200}
                    src="https://nextui.org/images/hero-card.jpeg"
                    width={200}
                />
            </div>
            <Divider className="hidden md:inline" orientation="vertical" />
            <div className="h-full flex flex-col flex-1 items-center gap-5">
                <div className="w-full text-center text-foreground"> Sing up Form</div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex w-full overflow-auto flex-col gap-5">
                    <TypeInput
                        name="name"
                        control={control}
                        rules={{ required: true }}
                        label="name"
                        placeholder="Enter name"
                        type="text"
                    />
                    <TypeInput
                        name="age"
                        control={control}
                        rules={{ required: true }}
                        label="Age"
                        type="number"
                    />
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
        </div>
    )
}

export default SignUp;