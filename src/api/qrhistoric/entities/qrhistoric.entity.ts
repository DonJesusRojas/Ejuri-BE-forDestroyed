import { Client } from "src/api/client/client.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Document } from "src/api/documents/entities/document.entity";
@Entity()
export class Qrhistoric {
    @PrimaryGeneratedColumn()
    public id: number;

    @OneToMany(type => Client, client => client.id)
    @Column()
    idclient: number;

    @Column()
    folio: string;

    @Column()
    comments: string;

    @OneToMany(type => Document, document => document.id)
    @Column()
    iddocument: string;

    @Column()
    qr: string;

}
