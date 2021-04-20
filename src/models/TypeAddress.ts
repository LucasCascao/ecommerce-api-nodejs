import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tipo_endereco")
class TypeAddress {
    
    @PrimaryGeneratedColumn({name: "ten_id"})
    id: number;

    @Column({name: "ten_nome"})
    name: string;

    @Column({name: "ten_descricao"})
    description: string;
}

export { TypeAddress };