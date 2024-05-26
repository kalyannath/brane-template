import { Input } from "@nextui-org/react";
import { ReactNode, useState } from "react";
import { Control, Controller } from "react-hook-form";
import { IoEye, IoEyeOff } from "react-icons/io5";

type ControlledPasswordProps = {
    name: string,
    control: Control<any>,
    rules?: any,
    label?: string,
    placeholder?: string,
    required: boolean,
    labelPlacement?: "outside" | "outside-left" | "inside" | undefined,
    startContent?: ReactNode,
    size?: "sm" | "md" | "lg" | undefined,
}

const TypePassword = ({ ...props }: ControlledPasswordProps) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);
    return (
        <Controller
            name={props.name}
            control={props.control}
            rules={props.rules}
            render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState, }) =>
                <Input
                    labelPlacement={props.labelPlacement || "outside"}
                    isRequired={props.required}
                    label={props.label}
                    placeholder={props.placeholder}
                    type={isVisible ? "text" : "password"}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    isInvalid={invalid}
                    errorMessage={`${error?.message}`}
                    startContent={props.startContent}
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                            {isVisible ? (
                                <IoEye className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                                <IoEyeOff className="text-2xl text-default-400 pointer-events-none" />
                            )}
                        </button>
                    }
                    size={props.size || "md"}
                />
            }
        />
    )
}

export default TypePassword;