import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { City } from "./City";
import { Client } from "./Client";
import { Status } from "./Status";
import { TypeAddress } from "./TypeAddress";

@Entity("endereco")
class Address {
   
    @PrimaryGeneratedColumn({name: "end_id"})
    id: number;

    @Column({name: "end_logradouro"})
    street: string;

    @Column({name: "end_numero"})
    number: string;

    @Column({name: "end_bairro"})
    district: string;

    @Column({name: "end_cep"})
    cep: string;

    @Column({name: "end_complemento"})
    complement: string;

    @ManyToOne(() => City, city => city.addresses, {eager: true})
    @JoinColumn({name: "end_cidade_id"})
    city: City;

    @ManyToOne(() => Client, client => client.addresses)
    @JoinColumn({name: "end_cliente_id"})
    client: Client;

    @ManyToOne(() => Status, {eager: true})
    @JoinColumn({name: "end_status_id"})
    status: Status;

    @ManyToOne(() => TypeAddress, {eager: true})
    @JoinColumn({name: "end_ten_id"})
    typeAddress: TypeAddress;
}

export { Address };