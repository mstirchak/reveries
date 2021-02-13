import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from 'class-validator';

export class CreateUserRequest {
    @ApiProperty({
        description: 'username',
        type: String,
        example: 'user-1',
        required: true
    })
    @IsNotEmpty()
    username: string;

    @ApiProperty({
        description: 'password',
        type: String,
        example: 'password',
        required: true
    })
    @IsNotEmpty()
    password: string;
}