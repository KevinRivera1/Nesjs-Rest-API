import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';
import { Inventario } from './entities/inventario.entity';

@Injectable()
export class InventarioService {
 

  //* Se inyecta el repositorio de inventario
  constructor(
    @InjectRepository(Inventario)
    private readonly inventarioRepository: Repository<Inventario>,
  ) { 
   
  }

  async findAll() {
    return await this.inventarioRepository.find();
  }

  
  async create(createInventarioDto: CreateInventarioDto) {
    const inventario = await this.inventarioRepository.create(createInventarioDto);
    return await this.inventarioRepository.save(inventario);
  }

   async findOne(id: number): Promise<Inventario | undefined> {
    const inventario = await this.inventarioRepository.findOneBy({id});
    if (!inventario) {
      throw new NotFoundException(`Inventario con ID ${id} no encontrado`);
    }
    return inventario;
  }

  async update(id: number, updateInventarioDto: UpdateInventarioDto) {
    return await this.inventarioRepository.update(id, updateInventarioDto);
  }

  async remove(id: number) {
    return await this.inventarioRepository.delete(id);
  }

  //* Eliminacion logica
  async softDeleteUser(invId: number): Promise<void> {
    await this.inventarioRepository.softDelete(invId);
  }

  //* Restauracion de eliminacion logica
  async restoreUser(invId: number): Promise<void> {
    await this.inventarioRepository.restore(invId);
  }


}
