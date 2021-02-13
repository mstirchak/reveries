import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from 'class-validator';

export class UpdateUserPasswordRequest {
    @ApiProperty({
        description: 'username',
        type: String,
        example: 'user-1',
        required: true
    })
    @IsNotEmpty()
    username: string;

    @ApiProperty({
        description: 'old password',
        type: String,
        example: 'oldPassword',
        required: true,
    })
    @IsNotEmpty()
    oldPassword: string;

    @ApiProperty({
        description: 'new password',
        type: String,
        example: 'newPassword',
        required: true,
    })
    @IsNotEmpty()
    newPassword: string;
}