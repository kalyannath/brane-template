import axios from "axios";

const Post = (url: string, requestPayload: any, credentials: boolean = false) => {

    return axios
        .post(url, requestPayload, {
            withCredentials: credentials,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        })

}

const HTTP = { Post };

export default HTTP;