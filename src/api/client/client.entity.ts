import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Client{
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: "varchar", length: 100, nullable: false })
    public name: string;

    @Column({ type: 'boolean', default: false })
    public isDeleted: boolean;

    @CreateDateColumn({ type: 'timestamp' })
    public createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    public updatedAt!: Date;

}
