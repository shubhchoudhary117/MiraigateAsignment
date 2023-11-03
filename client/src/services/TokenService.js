


export class TokenService {

    static setToken = (token) => {
        let bearerToken='Bearer '+token;
        localStorage.setItem("miraigate-user", bearerToken);
        return true;
    }

    static getToken = () => {
        return localStorage.getItem("miraigate-user")
    }

    static removeToken = () => {
        localStorage.removeItem("miraigate-user")
    }
}

