import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Document {
    @PrimaryColumn()
    public id:string

    @Column()
    public category:string

    @Column()
    public type:string

    @Column()
    public duplicate:string
}
