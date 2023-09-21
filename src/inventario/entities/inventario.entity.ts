import { Column, DeleteDateColumn, Entity } from "typeorm";

@Entity({ name: "inventario" })
export class Inventario {
  //@PrimaryGeneratedColumn("increment")          // primera forma valida
  @Column({ primary: true, generated: true }) // segunda forma valida
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  cantidad: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  fecha: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deleteAt: Date;
}
