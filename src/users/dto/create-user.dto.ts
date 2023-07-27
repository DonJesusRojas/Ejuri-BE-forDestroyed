import { IsNotEmpty } from "class-validator";

export class CreateUserDto{
    @IsNotEmpty()
    name;
    @IsNotEmpty()
    email;
    @IsNotEmpty()
    password;
}