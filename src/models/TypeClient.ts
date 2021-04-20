import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./Client";


@Entity({name: "tipo_cliente"})
class TypeClient {
    
    @PrimaryGeneratedColumn({name: "tcl_id"})
    id: number;

    @Column({name: "tcl_nome"})
    name: string;

    @Column({name: "tcl_descricao"})
    description: string;

    @OneToMany(() => Client, clients => clients.typeClient)
    clients: Client[];
}

export { TypeClient };