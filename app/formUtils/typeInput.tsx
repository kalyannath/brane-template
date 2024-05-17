import { Input } from "@nextui-org/react";
import { Controller, Control } from "react-hook-form";

type ControlledInputProps = {
    name: string,
    control: any,
    rules?: any,
    label?: string,
    placeholder?: string,
    type: string,
}

const TypeInput = (props: ControlledInputProps) => {
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
                    label={props.label}
                    placeholder={props.placeholder}
                    type={props.type}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    isInvalid={isTouched && invalid}
                    errorMessage={error?.message}
                />
            }
        />
    )
}

export default TypeInput;