export class LoginResponse{
    authToken: string;

    constructor(token: string){
        this.authToken = token;
    }
}