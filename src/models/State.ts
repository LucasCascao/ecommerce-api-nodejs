import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { City } from "./City";

@Entity("estado")
class State {
    
    @PrimaryGeneratedColumn({name: "est_id"})
    id: number;

    @Column({name: "est_descricao"})
    description: string;

    @OneToMany(() => City, cities => cities.state)
    cities: City[];
}

export{ State }