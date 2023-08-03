import { IsNotEmpty, IsString } from "class-validator";

export class CreateQrhistoricDto {
    
    @IsNotEmpty()
    client;
    @IsString()
    @IsNotEmpty()
    folio;
    @IsString()
    comments; 
    @IsString()
    @IsNotEmpty()
    document; 
    @IsNotEmpty()
    category
    @IsString()
    @IsNotEmpty()
    qr;
    @IsNotEmpty()
    user;
}
