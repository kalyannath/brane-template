export const UserLoginFormValidations = {
    username: {
        required: process.env.NEXT_PUBLIC_REQUIRED_MSG,
        // pattern: {
        //     value: new RegExp(process.env.NEXT_PUBLIC_EMAIL_VALIDATION_PATTERN as string),
        //     message: "Invalid email address"
        // }
    },
    password: {
        required: process.env.NEXT_PUBLIC_REQUIRED_MSG,
        // minLength: {
        //     value: parseInt(process.env.NEXT_PUBLIC_PASSWORD_MIN_LENGTH as string),
        //     message: `Minimum length is ${process.env.NEXT_PUBLIC_PASSWORD_MIN_LENGTH}`
        // }
    },
}
