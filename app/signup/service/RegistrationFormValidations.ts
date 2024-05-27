export const UserRegistrationFormValidations = {
    name: {
        required: "Required",
    },
    age: {
        required: "Required",
        min: {
            value: 18,
            message: "Age should be >= 18"
        },
    },
    email: {
        required: "Required",
        pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Invalid email address"
        }
    },
    password: {
        required: "Required",
        minLength: {
            value: 8,
            message: "Minimum lenght is 8"
        }
    },
}