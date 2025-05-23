import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Policy {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    clientNumber:string

    @Column()
    polcyNumber:string

    @Column()
    expiryDate: Date

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
