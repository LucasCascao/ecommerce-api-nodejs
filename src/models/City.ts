import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./Address";
import { State } from "./State";

@Entity("cidade")
class City {
    
    @PrimaryGeneratedColumn({name: "cid_id"})
    id: number;

    @Column({name: "cid_descricao"})
    description: string;

    @ManyToOne(() => State, state => state.cities, {eager: true})
    @JoinColumn({name: "cid_estado_id"})
    state: State;

    @OneToMany(() => Address, addresses => addresses.city)
    addresses: Address[];
}

export { City }