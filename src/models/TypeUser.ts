import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from './User';

@Entity({name: "tipo_usuario"})
class TypeUser {

    @PrimaryGeneratedColumn({name: "tus_id"})
    id: number;

    @Column({name: "tus_nome_tipo"})
    name: string;

    @OneToMany(() => User, tipoCliente => TypeUser)
    users: User[];
}

export { TypeUser }