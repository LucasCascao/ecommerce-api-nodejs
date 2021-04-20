import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Address } from "../../models/Address";
import { TypeClient } from "../../models/TypeClient";
import { User } from "../../models/User";
import { Document } from "../../models/Document";

class CreateClientDTO {

    readonly id: number;

	name: string;

	lastName: string;

	birthday: Date;

	sex: string;

	typeClient: TypeClient;

    addresses: Address[];

	documents: Document[];
}

export { CreateClientDTO as ClientDTO };