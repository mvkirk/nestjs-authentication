
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as crypto from 'crypto';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    email:string;
    
    @BeforeInsert()
    hashPassword() {
        this.password = crypto.createHmac('sha256', this.password).digest('hex');
    }

    @Column()
    password:string;

    @Column({ length: 80 })
    firstname:string;

    @Column({ length: 80 })
    lastname:string;

}