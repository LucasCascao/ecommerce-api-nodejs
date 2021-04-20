import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Document } from './Document';


@Entity("tipo_documento")
class TypeDocument {
    
    @PrimaryGeneratedColumn({name: "tdo_id"})
    id: number;

    @Column({name: "tdo_nome"})
    name: string;

    @Column({name: "tdo_descricao"})
    description: string;

    @OneToMany(() => Document, documentos => documentos.tipoDocumento)
    documents: Document[];
}

export { TypeDocument };