export const login = (email, password) => {
    
    return fetch("https://backend-login-placeholder.deno.dev/api/users/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.status === "error") {
                throw new Error(data.code);
            }
            return data.payload;
        })
}
