import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name:"carrinhos"})
class Cart {
    
    @PrimaryGeneratedColumn({name:"crr_id"})
    id: number;
    
    @Column({name: "crr_produto"})
    produto: string;
}

export {Cart};