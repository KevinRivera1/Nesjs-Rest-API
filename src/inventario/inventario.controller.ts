import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';
import { InventarioService } from './inventario.service';

@ApiTags('Inventario')
@Controller('inventario')
export class InventarioController {
  constructor(private readonly inventarioService: InventarioService) {}

  @ApiOperation({ summary: 'Crear un nuevo elemento en el inventario' })
  @ApiResponse({ status: 200, description: 'Elemento creado correctamente' })
  @Post('create')
  create(@Body() createInventarioDto: CreateInventarioDto) {
    return this.inventarioService.create(createInventarioDto);
  }

  @ApiOperation({ summary: 'Obtener todos los elementos del inventario' })
  @ApiResponse({ status: 200, description: 'Lista de elementos del inventario' })
  @Get('all')
  findAll() {
    return this.inventarioService.findAll();
  }

  @ApiOperation({ summary: 'Obtener un elemento del inventario' })
  @ApiResponse({ status: 200, description: 'Elemento del inventario' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inventarioService.findOne(+id);
  }

  @ApiOperation({ summary: 'Actualizar un elemento del inventario' })
  @ApiResponse({ status: 200, description: 'Elemento del inventario actualizado' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInventarioDto: UpdateInventarioDto) {
    return this.inventarioService.update(+id, updateInventarioDto);
  }

  @ApiOperation({ summary: 'Actualizar un elemento del inventario' })
  @ApiResponse({ status: 200, description: 'Elemento del inventario actualizado' })
  @Put(':id')
  updateInv(@Param('id') id: string, @Body() updateInventarioDto: UpdateInventarioDto) {
    return this.inventarioService.update(+id, updateInventarioDto);
  }

  @ApiOperation({ summary: 'Eliminar un elemento del inventario fisico' })
  @ApiResponse({ status: 200, description: 'Elemento del inventario eliminado fisico' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventarioService.remove(+id);
  }

  @ApiOperation({ summary: 'Eliminar un elemento del inventario logico' })
  @ApiResponse({ status: 200, description: 'Elemento del inventario eliminado logico' })
  @Delete('soft-delete/:invId')
  async softDeleteUser(@Param('invId') invId: number): Promise<void> {
    await this.inventarioService.softDeleteUser(invId);
  }

  @ApiOperation({ summary: 'Restaurar un elemento del inventario eliminado logico' })
  @ApiResponse({ status: 200, description: 'Elemento del inventario restaurado' })
  @Patch('restore/:invId')
  async restoreUser(@Param('invId') invId: number): Promise<void> {
    await this.inventarioService.restoreUser(invId);
  }

}
