import { Component, EventEmitter, Output } from '@angular/core';
import { Producto } from '../../producto';
import { ProductoService } from '../../services/producto.service';
import { CardComponent } from '../card/card';

@Component({
  selector:'app-lista',
  standalone:true,
  imports:[CardComponent],
  templateUrl:'./lista.html',
  styleUrl:'./lista.css'
})
export class ListaComponent{

  @Output() editar = new EventEmitter<Producto>();

  productos:Producto[]=[];

  constructor(private productoService:ProductoService){
    this.productos=this.productoService.obtenerProductos();
  }

  eliminarProducto(id:number){
    this.productoService.eliminarProducto(id);
    this.productos=this.productoService.obtenerProductos();
  }

  editarProducto(producto:Producto){
    this.editar.emit(producto);
  }

}