import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "carrito"})
export class Carrito {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  precio: number;

  @Column()
  cantidad: number;

  @Column()
  imagen: string;

  @Column()
  categoria: string;

  @Column()
  fechaCreacion: Date;

  @Column()
  fechaActualizacion: Date;
}
