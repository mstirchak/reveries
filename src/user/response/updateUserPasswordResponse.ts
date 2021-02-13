import { User } from "../entity/user.entity";

export class UpdateUserPasswordResponse{
    private username: string;
    private id: string;

    constructor(user: User){
        this.username = user.username;
        this.id = user.id;
    }
}