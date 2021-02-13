import { User } from "../entity/user.entity";

export class CreateUserResponse{
    private username: string;
    private id: string;

    constructor(user: User){
        this.username = user.username;
        this.id = user.id;
    }
}