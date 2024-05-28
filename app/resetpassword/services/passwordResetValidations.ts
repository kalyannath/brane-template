export const PasswordResetFormValidations = {
    email: {
        required: process.env.NEXT_PUBLIC_REQUIRED_MSG,
        pattern: {
            value: new RegExp(process.env.NEXT_PUBLIC_EMAIL_VALIDATION_PATTERN as string),
            message: "Invalid email address"
        }
    },
}