import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./Client";
import { TypeDocument } from "./TypeDocument";
import { TypeAddress } from "./TypeAddress";

@Entity("documento")
class Document {
    
    @PrimaryGeneratedColumn({name: "doc_id"})
    id: number;

    @Column({name: "doc_codigo"})
    codigo: string;

    @Column({name: "doc_data_validade"})
    dataValidade: Date;

    @ManyToOne(() => TypeAddress, {eager: true})
    @JoinColumn({name: "doc_tdo_id"})
    tipoDocumento: TypeDocument;

    @OneToOne(() => Client, client => client.typeClient)
    @JoinColumn({name: "doc_cli_id"})
    client: Client;
}

export { Document };