
export type UserRegistrationModelType = {
    name: string;
    age: number;
    email: string;
    password: string;
};

export const UserRegModel: UserRegistrationModelType = {
    name: "",
    age: 0,
    email: "",
    password: ""
}

export type UserLoginModelType = {
    username: string,
    password: string,
}

export const UserLoginModel: UserLoginModelType = {
    username: "",
    password: ""
}