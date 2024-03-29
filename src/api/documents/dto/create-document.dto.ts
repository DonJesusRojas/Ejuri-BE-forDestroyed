import { IsNotEmpty } from "class-validator";

export class CreateDocumentDto {
    @IsNotEmpty()
    id;
    @IsNotEmpty()
    category;
    @IsNotEmpty()
    type;
    @IsNotEmpty()
    duplicate;
}
