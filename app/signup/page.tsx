'use client'

import { Button, Divider, Image, } from "@nextui-org/react";
import { UserRegistrationModelType } from "../models/AuthModel";
import TypeInput from "../formUtils/typeInput";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { BraneLogo } from "../icons/braneLogo";
import { BraneLogoText } from "../icons/braneLogoText";
import { UserRegistrationFormValidations } from "./service/RegistrationFormValidations";
import { HiOutlineMail } from "react-icons/hi";

const SignUp = () => {

    const {
        control,
        handleSubmit,
        reset,
        register,
        watch,
        setValue,
    } = useForm<UserRegistrationModelType>();

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
                <div className="w-full flex justify-between items-center">
                    <div className="flex justify-center items-center gap-4">
                        <BraneLogo width={25} height={25} />
                        <BraneLogoText size={100} />
                        <div className="font-light text-md">
                            App name
                        </div>
                    </div>
                    <div className="font-light text-xl">
                        Registration
                    </div>
                </div>
                <Divider />
                <form onSubmit={handleSubmit(onSubmit)} className="flex w-full overflow-auto flex-col gap-5">
                    <TypeInput
                        name="email"
                        control={control}
                        rules={UserRegistrationFormValidations.email}
                        label="Email"
                        type="email"
                        required={true}
                        startContent={<HiOutlineMail size={20} />}
                        size="lg"
                    />
                    <TypeInput
                        name="age"
                        control={control}
                        rules={{ required: true }}
                        label="Age"
                        type="number"
                        required={true}
                    />
                    <TypeInput
                        name="email"
                        control={control}
                        rules={{ required: true }}
                        label="Email"
                        placeholder="Enter email"
                        type="email"
                        required={true}
                    />
                    <TypeInput
                        name="password"
                        control={control}
                        rules={{ required: true }}
                        label="Password"
                        placeholder="Enter password"
                        type="password"
                        required={true}
                    />
                    <div className="flex flex-wrap gap-4 items-space justify-between">
                        <Button type="submit" color="primary" variant="solid" onClick={handleSubmit(onSubmit)}>
                            Sign Up
                        </Button>
                        <Link href="/login">Already have an account? Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;