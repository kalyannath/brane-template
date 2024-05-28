const Post = async (url: string, requestPayload: any, credentials: RequestCredentials = "same-origin") => {
    return fetch( url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        credentials: credentials, // Important to include credentials
        body: requestPayload
    });
}

const HTTP = { Post };

export default HTTP;