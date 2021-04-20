import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "./Status";
import { TypeUser } from "./TypeUser";

@Entity("usuario")
class User {

    @PrimaryGeneratedColumn({name: "usu_id"})
    readonly id: number;

    @Column({name: "usu_email"})
    email: string;

    @Column({name: "usu_senha"})
	password: string;

	rePassword: string;

	@ManyToOne(() => Status, {eager: true})
    @JoinColumn({name: "usu_status_id"})
	status: Status;

	@ManyToOne(ty => TypeUser, typeUser => typeUser.users, {eager: true})
    @JoinColumn({name: "usu_tipo_usuario_id"})
    typeUser: TypeUser;
}

export { User };