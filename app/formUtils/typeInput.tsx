import { Input } from "@nextui-org/react";
import { ReactNode } from "react";
import { Control, Controller } from "react-hook-form";

type ControlledInputProps = {
    name: string,
    control: Control<any>,
    rules?: any,
    label?: string,
    placeholder?: string,
    type: string,
    required: boolean,
    labelPlacement?: "outside" | "outside-left" | "inside" | undefined,
    startContent?: ReactNode,
    endContent?: ReactNode,
    size?: "sm" | "md" | "lg" | undefined,
    disabled?: boolean,
}

const TypeInput = ({...props }: ControlledInputProps) => {
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
                    type={props.type}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    isInvalid={invalid}
                    errorMessage={`${error?.message}`}
                    startContent={props.startContent}
                    endContent={props.endContent}
                    onClear={()=> { // make the field isCLearable by default
                        onChange("");
                    }}
                    size={props.size || "md"}
                    isDisabled={props.disabled || false}
                />
            }
        />
    )
}

export default TypeInput;