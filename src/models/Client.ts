import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Document } from "./Document";
import { Address } from "./Address";
import { TypeClient } from "./TypeClient";
import { User } from "./User";

@Entity("cliente")
class Client {

    @PrimaryColumn({name: "cli_id"})
    readonly id: number;

    @Column({name: "cli_nome"})
	name: string;

	@Column({name: "cli_sobrenome"})
	lastName: string;

	@CreateDateColumn({name: "cli_data_nascimento"})
	birthday: Date;

	@Column({name: "cli_sexo"})
	sex: string;

	@ManyToOne(() => TypeClient, typeClient => typeClient.clients, {eager: true})
	@JoinColumn({name: "cli_tcl_id"})
	typeClient: TypeClient;

	@OneToOne(() => User, {eager: true})
	@JoinColumn({name: "cli_usu_id"})
	user: User;

	@OneToMany(() => Address, addresses => addresses.client, {eager: true})
    addresses: Address[];

	@OneToMany(() => Document, documents => documents.client, {eager: true})
	documents: Document[];

}

export { Client };