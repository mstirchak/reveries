import { User } from "../entity/user.entity";

export class CreateUserResponse{
    private username: string;

    constructor(user: User){
        this.username = user.username;
    }
}