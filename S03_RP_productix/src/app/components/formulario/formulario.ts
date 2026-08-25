import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../producto';

@Component({
  selector:'app-formulario',
  standalone:true,
  imports:[FormsModule],
  templateUrl:'./formulario.html',
  styleUrl:'./formulario.css'
})
export class FormularioComponent implements OnChanges{

  @Input() productoEditar:Producto|null=null;

  @Output() guardar = new EventEmitter<Producto>();
  @Output() cerrar = new EventEmitter<void>();

  producto:Producto={
    id:0,
    nombre:'',
    categoria:'',
    precio:0,
    stock:0
  };

  ngOnChanges(){
    if(this.productoEditar){
      this.producto={...this.productoEditar};
    }else{
      this.producto={
        id:0,
        nombre:'',
        categoria:'',
        precio:0,
        stock:0
      };
    }
  }

  guardarProducto(){
    this.guardar.emit({...this.producto});
  }

  cerrarFormulario(){
    this.cerrar.emit();
  }
}