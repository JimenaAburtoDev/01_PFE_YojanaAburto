import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../producto';

@Component({
  selector:'app-card',
  standalone:true,
  imports:[],
  templateUrl:'./card.html',
  styleUrl:'./card.css'
})
export class CardComponent{

  @Input() producto!:Producto;

  @Output() editar = new EventEmitter<Producto>();
  @Output() eliminar = new EventEmitter<number>();

  editarProducto(){
    this.editar.emit(this.producto);
  }

  eliminarProducto(){
    if(confirm('¿Eliminar este producto?')){
      this.eliminar.emit(this.producto.id);
    }
  }

}